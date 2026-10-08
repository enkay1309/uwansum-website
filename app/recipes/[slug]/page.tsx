import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/navbar";
import { recipes } from "@/data/recipes";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-4xl">

          <Link
            href="/recipes"
            className="text-sm text-[var(--muted)] "
          >
             Back to recipes
          </Link>

          <div className="mt-10 bg-[#4c5669] p-8">

            <div className="flex h-64 items-center justify-center text-9xl">
              {recipe.emoji}
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              {recipe.craving}
            </p>

            <h1
              className="mt-2 text-6xl"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              {recipe.name}
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
              {recipe.description}
            </p>

            <div className="mt-6 flex gap-6 text-sm text-[var(--muted)]">
              <span>{recipe.time} min</span>
              <span>|</span>
              <span>{recipe.difficulty}</span>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}