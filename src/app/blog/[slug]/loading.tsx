export default function PostLoading() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
                {/* Title Skeleton */}
                <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-12 sm:mb-16"></div>

                <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                    {/* Sidebar Skeleton */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="space-y-8 sticky top-24">
                            <div className="space-y-4">
                                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-6"></div>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-4 w-full bg-gray-50 rounded animate-pulse"></div>
                                ))}
                            </div>
                            <div className="space-y-4 border-t border-gray-100 pt-8">
                                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-10 w-32 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Skeleton */}
                    <main className="lg:col-span-9">
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-6"></div>
                        <div className="border-b border-gray-200 mb-8"></div>
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className={`h-4 w-${i % 2 === 0 ? 'full' : '5/6'} bg-gray-100 rounded animate-pulse`}></div>
                            ))}
                            <div className="h-64 w-full bg-gray-50 rounded-lg animate-pulse my-8"></div>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`h-4 w-${i % 2 === 0 ? 'full' : '11/12'} bg-gray-100 rounded animate-pulse`}></div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
