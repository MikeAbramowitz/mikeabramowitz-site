"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-brand-gray-200 bg-brand-blue-light p-8 text-center">
        <h3 className="mb-2 font-heading text-2xl text-brand-dark">
          Message sent.
        </h3>
        <p className="text-brand-gray-600">
          Thanks for reaching out. I will get back to you soon.
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
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
          />
        </div>
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

      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-dark">
          Phone (optional)
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-dark">
          I am interested in...
        </label>
        <select
          name="interest"
          required
          className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
        >
          <option value="">Select an option</option>
          <option value="warm-method">Referral Systems / WARM Method</option>
          <option value="rev-share">Rev Share Partnership</option>
          <option value="high-ticket">High-Ticket Sales</option>
          <option value="speaking">Speaking Engagement</option>
          <option value="coaching">Coaching</option>
          <option value="podcast">Podcast Guest Booking</option>
          <option value="other">Something Else</option>
        </select>
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
        Send Message
      </button>
    </form>
  );
}
