"use client";

import {recipes} from "@/data/recipes";
import {useSearchParams} from "next/navigation";

export default function Recipes() {
    const searchParams= useSearchParams();
    const craving = searchParams.get("craving");

    const filteredRecipes= craving? recipes.filter((recipe) => recipe.craving === craving) : recipes;
    return (
         <main className="px-8 py-12">
      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
          recipes for you
        </p>

        <h1 className="mt-2 text-6xl font-bold">
          {craving ? `${craving} things` : "All recipes"}
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.name}
              className="rounded-3xl bg-[#ebe3d5] p-6 transition hover:-translate-y-1"
            >
              <div className="flex h-48 items-center justify-center text-8xl">
                {recipe.emoji}
              </div>

              <h2 className="mt-5 text-2xl font-semibold">
                {recipe.name}
              </h2>

              <p className="mt-2 leading-6 text-[var(--muted)]">
                {recipe.description}
              </p>

              <div className="mt-5 flex gap-4 text-sm text-[var(--muted)]">
                <span>{recipe.time} min</span>
                <span>•</span>
                <span>{recipe.difficulty}</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}