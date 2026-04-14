export default function ServicesLoading() {
  return (
    <div className="w-full animate-pulse">


      {/* Hero Skeleton */}
      <section className="bg-[#1a0a3d]/5 py-24">
        <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="w-64 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-6"></div>
          <div className="w-full max-w-2xl h-4 bg-gray-200 rounded-md mb-3"></div>
          <div className="w-3/4 max-w-lg h-4 bg-gray-200 rounded-md"></div>
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-20 space-y-4">
          <div className="w-40 h-3 bg-purple-100 rounded-md"></div>
          <div className="w-80 h-10 bg-gray-200 rounded-lg"></div>
          <div className="w-full max-w-xl h-4 bg-gray-100 rounded-md"></div>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full bg-gray-50 rounded-2xl p-6 h-24 border border-gray-100">
               <div className="flex items-center gap-4 h-full">
                 <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                 <div className="flex-1 space-y-2">
                   <div className="w-48 h-6 bg-gray-200 rounded-md"></div>
                   <div className="w-24 h-4 bg-gray-100 rounded-md"></div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
