export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="mx-auto flex min-h-screen max-w-2xl items-center px-6 py-24 sm:py-28">
        <section className="w-full">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Borealis Studio
          </h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              An independent studio based in Québec, exploring digital tools and experimental
              software systems, including data-driven and AI-assisted applications.
            </p>

            <p>
              Currently in an exploratory phase, projects developed slowly and selectively.
            </p>

            <p className="pt-2 text-sm text-slate-500">
              Contact:{" "}
              <a
                className="text-slate-700 underline underline-offset-4"
                href="mailto:contact@borealisstudio.ca"
              >
                contact@borealisstudio.ca
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
