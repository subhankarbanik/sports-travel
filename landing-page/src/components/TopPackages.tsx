import PackageCard from "./UI/PackageCard";

export default function TopPackages() {
  const data = [
    { title: "F1 Singapore", price: "₹55,000", image: "/singapore.png", date: "Sep 20–22, 2025" },
    { title: "Wimbledon Finals", price: "₹80,000", image: "/whimbeldon.png", date: "July 2025" },
    { title: "Champions League", price: "₹70,000", image: "/championsleague.png", date: "June 2025" },
  ];

  return (
    <section className="pt-30 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-start mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Top Packages</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Curated premium travel packages for global sports events
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((pkg) => (
          <PackageCard key={pkg.title} {...pkg} />
        ))}
      </div>
    </section>
  );
}
