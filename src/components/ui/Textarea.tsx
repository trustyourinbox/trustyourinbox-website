import { TextareaHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1.5 block text-sm font-medium text-gray-700 sm:mb-1 sm:text-sm dark:text-gray-300">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={twMerge(
            "bg-background block w-full rounded-lg border border-gray-300 shadow-sm dark:border-gray-600",
            "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
            "text-base sm:text-sm",
            "min-h-[100px] px-4 py-3 sm:py-2",
            "transition-colors duration-200",
            "placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-vertical",
            error &&
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600 sm:mt-1 dark:text-red-400">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gray-500 sm:mt-1 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
