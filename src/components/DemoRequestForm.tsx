"use client";

import { useState, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface DemoRequestFormProps {
  triggerButton?: React.ReactNode;
}

export default function DemoRequestForm({
  triggerButton,
}: DemoRequestFormProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    companyName: "",
  });

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      companyName: "",
    };

    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit demo request");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        message: "",
      });

      // Close dialog after 2 seconds
      setTimeout(() => {
        setOpen(false);
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 300);
      }, 2000);
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            Schedule Demo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Request a Demo</DialogTitle>
          <DialogDescription>
            Fill out the form below and we&apos;ll get back to you shortly to
            schedule your personalized demo.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "success" ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
            <h3 className="mb-2 text-lg font-semibold">Request Submitted!</h3>
            <p className="text-center text-sm text-muted-foreground">
              Thank you for your interest. We&apos;ll be in touch soon to
              schedule your demo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
              disabled={isSubmitting}
              required
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              disabled={isSubmitting}
              required
            />

            <Input
              label="Company Name"
              name="companyName"
              type="text"
              placeholder="Acme Corporation"
              value={formData.companyName}
              onChange={handleInputChange}
              error={errors.companyName}
              disabled={isSubmitting}
              required
            />

            <Textarea
              label="Message (Optional)"
              name="message"
              placeholder="Tell us about your email security needs..."
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              rows={4}
            />

            {submitStatus === "error" && (
              <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errorMessage}
                </p>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
