import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container py-10">
        <Link href="/">
          <h1 className="cursor-pointer text-center text-3xl font-extrabold uppercase">
            Dev Resources
          </h1>
        </Link>
      </div>
    </header>
  );
}
