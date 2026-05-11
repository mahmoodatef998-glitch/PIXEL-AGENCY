"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Status = { type: "idle" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus({ type: "idle" });
    try {
      const payload = Object.fromEntries(formData.entries());
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.message || "Could not submit form.");
      setStatus({ type: "success", message: data.message });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not send form.";
      setStatus({ type: "error", message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      action={onSubmit}
      className="glass rounded-2xl border border-border p-6 md:p-8"
      aria-label="Lead contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field name="phone" label="Phone" />
        <SelectField
          name="businessType"
          label="Business Type"
          required
          options={["Restaurant", "Clinic", "Real estate", "Retail/eCommerce", "Professional services", "Other"]}
        />
      </div>
      <div className="mt-4">
        <SelectField
          name="monthlyBudget"
          label="Monthly Budget"
          required
          options={["$500-1,000", "$1,000-2,500", "$2,500-5,000", "$5,000-10,000", "$10,000+", "Not sure yet"]}
        />
      </div>
      <div className="mt-4">
        <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-muted">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none ring-accent transition focus:ring-2"
          placeholder="What do you want to improve in the next 90 days?"
        />
      </div>
      <Button className="mt-5 w-full" disabled={loading}>
        {loading ? "Sending..." : "Request strategy call"}
      </Button>
      {status.type !== "idle" && (
        <p className={`mt-3 text-sm ${status.type === "success" ? "text-success" : "text-red-400"}`}>{status.message}</p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-muted">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none ring-accent transition focus:ring-2"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  required = false
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-muted">{label}</label>
      <select
        name={name}
        required={required}
        className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none ring-accent transition focus:ring-2"
        defaultValue=""
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

