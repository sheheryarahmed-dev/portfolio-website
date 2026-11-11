"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactRequestSchema, type ContactRequest } from "@/lib/validations";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: string;
      size: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function ContactForm({
  siteKey,
  configured,
}: {
  siteKey: string;
  configured: boolean;
}) {
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactRequest>({
    resolver: zodResolver(contactRequestSchema),
    defaultValues: { name: "", email: "", message: "", turnstileToken: "" },
  });
  const clearToken = useCallback(
    () => setValue("turnstileToken", ""),
    [setValue],
  );

  useEffect(() => {
    if (!ready || !configured || !widget.current || !window.turnstile) return;
    widgetId.current = window.turnstile.render(widget.current, {
      sitekey: siteKey,
      action: "contact",
      theme: "dark",
      size: "flexible",
      callback: (token) =>
        setValue("turnstileToken", token, { shouldValidate: true }),
      "expired-callback": clearToken,
      "error-callback": () => {
        clearToken();
        setNotice(
          "The security check could not load. Please retry or contact me by email.",
        );
      },
    });
    return () => {
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [ready, configured, siteKey, setValue, clearToken]);

  async function submit(data: ContactRequest) {
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: unknown = await response.json();
      if (!response.ok) {
        setNotice(
          result &&
            typeof result === "object" &&
            "error" in result &&
            typeof result.error === "string"
            ? result.error
            : "Your message could not be sent. Please try again later.",
        );
        return;
      }
      if (
        !result ||
        typeof result !== "object" ||
        !("message" in result) ||
        typeof result.message !== "string"
      ) {
        setNotice(
          "Delivery could not be confirmed. Please contact me by email.",
        );
        return;
      }
      reset();
      setNotice(result.message);
    } catch {
      setNotice(
        "Unable to confirm delivery. Please check your connection or contact me by email.",
      );
    } finally {
      clearToken();
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
    }
  }

  const inputClass =
    "border-navy-border bg-navy-secondary text-cream placeholder:text-cream-muted w-full rounded-lg border px-4 py-3 text-sm";
  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="space-y-4">
      {configured && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => setReady(true)}
          onError={() =>
            setNotice(
              "Security verification could not load. Please contact me by email.",
            )
          }
        />
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="text-cream mb-2 block text-sm"
          >
            Your Name
          </label>
          <input
            id="contact-name"
            autoComplete="name"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
            className={inputClass}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-coral mt-1 text-xs">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="text-cream mb-2 block text-sm"
          >
            Your Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
            className={inputClass}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-coral mt-1 text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="text-cream mb-2 block text-sm"
        >
          Your Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          {...register("message")}
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-coral mt-1 text-xs">
            {errors.message.message}
          </p>
        )}
      </div>
      <input type="hidden" {...register("turnstileToken")} />
      {configured && <div ref={widget} className="min-w-0" />}
      {errors.turnstileToken && (
        <p className="text-coral text-sm" role="alert">
          {errors.turnstileToken.message}
        </p>
      )}
      {!configured && (
        <p className="text-cream-muted text-sm" role="status">
          Form sending is not configured yet. Please use the email link to get
          in touch.
        </p>
      )}
      <button
        type="submit"
        disabled={!configured || isSubmitting}
        className="bg-coral text-navy min-h-11 w-full rounded-lg px-5 py-3 text-sm font-semibold transition-[filter] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending…" : "Send Message →"}
      </button>
      <p role="status" aria-live="polite" className="text-cream-muted text-sm">
        {notice}
      </p>
    </form>
  );
}
