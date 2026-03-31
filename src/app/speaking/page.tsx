import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import SpeakingForm from "@/components/SpeakingForm";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata = {
  title: "Book Mike Abramowitz to Speak",
  description:
    "Keynotes, workshops, and podcast guest appearances. Mike brings business strategy and personal story that moves rooms and changes how people think about growth.",
};

const topics = [
  {
    title: "Building a Referral-First Business",
    description:
      "How to install systems that generate predictable growth through warm relationships instead of cold outreach, paid ads, or hoping for word of mouth.",
  },
  {
    title: "When Life Stops and Business Doesn't",
    description:
      "The NICU story and what it taught me about building systems that hold when you need to step away. For audiences who want both business strategy and personal depth.",
  },
  {
    title: "From 6 to 1,000: Building Communities That Matter",
    description:
      "How I grew a local community from 6 members to nearly 1,000 through education, philanthropy, and adventure. For organizations that want to understand real community building.",
  },
  {
    title: "Tiny Actions Daily: The Compound Effect of Consistency",
    description:
      "The T.A.D. philosophy from my GRAB Tomorrow book series. Small, consistent actions create massive results. For audiences focused on personal development and long-term growth.",
  },
];

const engagements = [
  { name: "AOLP", description: "Keynote workshop, several hundred attendees" },
  {
    name: "Gracie Barra Leadership Conference",
    description: "Keynote",
  },
  { name: "YellowTelescope", description: "Keynote" },
  { name: "Vector Marketing", description: "Keynote" },
  { name: "Front Row Dads", description: "Keynote workshop" },
  { name: "Freedom Builders University", description: "Keynote" },
  { name: "GoBundance", description: "Keynote workshop" },
  { name: "USF", description: "University speaking" },
  { name: "FBLA", description: "Student organization" },
  { name: "NSLS", description: "Student organization" },
  { name: "CBS", description: "Featured appearance" },
  { name: "100+ Podcasts", description: "Guest appearances" },
];

const testimonials = [
  {
    quote:
      "Placeholder for event organizer testimonial about the impact of Mike's keynote on their audience.",
    author: "Event Organizer",
    title: "Placeholder",
    initials: "EO",
  },
  {
    quote:
      "Placeholder for podcast host testimonial about Mike as a guest and the value he brought to their audience.",
    author: "Podcast Host",
    title: "Placeholder",
    initials: "PH",
  },
];

export default function SpeakingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <h1 className="font-heading text-[46px] leading-tight text-brand-dark">
              Book me to speak.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-brand-gray-600">
              Keynotes, workshops, and podcast guest appearances. I bring a mix
              of business strategy and personal story that moves rooms and
              changes how people think about growth.
            </p>

            <iframe
              className="mx-auto mt-10 aspect-video w-full max-w-3xl rounded-xl"
              src="https://www.youtube.com/embed/XwQEPYWkcl8"
              title="AOLP Keynote Sizzle Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Talk Topics ── */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <h2 className="text-center font-heading text-[32px] leading-snug text-brand-dark">
              What I speak about.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="rounded-lg border border-brand-gray-200 bg-white p-8"
                >
                  <h3 className="font-heading text-xl text-brand-dark">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-brand-gray-600">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-brand-gray-400">
              Custom topics available. I work with your team to tailor the
              message to your audience.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Notable Engagements ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <h2 className="mb-10 text-center font-heading text-[32px] leading-snug text-brand-dark">
              Where I have spoken.
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {engagements.map((eng) => (
                <div
                  key={eng.name}
                  className="rounded-lg bg-brand-gray-100 px-6 py-4"
                >
                  <p className="font-semibold text-brand-dark">{eng.name}</p>
                  <p className="text-sm text-brand-gray-400">
                    {eng.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t.initials}
                  quote={t.quote}
                  author={t.author}
                  title={t.title}
                  initials={t.initials}
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <h2 className="text-center font-heading text-[32px] leading-snug text-brand-dark">
              Check availability.
            </h2>
            <div className="mx-auto mt-10 max-w-2xl">
              <SpeakingForm />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Media Kit ── */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              For podcast hosts and media
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-brand-gray-600">
              Download my media kit for bios, headshots, and suggested interview
              questions.
            </p>
            <Link
              href="/media-kit.pdf"
              className="mt-4 inline-block rounded-md bg-brand-blue px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Download Media Kit
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
