"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  onClose: () => void;
}

export default function LeadFormModal({ onClose }: Props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await axios.post("http://localhost:5000/lead", data);
      toast.success("Submitted!");
      reset();
      onClose();
    } catch (_) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="
      fixed inset-0 bg-black/50 
      backdrop-blur-sm z-50
      flex items-center justify-center p-4
    ">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Plan Your Trip</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input className="w-full border p-3 rounded-lg" placeholder="Name" {...register("name", { required: true })} />
          <input className="w-full border p-3 rounded-lg" placeholder="Email" {...register("email", { required: true })} />
          <input className="w-full border p-3 rounded-lg" placeholder="Phone" {...register("phone", { required: true })} />
          <textarea className="w-full border p-3 rounded-lg h-24" placeholder="Message" {...register("message")} />

          <button className="bg-blue-600 text-white px-4 py-3 rounded-lg w-full">
            Submit
          </button>
        </form>

        <button 
          onClick={onClose} 
          className="mt-4 text-red-500 underline block w-full text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}
