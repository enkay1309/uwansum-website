import Link from "next/link";

export default function Navbar(){
    return(
        <nav className= "flex items-center justify-between px-8 py-6">
            <Link href="/" className= "text-2xl font-bold">
            food is cool.
            </Link>

            <div className= "flex items-center gap-8 text-sm">
                <Link href="/">Home</Link>
                <Link href="/recipes">Recipes</Link>
                <Link href="/share">Share</Link>
                
            </div>
        </nav>
    );
}