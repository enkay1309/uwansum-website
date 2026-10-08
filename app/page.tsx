import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className= "px-8 pb-24 pt-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm tracking-[0.30em] text-center text-[var(--muted)]">
            ✨COOK✨  WITH KENNY SONG
          </p>

          <h1 className="max-w-6xl text-8xl font-bold text-center leading-[0.95] tracking-tight"
          style={{ fontFamily: "var(--font-caveat)" }}>
            Uwansum?
          </h1>

          <div className="mt-8 pb-8 rounded-full overflow-hidden flex justify-center">
          <Image
          src="/kenny.png"
          alt="Kenny Song"
          width={200}
          height={200}
          className="h-[300px] w-[300px] rounded-full object-cover"
          />
          </div>

          <p className=" mx-auto max-w-xl  leading-8 text-center tracking-tight text-[var(--muted)] ">
            Find something delicious to make, discover what you can cook with
            what you already have, and follow your cravings.
          </p>

        </div>
      </section>
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className=" text-3xl uppercase tracking-[0.25em] text-[var(--muted)]">
                What's on your mind?
              </p>

             
            </div>

            <p className="hidden text-sm text-[var(--muted)] md:block">
              Tap what you want to have
            </p>
          </div>

          <div className="relative h-[500px] overflow-hidden  bg-[#4c5669]">

            
            <Link
            href="/recipes?craving=sweet"
             className="absolute left-[10%] top-[20%] rotate-[-10deg] transition hover:scale-110">
              <div className="text-7xl">🍰</div>
              <p className="mt-1 text-sm">Sweet?</p>
            </Link>

            
            <Link
            href="/recipes?craving=comforting"
             className="absolute left-[30%] top-[10%] rotate-[8deg] transition hover:scale-110">
              <div className="text-7xl">🍜</div>
              <p className="mt-1 text-sm">Comforting?</p>
            </Link>

            <Link
            href="/recipes?craving=lazy"
             className="absolute right-[25%] top-[15%] rotate-[-8deg] transition hover:scale-110">
              <div className="text-7xl">🍟</div>
              <p className="mt-1 text-sm">Lazy?</p>
            </Link>

            
            <Link
            href="/recipes?craving=spicy"
             className="absolute right-[8%] top-[32%] rotate-[15deg] transition hover:scale-110">
              <div className="text-7xl">🌶️</div>
              <p className="mt-1 text-sm">Spicy?</p>
            </Link>
            

            
            <Link
            href="/recipes?craving=crispy"
             className="absolute bottom-[15%] left-[15%] rotate-[10deg] transition hover:scale-110">
              <div className="text-7xl">🍘</div>
              <p className="mt-1 text-sm">Crispy?</p>
            </Link>

            
            <Link
            href="/recipes?craving=healthy"
             className="absolute bottom-[8%] left-[42%] rotate-[-7deg] transition hover:scale-110">
              <div className="text-7xl">🥑</div>
              <p className="mt-1 text-sm">Healthy?</p>
            </Link>

            
            <Link
            href="/recipes?craving=creamy"
             className="absolute bottom-[14%] right-[12%] rotate-[12deg] transition hover:scale-110">
              <div className="text-7xl">🍮</div>
              <p className="mt-1 text-sm">Creamy?</p>
            </Link>
            

            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                The kitchen
              </p>

              <p
                className="mt-2 text-4xl"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                what are you craving?
              </p>
            </div>

          </div>

          <div className="mt-6 flex justify-center">
            <Link 
            href="/recipes"
            className="rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition hover:scale-105">
              Find Recipes 
            </Link>
          </div>

        </div>
      </section>
      
    </main>
  );
}