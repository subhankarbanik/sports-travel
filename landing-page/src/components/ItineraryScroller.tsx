import { useState } from "react";
import EnquiryModal from "./EnquiryModal";
export default function ItinerarySection() {
  const [open, setOpen] = useState(false);
  const itinerary = [
    { img: "/racecar.png", title: "Hospitality Pass", tag: "Packages" },
    { img: "/meetgreet.png", title: "Meet & Greet", tag: "Drivers" },

    { img: "/citytour.png", title: "City Tour", tag: "Access" },
    { img: "/phuket.png", title: "Meet & Greet", tag: "Drivers" },
    { img: "/racecar.png", title: "City Tour", tag: "Access" },
    { img: "/meetgreet.png", title: "Hospitality Pass", tag: "Packages" },
    { img: "/citytour.png", title: "City Tour", tag: "Access" },
    { img: "/img1.jpg", title: "Hospitality Pass", tag: "Packages" },
    { img: "/phuket.png", title: "City Tour", tag: "Access" },
  ];

  const addons = [
    "/citytour.png",
    "/racecar.png",
    "/meetgreet.png",
    "/phuket.png",
    "/citytour.png",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-16">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Sample Itinerary
          </h2>
          <a href="#" className="text-blue-600 font-semibold text-sm">
            Explore →
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
          {itinerary.map((item) => (
            <div
              key={item.title}
              className="min-w-[220px] snap-center bg-white rounded-xl overflow-hidden shadow"
            >
              <img src={item.img} className="h-32 w-full object-cover" />

              <div className="p-3">
                <h3 className="font-semibold">{item.title}</h3>
                <span className="mt-2 inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Add-Ons & VIP Experiences
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {addons.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className="w-full h-32 rounded-xl object-cover shadow"
              />
            ))}
          </div>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            Boost your experience with premium add-ons, personalized routes, VIP
            entries, exclusive transfers, and more curated enhancements.
          </p>

          <button className="mt-4 text-sm font-semibold text-blue-600">
            Next →
          </button>
        </div>

        {/* contact info  */}
        {/* <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Contact</h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Name</label>
              <input
                className="w-full border px-3 py-2 rounded-lg text-gray-400"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input
                className="w-full border px-3 py-2 rounded-lg text-gray-400"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Phone</label>
              <input
                className="w-full border px-3 py-2 rounded-lg text-gray-400"
                placeholder="Enter phone"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg"
            >
              Send Enquiry
            </button>
          </form>
        </div> */}
        <section className="max-w-7xl mx-auto px-4 py-10 space-y-16">
          {/* your existing UI */}

          <button
            onClick={() => setOpen(true)}
            className="w-full bg-orange-500 mt-4 text-white font-semibold p-2 rounded-lg"
          >
            Send Enquiry
          </button>

          <EnquiryModal open={open} onClose={() => setOpen(false)} />
        </section>
      </div>
    </section>
  );
}
