"use client"
import Navbar from "@/components/navbar";
import { useState } from "react";


export default function Share() {
  const [submitted, setSubmitted] = useState(false);
  async function handleSubmit(event: any) {
  event.preventDefault();

  const form = event.currentTarget;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    recipe: formData.get("recipe"),
  };

  const response = await fetch("/api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  console.log(result);

  setSubmitted(true);
  form.reset();
}

  return (
    <main>
      <Navbar />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
            from your kitchen
          </p>

          <h1
            className="mt-2 text-6xl"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Share a recipe with Kenny?
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
            Tell us what you've been cooking up! 
          </p>
        {submitted && (
  <p className="mt-6 text-lg">
    Recipe sent! Thanks for sharing. 
  </p>
)}
          <form 
          onSubmit={handleSubmit}
          className="mt-12 max-w-2xl bg-[#4c5669] p-8">

            <label className="text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Tell us your name..."
              className="mt-3 mb-3 w-full border border-black text-black bg-white px-4 py-4 outline-none"
            />

            <label className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="eg: xyz@gmail.com"
              className="mt-3 w-full mb-3 border border-black text-black bg-white px-4 py-4 outline-none"
            />

            <label className="mt-6 text-sm font-medium">
              Recipe
            </label>
            <textarea
              name="recipe"
              placeholder="Tell us your recipe..."
              className="mt-3 w-full border border-black text-black bg-white px-4 py-4 outline-none"
            />

            <button
            type="submit"
              className="mt-5 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:scale-105"
            >
              Send recipe!
            </button>

          </form>

        </div>
      </section>
    </main>
  );
}