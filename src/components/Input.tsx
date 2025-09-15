import { type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

const inputVariants: Record<string, string> = {
  outline: "input-shadow-border rounded-md px-3",
  ghost: "bg-transparent border-none outline-none",
};

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix?: React.ReactNode;
  variant?: keyof typeof inputVariants;
}

export const Input = ({
  prefix,
  variant = "outline",
  ...props
}: InputProps) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "flex items-center gap-2.5",
        inputVariants[variant],
        className
      )}
    >
      {prefix}
      <input
        {...rest}
        className="bg-transparent border-none outline-none w-full h-full"
      />
    </div>
  );
};
