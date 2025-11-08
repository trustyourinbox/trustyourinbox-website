import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

interface AlertProps {
  children: ReactNode;
  className?: string;
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
}

export function Alert({
  children,
  className,
  variant = "info",
  title,
}: AlertProps) {
  const variants = {
    info: {
      icon: <Info className="h-5 w-5 text-primary/70" />,
      styles: "bg-secondary text-foreground border-primary/20",
    },
    success: {
      icon: <CheckCircle className="h-5 w-5 text-green-400" />,
      styles: "bg-green-50 text-green-800 border-green-200",
    },
    warning: {
      icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
      styles: "bg-yellow-50 text-yellow-800 border-yellow-200",
    },
    error: {
      icon: <XCircle className="h-5 w-5 text-red-400" />,
      styles: "bg-red-50 text-red-800 border-red-200",
    },
  };

  return (
    <div
      className={twMerge(
        "rounded-lg border p-4",
        variants[variant].styles,
        className
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">{variants[variant].icon}</div>
        <div className="ml-3">
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
