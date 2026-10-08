"use client";
import Navbar from "@/components/navbar";
import Link from "next/link";
import {recipes} from "@/data/recipes";
import {useSearchParams} from "next/navigation";

export default function Recipes() {
    const searchParams= useSearchParams();
    const craving = searchParams.get("craving");

    const filteredRecipes= craving? recipes.filter((recipe) => recipe.craving === craving) : recipes;
    return (
         <main >
            <Navbar />
      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase mb-3 tracking-[0.25em] text-[var(--muted)]">
          recipes for you
        </p>

        <h1 className=" text-6xl  tracking-tight"
            style={{ fontFamily: "var(--font-caveat)"}}>
          {craving ? `${craving} things` : "All recipes"}
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.name}
              className=" bg-[#4c5669] p-6 transition hover:scale-105 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center text-8xl">
                {recipe.emoji}
              </div>

              <h2 className="mt-5 text-4xl font-bold"
              style={{ fontFamily: "var(--font-caveat)" }}>
                {recipe.name}
              </h2>

              <p className="mt-2 leading-6 text-[var(--muted)]">
                {recipe.description}
              </p>

              <div className="mt-5 flex gap-4 text-sm text-[var(--muted)]">
                <span>{recipe.time} min</span>
                <span>|</span>
                <span>{recipe.difficulty}</span>
              </div>

              <Link
                href={`/recipes/${recipe.slug}`}
                className="mt-6 inline-block text-sm font-medium underline underline-offset-4">

                View recipe 
                </Link>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}