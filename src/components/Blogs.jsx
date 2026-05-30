export default function Blogs() {
  const blogs = [
    {
      title: "How to grow your business",
      description:
        "Learn effective strategies to scale your business and reach more customers.",
    },
    {
      title: "Digital marketing trends",
      description:
        "Explore the latest digital marketing techniques and industry insights.",
    },
    {
      title: "Building successful teams",
      description:
        "Discover best practices for creating productive and collaborative teams.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white" id="blog">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Latest Blog
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest insights, business strategies,
            and industry trends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-2
              "
            >
              <div className="h-56 bg-gray-200"></div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {blog.title}
                </h3>

                <p className="text-slate-500 mt-3">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-14">
          <button
            className="
            bg-black
            text-white
            px-8
            py-3
            
            font-medium
            hover:bg-slate-800
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