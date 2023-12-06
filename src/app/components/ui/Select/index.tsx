import { ReactNode, SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export function Select({ children, ...rest }: SelectProps) {
  return (
    <select
      className="h-10 max-w-[37.5rem] mb-4 py-2 px-4 rounded-lg bg-foreground border border-border text-white placeholder:opacity-80"
      {...rest}
    >
      {children}
    </select>
  );
}
