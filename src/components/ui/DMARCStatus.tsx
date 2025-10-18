"use client";

import { Shield, ShieldCheck, ShieldAlert, ShieldX, Info } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type DMARCPolicy = "reject" | "quarantine" | "none" | "no-policy";

interface DMARCStatusProps {
  policy: DMARCPolicy;
  className?: string;
}

export function DMARCStatus({ policy, className }: DMARCStatusProps) {
  const [showInfo, setShowInfo] = useState(false);

  const policyDetails = {
    reject: {
      title: "Your DMARC policy is strict and recommended (p=reject).",
      description:
        "This is the most secure configuration. Unauthorized emails will be rejected at the SMTP level.",
      rating: "5/5",
      label: "Excellent",
      color:
        "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800",
      textColor: "text-emerald-800",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
      dots: 5,
      activeColor: "bg-emerald-500",
      inactiveColor: "bg-emerald-200",
    },
    quarantine: {
      title: "Your DMARC policy is set to quarantine (p=quarantine).",
      description:
        "This is a good configuration. Suspicious emails will be sent to spam folders.",
      rating: "3/5",
      label: "Good",
      color: "bg-secondary border-primary/20 text-foreground",
      textColor: "",
      icon: <Shield className="text-primary h-6 w-6" />,
      dots: 3,
      activeColor: "bg-primary",
      inactiveColor: "bg-primary/20",
    },
    none: {
      title: "Your DMARC policy is set to none (p=none).",
      description:
        "This is a monitoring-only configuration. No action is taken on suspicious emails.",
      rating: "1/5",
      label: "Poor",
      color:
        "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
      textColor: "text-amber-800",
      icon: <ShieldAlert className="h-6 w-6 text-amber-500" />,
      dots: 1,
      activeColor: "bg-amber-500",
      inactiveColor: "bg-amber-200",
    },
    "no-policy": {
      title: "No DMARC policy detected.",
      description:
        "Your domain is vulnerable to email spoofing attacks. Implementing DMARC is strongly recommended.",
      rating: "0/5",
      label: "Critical",
      color: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
      textColor: "text-red-800",
      icon: <ShieldX className="h-6 w-6 text-red-500" />,
      dots: 0,
      activeColor: "bg-red-500",
      inactiveColor: "bg-red-200",
    },
  };

  const details = policyDetails[policy];

  return (
    <div
      className={twMerge(
        "rounded-lg border p-4 shadow-sm transition-all",
        details.color,
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 flex-shrink-0">{details.icon}</div>
        <div className="flex-1 space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <h3
                className={`text-base font-medium ${details.textColor || ""}`}
              >
                {details.title}
              </h3>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="rounded-full p-1 transition-colors hover:bg-black/5"
                aria-label="Toggle information"
              >
                <Info className="h-4 w-4 opacity-60" />
              </button>
            </div>
            <p className={`mt-1 text-sm ${details.textColor || ""}`}>
              {details.description}
            </p>
          </div>

          {showInfo && (
            <div className="space-y-1 rounded bg-black/5 p-3 text-xs">
              <p>
                <strong>Reject (5/5):</strong> Emails that fail DMARC checks are
                rejected.
              </p>
              <p>
                <strong>Quarantine (3/5):</strong> Emails that fail DMARC checks
                are quarantined.
              </p>
              <p>
                <strong>None (1/5):</strong> No action taken, only monitoring.
              </p>
              <p>
                <strong>No Policy (0/5):</strong> No DMARC protection in place.
              </p>
            </div>
          )}

          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={twMerge(
                    "h-2.5 w-2.5 rounded-full transition-all",
                    i < details.dots
                      ? details.activeColor
                      : details.inactiveColor
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{details.label}</span>
              <span className="text-xs opacity-70">{details.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
