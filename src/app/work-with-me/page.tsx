import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Work With Mike Abramowitz | WARM Method, Rev Share, Coaching",
  description:
    "Three ways to partner with Mike Abramowitz. The WARM Method for referral systems, revenue share partnerships, and 1-on-1 coaching for entrepreneurs.",
};

export default function WorkWithMePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeUp>
              <h1 className="font-heading text-[32px] leading-tight text-brand-dark md:text-[46px]">
                Work with me.
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-brand-gray-600">
                Three ways to partner, depending on what you need. Every
                engagement is built on the same foundation: warm relationships,
                real systems, and results you can measure.
              </p>
            </FadeUp>
            <FadeUp>
              <Image
                src="/mike-chair.png"
                alt="Mike Abramowitz reading GRAB Tomorrow"
                width={400}
                height={560}
                className="mx-auto max-h-[500px] w-auto object-contain"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── The WARM Method ── */}
      <section id="warm-method" className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <p className="mb-6 text-[15px] font-semibold uppercase tracking-[2px] text-brand-blue">
              WARM ASK REFERRAL MARKETING
            </p>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              The WARM Method
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              A done-with-you and done-for-you warm referral marketing service.
              I help businesses, coaches, and mastermind communities install a
              predictable referral program into their existing model. Growth
              through relationships, not cold outreach. Not ads. Not hoping for
              word of mouth. A real system.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I co-founded the WARM Method with Stuart, who started as a
              coaching client nearly five years ago. I worked with him through
              personal and professional growth, brought him into my community,
              and watched him develop into a strong operator. When I was ready to
              launch this business, he was the obvious person to build it with.
              He knows my philosophies, brings incredible energy, and the mentee
              becoming the cofounder is one of the proudest outcomes of my
              career.
            </p>
            <p className="mt-6 text-sm font-semibold text-brand-dark">
              Current client: COO Alliance with Cameron Herold.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-brand-blue px-8 py-3 text-[17px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Book a WARM Strategy Call
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Rev Share Partner ── */}
      <section id="rev-share" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <p className="mb-6 text-[15px] font-semibold uppercase tracking-[2px] text-brand-blue">
              PERFORMANCE-BASED REVENUE GROWTH
            </p>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              Rev Share Partner
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I partner with companies on a performance basis to build and run
              relationship-driven revenue systems. This includes sales
              consulting, high-ticket closing, outreach infrastructure, and
              referral system buildouts. I am compensated based on results.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I am confident in this model because I have spent 20+ years
              producing results. But I am selective. I only say yes when I
              believe in the offer, trust the people, and have the freedom to
              personalize the process. When I commit, I find a way to generate
              results. That confidence comes from lived experience, not theory.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I have provided sales consulting and closing for premium coaching
              and community brands like Front Row Dads. I have built
              relationship-driven outreach and lead generation systems for
              education platforms and professional services companies. I have
              generated over $5M in high-ticket sales with an average ticket of
              $35K+.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-brand-blue px-8 py-3 text-[17px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Explore a Rev Share Partnership
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Coaching ── */}
      <section id="coaching" className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <p className="mb-6 text-[15px] font-semibold uppercase tracking-[2px] text-brand-blue">
              1-ON-1 PERSONAL AND PROFESSIONAL
            </p>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              Coaching
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              Direct access to my thinking, frameworks, and accountability. I
              work with business owners who want support on the business growth
              side and the personal side that drives it. Leadership, transitions,
              relationships, time, clarity, and building something that actually
              works for your life.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              This is for entrepreneurs who are past the startup phase. You have
              a business that works but you want it to work better, or you are
              navigating a transition and want someone in your corner who has
              been through it.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-brand-blue px-8 py-3 text-[17px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Apply for Coaching
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
