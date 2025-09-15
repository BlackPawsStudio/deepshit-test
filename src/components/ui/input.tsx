import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends Omit<React.ComponentProps<"input">, "prefix"> {
  prefix?: React.ReactNode;
}

function Input({ className, type, prefix, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 input-shadow-border rounded-md px-3",
        className
      )}
    >
      {prefix}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md bg-transparent py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:outline-none",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40"
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
