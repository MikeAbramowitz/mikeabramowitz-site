import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import SocialProofBar from "@/components/SocialProofBar";
import HelpCard from "@/components/HelpCard";
import VideoTestimonialCard from "@/components/VideoTestimonialCard";
import testimonials from "@/data/testimonials.json";

export const metadata: Metadata = {
  title: "Mike Abramowitz | Relationships, Systems, Results",
  description:
    "I help businesses grow through relationships and systems. 20+ years building sales organizations, launching communities, and helping business owners create predictable growth.",
};

function PeopleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <h1 className="font-heading text-[32px] leading-tight text-brand-dark sm:text-[40px] lg:text-[46px]">
                I help businesses grow through{" "}
                <span className="text-brand-blue">relationships</span> and
                systems.
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-brand-gray-600">
                For 20+ years, I have built sales organizations, launched
                communities, and helped business owners install the systems that
                create predictable growth and buy back their time.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/work-with-me"
                  className="rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-blue-dark"
                >
                  Work With Me
                </Link>
                <Link
                  href="/speaking"
                  className="rounded-md border border-brand-gray-200 bg-transparent px-6 py-3 text-sm font-semibold text-brand-charcoal transition-colors duration-200 hover:bg-brand-gray-100"
                >
                  Book Me to Speak
                </Link>
              </div>
            </FadeUp>

            <FadeUp className="relative">
              <Image
                src="/headshot.webp"
                alt="Mike Abramowitz headshot"
                width={380}
                height={460}
                className="mx-auto h-[460px] w-[380px] rounded-lg object-cover"
                priority
              />
            </FadeUp>
          </div>

          <FadeUp>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-brand-gray-200 pt-10 sm:grid-cols-3 lg:grid-cols-5">
              <div>
                <p className="text-[28px] font-bold text-brand-blue">$25M+</p>
                <p className="text-[13px] text-brand-gray-400">Sales generated</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-brand-blue">300+</p>
                <p className="text-[13px] text-brand-gray-400">Business owners coached</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-brand-blue">9</p>
                <p className="text-[13px] text-brand-gray-400">Books authored</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-brand-blue">100+</p>
                <p className="text-[13px] text-brand-gray-400">Podcast appearances</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-brand-blue">100K+</p>
                <p className="text-[13px] text-brand-gray-400">Meals served to homeless</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <SocialProofBar />

      {/* HOW I HELP */}
      <section className="bg-brand-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-brand-blue">
              How I Help
            </p>
            <h2 className="font-heading text-[36px] text-brand-dark">
              Three ways to work together.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-brand-gray-600">
              Every engagement starts with the same foundation: warm
              relationships, real systems, and a commitment to results.
            </p>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FadeUp>
              <HelpCard
                icon={<PeopleIcon />}
                title="The WARM Method"
                description="A done-with-you and done-for-you warm referral marketing system. Install a predictable referral program into your business so growth comes from relationships, not cold outreach."
                href="/work-with-me#warm-method"
              />
            </FadeUp>
            <FadeUp>
              <HelpCard
                icon={<LayersIcon />}
                title="Rev Share Partner"
                description="I partner with companies on a performance basis to build and run their revenue engine. High-ticket sales, outreach systems, referral infrastructure. I get paid when I produce."
                href="/work-with-me#rev-share"
              />
            </FadeUp>
            <FadeUp>
              <HelpCard
                icon={<HeartIcon />}
                title="Coaching"
                description="1-on-1 personal and professional coaching for entrepreneurs who want direct access. We work on business growth, leadership, transitions, and the personal side that drives it all."
                href="/work-with-me#coaching"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <iframe
                className="aspect-video w-full rounded-xl"
                src="https://www.youtube.com/embed/XwQEPYWkcl8"
                title="AOLP Keynote Sizzle Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </FadeUp>

            <FadeUp>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-brand-blue">
                See It In Action
              </p>
              <h2 className="font-heading text-[32px] leading-snug text-brand-dark">
                I bring energy, experience, and real frameworks to every stage.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-brand-gray-600">
                From keynoting for hundreds at the Association of Outdoor
                Lighting Professionals to workshops with GoBundance and Front
                Row Dads, I bring a mix of business strategy and personal story
                that moves rooms.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-[32px] font-bold text-brand-blue">
                    50K+
                  </p>
                  <p className="text-[13px] text-brand-gray-400">
                    Live audience members
                  </p>
                </div>
                <div>
                  <p className="text-[32px] font-bold text-brand-blue">50+</p>
                  <p className="text-[13px] text-brand-gray-400">
                    Stages
                  </p>
                </div>
                <div>
                  <p className="text-[32px] font-bold text-brand-blue">5,000+</p>
                  <p className="text-[13px] text-brand-gray-400">
                    Trained in workshops
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="bg-brand-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <Image
                src="/family-nicu.jpg"
                alt="Mike Abramowitz with his family"
                width={600}
                height={400}
                className="h-[400px] w-full rounded-lg object-cover"
              />
            </FadeUp>

            <FadeUp>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-brand-blue">
                My Story
              </p>
              <h2 className="font-heading text-[32px] leading-snug text-brand-dark">
                When my son was born at 1 pound 4 ounces, everything changed.
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-brand-gray-600">
                He spent 254 days in the NICU. Trach. Ventilator. G-tube feeds.
                For nearly a year, I stepped completely away from the day-to-day
                of my business to be present with my family.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-brand-gray-600">
                The business kept running. The systems and relationships I had
                spent 20 years building held. That season proved what I now help
                others create: a business that works even when life demands you
                show up somewhere else.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-brand-gray-600">
                Today my son is free from all the medical equipment and is an
                incredible little boy. And I have spent the last five years
                helping other business owners build what I built.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors duration-200 hover:text-brand-blue-dark"
              >
                Read my full story
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-brand-blue">
              What People Say
            </p>
            <h2 className="font-heading text-[36px] text-brand-dark">
              Trusted by founders and leaders.
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <FadeUp key={t.initials}>
                <VideoTestimonialCard
                  videoId={t.videoId}
                  quote={t.quote}
                  author={t.author}
                  title={t.title}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeUp>
            <h2 className="font-heading text-[36px] text-white">
              Ready to talk?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] text-white/70">
              Whether you need a referral system, a revenue partner, a speaker,
              or a coach, it starts with a conversation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/work-with-me"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-colors duration-200 hover:bg-brand-gray-100"
              >
                Work With Me
              </Link>
              <Link
                href="/speaking"
                className="rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Book Me to Speak
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
