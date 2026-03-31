"use client";

import { useState } from "react";

export default function SpeakingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-brand-gray-200 bg-brand-blue-light p-8 text-center">
        <h3 className="mb-2 font-heading text-2xl text-brand-dark">
          Inquiry sent.
        </h3>
        <p className="text-brand-gray-600">
          Thanks for your interest. I will review your event details and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        }).then((res) => {
          if (res.ok) setSubmitted(true);
        });
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-dark">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          required
          className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-dark">
          Event Type
        </label>
        <select
          name="eventType"
          required
          className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
        >
          <option value="">Select an option</option>
          <option value="keynote">Keynote</option>
          <option value="workshop">Workshop</option>
          <option value="podcast">Podcast Guest</option>
          <option value="virtual">Virtual Event</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-dark">
          Preferred Date
        </label>
        <input
          type="text"
          name="preferredDate"
          placeholder="e.g. March 2026 or flexible"
          className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-dark">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-brand-blue px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-blue-dark"
      >
        Send Inquiry
      </button>

      <p className="text-[13px] text-brand-gray-400">
        No public pricing. Every engagement is scoped to fit your event and audience.
      </p>
    </form>
  );
}
