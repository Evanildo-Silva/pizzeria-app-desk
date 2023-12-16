import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="h-10 max-w-[37.5rem] mb-4 p-4 rounded-lg bg-foreground border border-border text-white placeholder:opacity-80"
      {...rest}
    />
  );
}
