export default function FeaturedEvent() {
    return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
    <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
    <img src="/japanf1.jpg" className="absolute inset-0 object-cover w-full h-full" />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
    <h2 className="text-3xl font-bold">Featured: F1 Japan Grand Prix</h2>
    <button className="mt-4 bg-blue-600 w-fit px-6 py-2 rounded-lg">Explore</button>
    </div>
    </div>
    </section>
    );
    }