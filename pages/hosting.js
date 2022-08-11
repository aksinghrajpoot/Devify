import hostingData from "../data/hosting-data";


export default function Hosting() {
  return (
    <>
      <div className="container">
        <h2 className="text-center text-lg">
          A Curated List of Hosting Resources
        </h2>
      </div>
      <section className="mt-6">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {hostingData
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((item) => (
                <div className="p-6 border border-yellow-300/40 rounded-lg shadow-md shadow-yellow-300/20 relative">
                  <h3 className="font-bold text-lg text-teal-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">
                    <strong>Type: </strong>
                    {item.type} <br />
                    <strong>Desc: </strong>
                    {item.desc}
                  </p>
                  <a
                    href={item.link}
                    className="absolute right-4 top-4 font-bold"
                    target="_"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}