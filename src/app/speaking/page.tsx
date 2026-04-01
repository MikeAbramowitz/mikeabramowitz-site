import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import Link from "next/link";
import SpeakingForm from "@/components/SpeakingForm";
import VideoTestimonialCard from "@/components/VideoTestimonialCard";

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
  { name: "AOLP", logo: "/logos/aolp.png" },
  { name: "Gracie Barra", logo: "/logos/gracie-barra.svg" },
  { name: "YellowTelescope", logo: "/logos/yellowtelescope.jpeg" },
  { name: "Vector Marketing", logo: "/logos/vector-marketing.webp" },
  { name: "Front Row Dads", logo: "/logos/front-row-dads.png" },
  { name: "Freedom Builders University", logo: "/logos/freedom-builders.png" },
  { name: "GoBundance", logo: "/logos/gobundance.png" },
  { name: "USF", logo: "/logos/usf.png" },
  { name: "FBLA", logo: "/logos/fbla.svg" },
  { name: "NSLS", logo: "/logos/nsls.png" },
  { name: "CBS", logo: "/logos/cbs.svg" },
  { name: "COO Alliance", logo: "/logos/coo-alliance.png" },
];

const testimonials = [
  {
    videoId: "bwGyr_Qra6M",
    quote:
      "I had my corporation work with him and have him speak to us and many of our colleagues and clients, to rave reviews. He's a phenomenal speaker but very insightful, honest, caring, and genuine. That's a combination you don't get with everybody.",
    author: "Jon Hoffenberg",
    title: "President, Yellow Telescope Companies",
  },
  {
    videoId: "jMGLQ8VaMQw",
    quote:
      "This session has been a game-changer for GB Wear. We were able to identify the bottlenecks in our organization, strategize with the tools Mike provided, and gain a clear understanding of what we're trying to accomplish.",
    author: "Nicole Pham",
    title: "COO, GB Wear / Gracie Barra",
  },
  {
    videoId: "PmnneRlwGJs",
    quote:
      "Mike is one of the most growth-oriented and giving humans I've ever met. He's inspired me for years to be at my best, and through conversations and coaching has allowed me to break through different areas that I hadn't even thought could be at a higher level.",
    author: "Cathy Christen",
    title: "",
  },
];

export default function SpeakingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeUp>
              <h1 className="font-heading text-[46px] leading-tight text-brand-dark">
                Book me to speak.
              </h1>
              <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
                Keynotes, workshops, and podcast guest appearances. I bring a mix
                of business strategy and personal story that moves rooms and
                changes how people think about growth.
              </p>
            </FadeUp>
            <FadeUp>
              <Image
                src="/mike-speaking-1.png"
                alt="Mike Abramowitz speaking"
                width={460}
                height={560}
                className="mx-auto max-h-[480px] w-auto object-contain"
              />
            </FadeUp>
          </div>

          <FadeUp>
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

      {/* ── Stage Photos ── */}
      <section className="bg-white pt-20 pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <div>
              <Image
                src="/photos/warm-method-stage.jpg"
                alt="Presenting The WARM Method at COO Alliance"
                width={1200}
                height={675}
                className="w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-sm text-gray-500">
                Presenting The WARM Method at COO Alliance with Stuart Nadeau
              </p>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="mx-auto mt-8 max-w-sm">
              <Image
                src="/photos/alex-cafe-dantas-gracie-barra.jpg"
                alt="With Alexandre Cafe Dantas at Gracie Barra"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-sm text-gray-500">
                With Alexandre "Cafe" Dantas before taking the stage at the Gracie Barra Leadership Conference
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Notable Engagements ── */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <h2 className="mb-10 text-center font-heading text-[32px] leading-snug text-brand-dark">
              Where I have spoken.
            </h2>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {engagements.map((eng) => (
                <div
                  key={eng.name}
                  className="flex items-center justify-center rounded-lg border border-brand-gray-200 bg-white p-6"
                >
                  <Image
                    src={eng.logo}
                    alt={eng.name}
                    width={160}
                    height={80}
                    className="h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <h2 className="mb-10 text-center font-heading text-[32px] leading-snug text-brand-dark">
              What organizers and attendees say.
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <VideoTestimonialCard
                  key={t.author}
                  videoId={t.videoId}
                  quote={t.quote}
                  author={t.author}
                  title={t.title}
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
