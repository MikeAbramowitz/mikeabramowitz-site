import { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Mike Abramowitz",
  description:
    "Get in touch with Mike Abramowitz. Explore working together, book a speaking engagement, or just say hello.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <FadeUp>
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h1 className="font-heading text-[46px] leading-tight text-brand-dark">
              Get in touch.
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-brand-gray-600">
              Whether you want to explore working together, book me to speak, or
              just say hello, start here.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* Contact Form Section */}
      <FadeUp>
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <ContactForm />
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/mike-speaking-2.png"
                  alt="Mike Abramowitz"
                  width={460}
                  height={560}
                  className="mx-auto max-h-[500px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* Location and Social Links */}
      <FadeUp>
        <section className="bg-brand-cream py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="mb-8 text-[17px] text-brand-gray-600">
              Based in Saint Augustine, Florida.
            </p>

            {/* Replace href values with Mike's actual social media profile URLs */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="#"
                className="text-sm font-semibold text-brand-blue transition hover:text-brand-blue-dark"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-brand-blue transition hover:text-brand-blue-dark"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-brand-blue transition hover:text-brand-blue-dark"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-brand-blue transition hover:text-brand-blue-dark"
              >
                Twitter/X
              </a>
            </div>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}
