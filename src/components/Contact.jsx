export default function ContactCTA() {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-7xl mx-auto">

        <div
          className="
          bg-black
          text-white
          rounded-[32px]
          px-10
          py-12
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-8
          "
        >
          <div>
            <h2 className="text-4xl font-bold">
              Need more information?
            </h2>

            <p className="mt-4 text-gray-300 max-w-xl">
             Write your concern to us and our specialist will get back to you.
            </p>
          </div>

          <button
            className="
            bg-white
            text-black
            px-8
            py-4
            rounded-full
            font-semibold
            hover:scale-105
            transition-all
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