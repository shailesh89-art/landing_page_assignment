export default function Stats() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Our business strategy has helped many
            businesses across the globe
          </h2>

          <p className="mt-6 text-slate-500 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus, distinctio.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 text-center">

          <div>
            <h3 className="text-2xl font-bold whitespace-nowrap">
              Clients
            </h3>
            <p className="text-slate-500 mt-2">12k</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold whitespace-nowrap">
              Annual Growth
            </h3>
            <p className="text-slate-500 mt-2">55%</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold whitespace-nowrap">
              No of Projects
            </h3>
            <p className="text-slate-500 mt-2">5k</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold whitespace-nowrap">
              Positive Ratings
            </h3>
            <p className="text-slate-500 mt-2">80%</p>
          </div>

        </div>

        {/* Large Banner Image */}

        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
            alt="Business"
            className="
              w-full
              h-[500px]
              object-cover
              rounded-3xl
              shadow-xl
            "
          />
        </div>

      </div>

    </section>
  );
}