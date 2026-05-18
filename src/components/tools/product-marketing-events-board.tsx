'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { productMarketingEvents, EventLocationType } from '@/data/product-marketing-events'
import { formatDate } from '@/lib/utils'

type FilterKey = 'query' | 'locationType' | 'city'
type EventFilterKey = Exclude<FilterKey, 'query'>

const baseFilters: Record<FilterKey, string> = {
    query: '',
    locationType: 'all',
    city: 'all',
}

function getUniqueValues(key: 'locationType' | 'locationCity') {
    const values = new Set<string>()
    productMarketingEvents.forEach((event) => {
        // For city, valid only if locationType is In-Person or Hybrid usually, but simplifying
        const val = key === 'locationCity' ? event.locationCity : event.locationType
        if (val) values.add(val)
    })
    return Array.from(values).sort()
}

const locationTypeOptions = getUniqueValues('locationType')
const cityOptions = getUniqueValues('locationCity')

export function ProductMarketingEventsBoard() {
    const [filters, setFilters] = useState(baseFilters)

    const filteredEvents = useMemo(() => {
        return productMarketingEvents.filter((event) => {
            const normalizedQuery = filters.query.trim().toLowerCase()
            const matchesQuery =
                !normalizedQuery ||
                [event.title, event.organizer, event.description, event.tags.join(' ')].some((field) =>
                    field.toLowerCase().includes(normalizedQuery),
                )

            const matchesLocationType =
                filters.locationType === 'all' || event.locationType === filters.locationType

            const matchesCity =
                filters.city === 'all' || (event.locationCity && event.locationCity === filters.city)

            return matchesQuery && matchesLocationType && matchesCity
        })
    }, [filters])

    const handleFilterChange = (key: FilterKey, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleReset = () => setFilters(baseFilters)

    const handleTrackEvent = (eventName: string, eventId: string) => {
        if (typeof window !== 'undefined' && (window as any).posthog) {
            (window as any).posthog.capture('pmm_event_clicked', {
                event_name: eventName,
                event_id: eventId,
            })
        }
    }

    return (
        <section className="mt-12 space-y-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-400/10">
                <div className="flex flex-col gap-2">
                    <p className="text-sm uppercase tracking-wide text-gray-600">
                        Filters
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <label className="flex flex-col gap-2 text-sm text-gray-700">
                            Keyword
                            <input
                                type="text"
                                value={filters.query}
                                onChange={(event) => handleFilterChange('query', event.target.value)}
                                placeholder="Search event, organizer, or topic"
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm text-gray-700">
                            Format
                            <select
                                value={filters.locationType}
                                onChange={(event) => handleFilterChange('locationType', event.target.value)}
                                className="w-full appearance-none rounded-xl border border-gray-300 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_0.75rem_center] bg-no-repeat py-2 pl-4 pr-10 text-base text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                            >
                                <option value="all">Any Format</option>
                                {locationTypeOptions.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="flex flex-col gap-2 text-sm text-gray-700">
                            City
                            <select
                                value={filters.city}
                                onChange={(event) => handleFilterChange('city', event.target.value)}
                                className="w-full appearance-none rounded-xl border border-gray-300 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_0.75rem_center] bg-no-repeat py-2 pl-4 pr-10 text-base text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                            >
                                <option value="all">Any City</option>
                                {cityOptions.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
                        <p>
                            Showing{' '}
                            <span className="text-gray-900">
                                {filteredEvents.length}
                            </span>{' '}
                            out of {productMarketingEvents.length} events
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline"
                            >
                                Reset filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {filteredEvents.length === 0 && (
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500">
                        No events match that filter combo yet. Try broadening your search.
                    </div>
                )}

                {filteredEvents.map((event) => (
                    <article
                        key={event.id}
                        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-400/10 transition hover:border-gray-300"
                    >
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                                    {event.locationType} {event.locationCity ? `• ${event.locationCity}` : ''}
                                </p>
                                <h3 className="mt-2 text-2xl font-semibold text-gray-900">{event.title}</h3>
                                <p className="text-lg text-gray-600">{event.organizer}</p>
                            </div>
                            <div className="text-sm text-gray-500 lg:text-right">
                                <p>
                                    {formatDate(event.startDate)}
                                    {event.endDate ? ` - ${formatDate(event.endDate)}` : ''}
                                </p>
                                {event.time && <p className="mt-1">{event.time}</p>}
                            </div>
                        </div>

                        <p className="mt-4 text-base text-gray-700">{event.description}</p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {event.tags.map((tag) => (
                                <span
                                    key={`${event.id}-${tag}`}
                                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-end">
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href={event.registerUrl}
                                    target="_blank"
                                    onClick={() => handleTrackEvent(event.title, event.id)}
                                    className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
