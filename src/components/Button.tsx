// create a button component with tailwindcss that has the same props as default button

import { type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

const buttonVariants: Record<string, string> = {
  accent: "bg-primary text-background rounded-lg",
  outline: "border border-white",
  ghost: "w-fit h-fit bg-none border-none",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
}

export const Button = ({ variant = "outline", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants[variant],
        props.className,
        "cursor-pointer flex items-center gap-3 rounded-[5px]"
      )}
    >
      {props.children}
    </button>
  );
};
