import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Devify - Best Resources for Every Developer</title>
    </Head>
      <main>
        <div className="container py-8">
          <h1 className="text-center text-slate-200 text-lg mb-6">❤️ Curated List of Resources for You ❤️</h1>
          <div className="grid md:grid-cols-1 max-w-screen-sm mx-auto gap-8">
            <div className=" card shadow-lg shadow-yellow-500/20 border border-yellow-500/20 p-6 rounded-lg ">
              <ul className=" ml-3 space-y-2 list-inside list-disc text-lg">
                <li>
                  <Link href="/hosting">
                    <a>Hosting</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui-designs">
                    <a>UI Designs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/illustrations">
                    <a>Illustrations</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
