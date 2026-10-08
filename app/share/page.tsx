import Navbar from "@/components/navbar";

export default function Pantry() {
  return (
    <main>
      <Navbar />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
            your kitchen
          </p>

          <h1
            className="mt-2 text-6xl"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            What's in your pantry?
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
            Tell us what ingredients you already have and we'll help you
            figure out what you can make.
          </p>

          <div className="mt-12 max-w-2xl bg-[#ebe3d5] p-8">

            <label className="text-sm font-medium">
              Add ingredients
            </label>

            <input
              type="text"
              placeholder="e.g. eggs, tomatoes, cheese..."
              className="mt-3 w-full border border-black/20 bg-white px-4 py-3 outline-none"
            />

            <button
              className="mt-5 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:scale-105"
            >
              Save Pantry
            </button>

          </div>

        </div>
      </section>
    </main>
  );
}