export default function BlogLoading() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
            {/* Blog Header Skeleton */}
            <div className="h-10 sm:h-12 w-32 bg-gray-200 rounded animate-pulse mb-8 sm:mb-16"></div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                {/* Sidebar Skeleton (Desktop) */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="space-y-4">
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-6"></div>
                        <div className="h-10 w-full bg-gray-100 rounded animate-pulse"></div>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-8 w-full bg-gray-50 rounded animate-pulse"></div>
                        ))}
                    </div>
                </aside>

                {/* Content Skeleton */}
                <main className="lg:col-span-9">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-6"></div>
                    <div className="space-y-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex gap-6 py-6 border-b border-gray-100">
                                <div className="hidden sm:block h-5 w-32 bg-gray-100 rounded animate-pulse"></div>
                                <div className="flex-1 space-y-4">
                                    <div className="h-7 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 w-20 bg-gray-100 rounded animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
