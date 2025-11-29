"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./UI/Button";
import LeadFormModal from "./LeadFormModal";
import EnquiryModal from "./EnquiryModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative h-[90vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          SPORTS TRAVEL <br />
          PACKAGES FOR <br />
          GLOBAL EVENTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Curated packages & concierge-driven sports experiences worldwide.
        </motion.p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
        <Button label="Plan My Trip" onClick={() => setOpen(true)} />
          {/* <Button label="Explore Packages" variant="secondary" /> */}
        </div>
      </div>

      {/* Floating Featured Event Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 
          bg-white shadow-xl rounded-xl overflow-hidden w-[90%] md:w-[700px]"

          style={{ backgroundImage: "url('/f1car.png')" ,
            backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
            
           }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Event Image */}
          {/* <img
            src="/"
            className="h-44 w-full object-cover"
            alt="F1 Japan"
          /> */}

          {/* Event Info */}
          <div className="p-5 flex flex-col justify-between text-white " >
            <div>
              <h3 className="text-2xl font-bold">F1 JAPAN</h3>
              <p className="text-sm mt-1">Port Akasol | Oct 16–20, 2025</p>
              <p className=" text-sm mt-2">
                Starting ₹ 80,500 per person
              </p>
            </div>

            <Button
              label="Request My Package"
              variant="primary"
              className="mt-4"
            />
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {open && <EnquiryModal open={open} onClose={() => setOpen(false)} />}
    </section>
  );
}
