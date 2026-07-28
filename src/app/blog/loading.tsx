export default function BlogLoading() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero */}
      <section className="bg-[#1a0a3d]/5 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 h-3 w-32 rounded-md bg-[#ece7fb]" />
          <div className="mb-5 h-12 w-full max-w-2xl rounded-lg bg-gray-200" />
          <div className="h-4 w-full max-w-xl rounded-md bg-gray-100" />
        </div>
      </section>

      {/* Categorías + artículos */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-11 w-32 rounded-full bg-gray-100" />
          ))}
        </div>

        {/* Destacado */}
        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-gray-100 lg:grid-cols-2">
          <div className="aspect-[16/10] bg-gray-200 lg:aspect-auto lg:min-h-[24rem]" />
          <div className="space-y-4 p-10">
            <div className="h-5 w-40 rounded-full bg-[#ece7fb]" />
            <div className="h-9 w-full rounded-lg bg-gray-200" />
            <div className="h-4 w-full rounded-md bg-gray-100" />
            <div className="h-4 w-3/4 rounded-md bg-gray-100" />
          </div>
        </div>

        {/* Rejilla */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden rounded-[2rem] border border-gray-100">
              <div className="aspect-[16/9] bg-gray-200" />
              <div className="space-y-3 p-7">
                <div className="h-5 w-28 rounded-full bg-[#ece7fb]" />
                <div className="h-6 w-3/4 rounded-md bg-gray-200" />
                <div className="h-4 w-full rounded-md bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
