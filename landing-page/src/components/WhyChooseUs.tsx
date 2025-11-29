export default function WhyChooseUs() {
    const stats = [
      { label: "Travellers Served", value: "10,000+" },
      { label: "Google Rating", value: "4.9★" },
      { label: "Years Experience", value: "12+" },
    ];
  
    return (
      <section className="py-15 px-6 bg-[#F8FAFC]">
        <h2 className="text-4xl font-bold text-center mb-14 text-[#0D1B2A]">
          Why Choose Us?
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-white 
                rounded-2xl 
                shadow-sm 
                border border-gray-200 
                p-10 
                flex flex-col items-center
                hover:shadow-md transition
              "
            >
              <h3 className="text-4xl font-bold text-[#F76C2F]">{item.value}</h3>
              <p className="mt-3 text-gray-600 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  