import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  loading?: boolean;
  children: ReactNode;
}

export function Button({ secondary, loading, children, ...rest }: ButtonProps) {
  return (
    <button
      className={`h-10 max-w-[37.5rem] p-2 flex items-center justify-center rounded-lg text-white ${
        secondary
          ? "bg-btn-secondary"
          : "bg-btn-primary text-black font-semibold"
      } hover:cursor-pointer hover:brightness-110 disabled:cursor-not-allowed`}
      {...rest}
      disabled={loading}
    >
      {loading ? <FaSpinner className="animate-spin" /> : <p>{children}</p>}
    </button>
  );
}
