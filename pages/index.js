import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="container py-10">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="col-span-4 card shadow-lg shadow-yellow-500/20 border border-yellow-500/20 p-6 rounded-lg ">
              <h1 className="font-semibold text-yellow-400 text-lg">
                Trending
              </h1>
              <ul className=" ml-3 space-y-1 list-inside list-disc">
                <Link href="/hosting">
                  <a>
                    <li className="text-emerald-400">Hosting</li>
                  </a>
                </Link>
                <li>Illustrations</li>
                <li>Jobs</li>
                <li>Programming Tutorial</li>
              </ul>
            </div>

            <div className="col-span-4 card shadow-lg shadow-yellow-500/20 border border-yellow-500/20 p-6 rounded-lg">
              <h1 className="font-semibold text-yellow-400 text-lg">
                Trending
              </h1>
              <ul className="font-semibold ml-3">
                <li>Hosting</li>
              </ul>
            </div>

            <div className="col-span-4 card shadow-lg shadow-yellow-500/20 border border-yellow-500/20 p-6 rounded-lg">
              <h1 className="font-semibold text-yellow-400 text-lg">
                Trending
              </h1>
              <ul className="font-semibold ml-3">
                <li>Hosting</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
