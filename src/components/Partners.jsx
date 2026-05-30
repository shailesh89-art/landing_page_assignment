export default function Partners() {
  const partners = [
    "Google",
    "Microsoft",
    "Amazon",
    "Spotify",
    "Netflix",
    "Adobe",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Our Partners
          </h2>

         
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="
              h-24
              flex
              items-center
              justify-center
              bg-slate-50
              rounded-2xl
              border
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              <span className="text-xl font-semibold text-slate-700">
                {partner}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}