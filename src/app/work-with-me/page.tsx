import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import Link from "next/link";
import VideoTestimonialCard from "@/components/VideoTestimonialCard";
import TestimonialCard from "@/components/TestimonialCard";

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

      {/* ── WARM Testimonials ── */}
      <section className="bg-brand-cream pb-6 pt-0">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeUp>
              <VideoTestimonialCard
                videoId="pq2iqdbYPZk"
                quote="He teaches you how to work on your business and spend a lot more time building the systems and programs that help you to automate, delegate, and systemize areas of your business to free up your time for the higher dollar-per-hour activities."
                author="Stuart Nadeau"
                title="Co-Founder, The WARM Method"
              />
            </FadeUp>
            <FadeUp>
              <VideoTestimonialCard
                videoId="M3ikBre4TlI"
                quote="It's been a full life transformation. I get to save a lot of time by using delegation, using my VAs, and having systems in place. It helps me make a lot more money simply by making sure that my follow-up is getting done. I'm a business owner, not a business operator."
                author="Sylia Honne"
                title=""
              />
            </FadeUp>
          </div>
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

      {/* ── Rev Share Testimonials ── */}
      <section className="bg-white pb-6 pt-0">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeUp>
              <VideoTestimonialCard
                videoId="1hAYKZWyGD0"
                quote="No fluff, no small talk, just direct, actionable value. He asked the right questions, helped me articulate my plan, and within an hour, I left with a clearly defined process I could implement right away."
                author="Justin Middleton"
                title="COO, Titan X"
              />
            </FadeUp>
            <FadeUp>
              <VideoTestimonialCard
                videoId="AwSXHRuFSKM"
                quote="Mike has worked with so many different people and companies that we were able to create a flowchart, and I now know the next steps I need to take to grow that section of my business. And we got it done in about 45 minutes."
                author="David Powders"
                title=""
              />
            </FadeUp>
          </div>
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
      {/* ── Coaching Testimonials ── */}
      <section className="bg-brand-cream pb-6 pt-0">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeUp>
              <VideoTestimonialCard
                videoId="SPBUk4i-Sss"
                quote="He challenges my thinking in a way where he won't give me the answers, but he asks me questions where I will reveal the answer for myself. He shows me how to break things down into small actionable steps, tiny actions daily, that allow me to be really comfortable and confident in what I need to do to achieve my long-term goals."
                author="Jeremy Blough"
                title=""
              />
            </FadeUp>
            <FadeUp>
              <VideoTestimonialCard
                videoId="GrYsZfJHoiA"
                quote="Continually throughout the process I felt right at the edge of discomfort where growth happens, because Mike was asking me questions that forced me to think in a different way. By the end of it I have much more clarity around the challenges I came in with, but even more so, blind spots I was not even aware of beforehand."
                author="Henry Winslow"
                title="Founder, Tricycle Day"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── More Client Results ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <h2 className="mb-10 text-center font-heading text-[32px] leading-snug text-brand-dark">
              More from clients.
            </h2>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeUp>
              <TestimonialCard
                quote="This session with Mike really helped me tackle different areas of my business. We got my systems set up so I could automate more and focus on growth. The stuff he gives away is pure gold."
                author="Tim Tindle"
                title=""
                initials="TT"
              />
            </FadeUp>
            <FadeUp>
              <TestimonialCard
                quote="Mike gave us actionable tips that I can start implementing immediately. From making better management decisions for my labor team to optimizing workflows for my office staff, the session provided clarity and direction."
                author="Bill Knowles"
                title="Northern Outdoor Lighting"
                initials="BK"
              />
            </FadeUp>
            <FadeUp>
              <TestimonialCard
                quote="Mike's discussion really opened my eyes to how to buy back my time and put systems and workflows into place so I can focus on what truly matters. Family, life, and the things I actually enjoy."
                author="Bill Coggins"
                title="Nightlight Landscape Lighting"
                initials="BC"
              />
            </FadeUp>
            <FadeUp>
              <TestimonialCard
                quote="Jumping on this session with Mike has been a huge benefit to highlight the next steps and where I should be focusing my time and energy. This is going to be huge for my business going forward."
                author="John Fagan"
                title=""
                initials="JF"
              />
            </FadeUp>
            <FadeUp>
              <TestimonialCard
                quote="We built out this onboarding system so far which has created us a ton of predictability. Our communication with our reps is better than I've ever had. We've had a 90-plus percent show rate to advance training, where I used to have like a quarter of people show up at half effort."
                author="Alex Funk"
                title=""
                initials="AF"
              />
            </FadeUp>
            <FadeUp>
              <TestimonialCard
                quote="The reality is I could have done this myself, but it would have gotten delegated to the 'I should do it' pile. In 2 hours I can't believe how much material we got through. When you hang up from a session, the mission is already accomplished."
                author="Kevin Cuccinelli"
                title=""
                initials="KC"
              />
            </FadeUp>
            <FadeUp>
              <TestimonialCard
                quote="Just in that one small call with Mike, I walked away with fewer questions than I've had in a long time, actual steps to move my business forward, and also ways to move myself forward personally. He knows how to give people their life back."
                author="Luke Montreal"
                title=""
                initials="LM"
              />
            </FadeUp>
            <FadeUp>
              <TestimonialCard
                quote="We came away with actionable steps, great conversations, quality questions, and I can actually take what I learned today and move forward and implement it in my business. I cannot tell you how much I would recommend having one of these sessions with Mike."
                author="Susan Geobel"
                title="CEO, Scaling Management Consulting Group"
                initials="SG"
              />
            </FadeUp>
            <FadeUp>
              <TestimonialCard
                quote="The coaching has been great, but one of the things that's been really the most helpful is that after each coaching call I get a list of action steps that recaps everything we covered. It's been really big for my business."
                author="JC Humen"
                title=""
                initials="JH"
              />
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
