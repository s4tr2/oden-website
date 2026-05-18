'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { productMarketingJobListings } from '@/data/product-marketing-job-board'
import { formatDate } from '@/lib/utils'

type FilterKey = 'query' | 'location' | 'workSetting' | 'experienceLevel'
type JobFilterKey = Exclude<FilterKey, 'query'>

const baseFilters: Record<FilterKey, string> = {
  query: '',
  location: 'all',
  workSetting: 'all',
  experienceLevel: 'all',
}

function getUniqueValues(key: JobFilterKey) {
  const values = new Set<string>()
  productMarketingJobListings.forEach((job) => {
    const nextValue = job[key]
    values.add(nextValue)
  })
  return Array.from(values).sort()
}

const locationOptions = getUniqueValues('location')
const workSettingOptions = getUniqueValues('workSetting')
const experienceOptions = getUniqueValues('experienceLevel')

export function ProductMarketingJobBoard() {
  const [filters, setFilters] = useState(baseFilters)
  const [copiedJobId, setCopiedJobId] = useState<string | null>(null)

  const buildReferralUrl = (url: string) => {
    const referralParam = 'ref=getoden'
    return url.includes('?') ? `${url}&${referralParam}` : `${url}?${referralParam}`
  }

  useEffect(() => {
    if (!copiedJobId) return
    const timeout = setTimeout(() => setCopiedJobId(null), 2000)
    return () => clearTimeout(timeout)
  }, [copiedJobId])

  const filteredJobs = useMemo(() => {
    return productMarketingJobListings.filter((job) => {
      const normalizedQuery = filters.query.trim().toLowerCase()
      const matchesQuery =
        !normalizedQuery ||
        [job.title, job.company, job.description, job.tags.join(' ')].some((field) =>
          field.toLowerCase().includes(normalizedQuery),
        )

      const matchesLocation =
        filters.location === 'all' || job.location === filters.location

      const matchesWorkSetting =
        filters.workSetting === 'all' || job.workSetting === filters.workSetting

      const matchesExperience =
        filters.experienceLevel === 'all' ||
        job.experienceLevel === filters.experienceLevel

      return (
        matchesQuery && matchesLocation && matchesWorkSetting && matchesExperience
      )
    })
  }, [filters])

  const handleFilterChange = (key: FilterKey, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleReset = () => setFilters(baseFilters)

  const handleCopyLink = async (jobId: string, url: string) => {
    try {
      await navigator.clipboard?.writeText(buildReferralUrl(url))
      setCopiedJobId(jobId)
    } catch {
      setCopiedJobId(null)
      window.open(buildReferralUrl(url), '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="mt-12 space-y-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-400/10">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-wide text-gray-600">
            Filters
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-2 text-sm text-gray-700">
              Keyword
              <input
                type="text"
                value={filters.query}
                onChange={(event) => handleFilterChange('query', event.target.value)}
                placeholder="Search role, company, or focus area"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-gray-700">
              Location
              <select
                value={filters.location}
                onChange={(event) => handleFilterChange('location', event.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-300 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_0.75rem_center] bg-no-repeat py-2 pl-4 pr-10 text-base text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              >
                <option value="all">Any location</option>
                {locationOptions.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm text-gray-700">
              Work setting
              <select
                value={filters.workSetting}
                onChange={(event) =>
                  handleFilterChange('workSetting', event.target.value)
                }
                className="w-full appearance-none rounded-xl border border-gray-300 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_0.75rem_center] bg-no-repeat py-2 pl-4 pr-10 text-base text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              >
                <option value="all">Any setting</option>
                {workSettingOptions.map((setting) => (
                  <option key={setting} value={setting}>
                    {setting}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm text-gray-700">
              Experience level
              <select
                value={filters.experienceLevel}
                onChange={(event) =>
                  handleFilterChange('experienceLevel', event.target.value)
                }
                className="w-full appearance-none rounded-xl border border-gray-300 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_0.75rem_center] bg-no-repeat py-2 pl-4 pr-10 text-base text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              >
                <option value="all">Any level</option>
                {experienceOptions.map((experience) => (
                  <option key={experience} value={experience}>
                    {experience}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>
              Showing{' '}
              <span className="text-gray-900">
                {filteredJobs.length}
              </span>{' '}
              out of {productMarketingJobListings.length} postings
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
        {filteredJobs.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500">
            No roles match that filter combo yet. Try broadening your search.
          </div>
        )}

        {filteredJobs.map((job) => (
          <article
            key={job.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-400/10 transition hover:border-gray-300"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {job.workSetting} • {job.location}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">{job.title}</h3>
                <p className="text-lg text-gray-600">{job.company}</p>
              </div>
              <div className="text-sm text-gray-500 lg:text-right">
                <p>Posted {formatDate(job.postedDate)}</p>
                <span className="mt-2 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs uppercase tracking-wide text-gray-600">
                  {job.experienceLevel}
                </span>
              </div>
            </div>

            <p className="mt-4 text-base text-gray-700">{job.description}</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {job.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-2">
                  <span aria-hidden className="text-gray-500">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={`${job.id}-${tag}`}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                {job.salaryRange && (
                  <p>
                    Salary Range: <span className="text-gray-900">{job.salaryRange}</span>
                  </p>
                )}
                <Link
                  href={job.sourceUrl}
                  target="_blank"
                  className="text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline"
                >
                  Source: {job.sourceName}
                </Link>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={buildReferralUrl(job.applyUrl)}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
                >
                  Apply now
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-500 hover:text-gray-900"
                  onClick={() => handleCopyLink(job.id, job.applyUrl)}
                >
                  {copiedJobId === job.id ? 'Link copied' : 'Copy link'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

