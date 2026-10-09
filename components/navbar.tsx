import Link from "next/link";

export default function Navbar(){
    return(
        <nav className= "flex items-center justify-between px-8 py-6">
            <Link href="/" className= "text-2xl font-bold">
            food is cool.
            </Link>

            <div className= "flex items-center gap-8 text-sm">
                <Link href="/"
                className="hover:scale-105 hover:underline
                ">Home</Link>
                <Link href="/recipes" className="hover:scale-105 hover:underline">Recipes</Link>
                <Link href="/share" className="hover:scale-105 hover:underline">Share</Link>
                
            </div>
        </nav>
    );
}