export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6" id="about">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Why our clients trust us
        </h2>

        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quos minus aliquid suscipit repellendus quo similique quam impedit itaque! Iure fugit optio mollitia sit odit impedit doloribus voluptatem error dolorem.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team"
            className="
              w-full
              h-72
              object-cover
              rounded-3xl
              shadow-xl
              hover:scale-105
              transition
              duration-300
            "
          />

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Meeting"
            className="
              w-full
              h-72
              object-cover
              rounded-3xl
              shadow-xl
              hover:scale-105
              transition
              duration-300
            "
          />

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Office"
            className="
              col-span-2
              w-full
              h-56
              object-cover
              rounded-3xl
              shadow-xl
              hover:scale-105
              transition
              duration-300
            "
          />
        </div>

        {/* Right Content */}
        <div>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-xl">✓</div>
              <p>
                Experienced professionals dedicated to quality
                results.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-xl">✓</div>
              <p>
                Modern technologies and scalable architecture.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-xl">✓</div>
              <p>
                Transparent communication throughout the project.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-xl">✓</div>
              <p>
                Reliable support and long-term partnership.
              </p>
            </div>
          </div>

          <button
            className="
              mt-10
              px-8
              py-4
              bg-black text-white
              rounded-xl
              hover:bg-indigo-700
              hover:scale-105
              transition
              duration-300
            "
          >
            Button
          </button>
        </div>
      </div>
    </section>
  );
}