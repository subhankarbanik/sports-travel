// interface Props {
//     label: string;
//     onClick?: () => void;
//     variant?: "primary" | "secondary";
//     }
    
    
//     export default function Button({ label, onClick, variant = "primary" }: Props) {
//     return (
//     <button
//     onClick={onClick}
//     className={`px-6 py-3 rounded-lg transition-transform hover:scale-105 text-white
//     ${variant === "primary" ? "bg-blue-600" : "bg-gray-700"}`}
//     >
//     {label}
//     </button>
//     );
//     }
"use client";

interface Props {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  label,
  onClick,
  variant = "primary",
  className = "",
}: Props) {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-md";

  const variants = {
    primary: "bg-[#F76C2F] text-white hover:bg-[#e65f24]",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
}
