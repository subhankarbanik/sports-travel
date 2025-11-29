export default function HowItWorks() {
    const steps = [
      {
        title: "Choose Package",
        desc: "Select from top-rated event plans.",
        icon: "🗂️",
      },
      {
        title: "Talk to Planner",
        desc: "We help you customize your trip.",
        icon: "💬",
      },
      {
        title: "Book & Travel",
        desc: "Enjoy the experience stress-free.",
        icon: "✈️",
      },
    ];
  
    return (
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl text-black-500 font-bold text-center mb-10 text-[#0D1B2A]">
          How It Works
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="
                bg-white border border-gray-200 
                rounded-2xl shadow-sm 
                p-8 text-center
                hover:shadow-md transition
              "
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{step.icon}</div>
  
              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0D1B2A]">
                {step.title}
              </h3>
  
              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  