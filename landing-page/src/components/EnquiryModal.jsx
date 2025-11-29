"use client";

import { useEffect, useRef, useState } from "react";

export default function EnquiryModal({ open, onClose }) {
  const modalRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Close on clicking outside
  useEffect(() => {
    function handleOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open, onClose]);

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!/^[0-9]{10}$/.test(form.phone)) newErrors.phone = "Enter valid 10-digit phone";
    if (form.message.length < 5) newErrors.message = "Message too short";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    try {
      const res = await fetch("http://localhost:8000/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        alert(data.error || "Something went wrong");
        return;
      }
  
      alert("Enquiry submitted successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to send enquiry. Backend not reachable.");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;
  
  //   try {
  //     const res = await fetch("http://localhost:5000/lead", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });
  
  //     if (!res.ok) {
  //       throw new Error("Failed");
  //     }
  
  //     alert("Enquiry sent successfully!");
  //     onClose();
  //   } catch (err) {
  //     console.error("ERROR:", err);
  //     alert("Failed to send enquiry. Backend not reachable.");
  //   }
  // };
  

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 text-gray-700">
      <div
        ref={modalRef}
        className="relative bg-white w-[90%] sm:w-[450px] rounded-xl shadow-xl p-6"
      >
        {/* Close Button */}
        <button
          className="absolute right-3 top-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Send Enquiry</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </div>

          <button
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold"
            type="submit"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
