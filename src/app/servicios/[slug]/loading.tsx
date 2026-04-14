export default function ServiceDetailLoading() {
  return (
    <div className="w-full animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="w-64 h-4 bg-gray-200 rounded-md"></div>
        </div>
      </div>

      {/* Hero Skeleton (Dark gradient to match #1a0a3d) */}
      <section className="bg-[#1a0a3d]/90 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="w-32 h-3 bg-[#7C3AED]/40 rounded-md mb-6"></div>
          <div className="w-3/4 max-w-lg h-16 bg-white/10 rounded-lg mb-6"></div>
          <div className="w-full max-w-xl h-5 bg-white/5 rounded-md mb-3"></div>
          <div className="w-2/3 max-w-sm h-5 bg-white/5 rounded-md mb-8"></div>
          <div className="flex gap-4">
             <div className="w-32 h-8 bg-white/10 rounded-full"></div>
             <div className="w-40 h-8 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Sidebar Skeleton */}
          <aside className="md:col-span-1 hidden md:block">
            <div className="h-64 bg-gray-50 rounded-2xl border border-gray-100 p-6 space-y-4">
               <div className="w-24 h-5 bg-gray-200 rounded-md mb-6"></div>
               <div className="w-full h-3 bg-gray-100 rounded-md mt-2"></div>
               <div className="w-5/6 h-3 bg-gray-100 rounded-md"></div>
               <div className="w-full h-3 bg-gray-100 rounded-md"></div>
               <div className="w-4/6 h-3 bg-gray-100 rounded-md"></div>
            </div>
          </aside>

          {/* Content Skeleton */}
          <main className="md:col-span-2 space-y-8">
            <div className="w-1/2 h-8 bg-gray-200 rounded-md"></div>
            
            {/* Paragraphs */}
            <div className="space-y-3">
              <div className="w-full h-4 bg-gray-100 rounded-md"></div>
              <div className="w-full h-4 bg-gray-100 rounded-md"></div>
              <div className="w-5/6 h-4 bg-gray-100 rounded-md"></div>
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-[400px] bg-gray-100 rounded-2xl"></div>

            {/* Paragraphs */}
            <div className="space-y-3">
              <div className="w-full h-4 bg-gray-100 rounded-md"></div>
              <div className="w-full h-4 bg-gray-100 rounded-md"></div>
              <div className="w-4/5 h-4 bg-gray-100 rounded-md"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
