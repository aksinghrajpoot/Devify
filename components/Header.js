import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/30 border-dashed">
      <div className="container py-6 flex justify-center items-center">
        <Link href="/">
          <h1 className="inline-block cursor-pointer text-center text-3xl font-extrabold uppercase bg-gradient-to-r hover:bg-gradient-to-tr transition-all from-pink-500 to-violet-500 bg-clip-text text-transparent">
            {"<"} Dev Resources {"/>"}
          </h1>
        </Link>
      </div>
    </header>
  );
}
