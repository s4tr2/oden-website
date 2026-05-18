import { ProductMarketingEventsBoard } from '@/components/tools/product-marketing-events-board'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Product Marketing Events | Oden',
    description:
        'Discover upcoming product marketing conferences, meetups, and summits.',
}

export default function ProductMarketingEventsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-lora">
                    Product Marketing Events
                </h1>
                <p className="text-lg text-gray-600">
                    Curated list of must-attend events for product marketers.
                </p>
            </div>

            <ProductMarketingEventsBoard />
        </div>
    )
}
