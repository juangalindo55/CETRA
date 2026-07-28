export default function BlogPostLoading() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero */}
      <section className="bg-[#1a0a3d]/5 pb-16 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 h-3 w-40 rounded-md bg-[#ece7fb]" />
          <div className="mb-4 h-12 w-full max-w-3xl rounded-lg bg-gray-200" />
          <div className="mb-10 h-4 w-full max-w-xl rounded-md bg-gray-100" />
          <div className="flex flex-wrap gap-6 border-t border-gray-200 pt-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-40 rounded-md bg-gray-100" />
            ))}
          </div>
        </div>
      </section>

      {/* Portada */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-10 aspect-[16/9] rounded-[2rem] bg-gray-200 sm:aspect-[21/9]" />
      </div>

      {/* Contenido + índice */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <aside className="hidden md:col-span-1 md:block">
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 w-full rounded-md bg-gray-100" />
              ))}
            </div>
          </aside>

          <main className="space-y-8 md:col-span-2">
            {[1, 2].map((block) => (
              <div key={block} className="space-y-4">
                <div className="h-9 w-2/3 rounded-lg bg-gray-200" />
                <div className="h-4 w-full rounded-md bg-gray-100" />
                <div className="h-4 w-full rounded-md bg-gray-100" />
                <div className="h-4 w-4/5 rounded-md bg-gray-100" />
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
