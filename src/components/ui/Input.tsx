import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300 sm:mb-1 sm:text-sm">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={twMerge(
            "block w-full rounded-lg border border-gray-300 bg-background shadow-sm dark:border-gray-600",
            "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
            "text-base sm:text-sm",
            "min-h-[44px] px-4 py-3 sm:py-2",
            "transition-colors duration-200",
            "placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error &&
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600 dark:text-red-400 sm:mt-1">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 sm:mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
