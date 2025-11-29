"use client";

import Button from "./Button";

interface Props {
  title: string;
  price: string;
  date?: string;
  image: string;
}

export default function PackageCard({ title, price, date, image }: Props) {
  return (
    <div className="
      bg-white rounded-2xl shadow-lg 
      hover:shadow-2xl transition-all duration-300 
      hover:-translate-y-2 overflow-hidden
    ">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {date && <p className="text-gray-500 text-sm mt-1">{date}</p>}

        <p className="text-[#F76C2F] font-bold text-lg mt-3">
          Starting from {price}
        </p>

        {/* <div className="mt-5">
          <Button 
            label="View Details" 
            variant="secondary"
            className="w-full"
          />
        </div> */}
      </div>
    </div>
  );
}
