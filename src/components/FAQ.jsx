import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We provide business consulting and digital solutions.",
    },
    {
      question: "How can I contact your team?",
      answer: "You can contact us through our website contact form.",
    },
    {
      question: "Do you provide support?",
      answer: "Yes, we provide dedicated support to our clients.",
    },
    {
      question: "How long does a project take?",
      answer: "The timeline depends on project requirements.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
              alt="FAQ"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>

          {/* Right FAQ */}
          <div>

            <h2 className="text-5xl font-bold mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpen(open === index ? null : index)
                    }
                    className="
                    w-full
                    flex
                    justify-between
                    items-center
                    p-5
                    text-left
                    font-semibold
                    "
                  >
                    {faq.question}

                    <span className="text-xl">
                      {open === index ? "−" : "+"}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-5 pb-5 text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}