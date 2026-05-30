export default function Testimonials() {
  const clients = [
    {
      name: "Shailesh",
      role: "customer",
      text: "I love this website. The team provided excellent service and helped us grow our business significantly.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "XYZ",
      role: "customer",
      text: "Outstanding experience. Their strategy and support helped us achieve our goals faster than expected.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Our Happy Clients
          </h2>

          
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {clients.map((client, index) => (
            <div
              key={index}
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              "
            >
              <p className="text-slate-600 leading-7">
                "{client.text}"
              </p>

              <div className="flex items-center mt-8">
                <img
                  src={client.image}
                  alt={client.name}
                  className="
                  w-14
                  h-14
                  rounded-full
                  object-cover
                  "
                />

                <div className="ml-4">
                  <h4 className="font-bold">
                    {client.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {client.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}