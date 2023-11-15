import Link from "next/link";

export default function HeroSectionTCA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 shadow-lg flex bg-white px-32">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url(/luxflo_logo.png?height=800&width=960)",
        }}
      />
      <div className="w-1/2 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-zinc-900">
              Welcome to LuxFlo
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-900 md:text-xl">
              Luxury Rentals.
            </p>
          </div>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
            href="/dashboard"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
