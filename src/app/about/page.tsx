import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import Link from "next/link";
import StoryTimeline from "@/components/StoryTimeline";

export const metadata = {
  title: "About Mike Abramowitz | The Full Story",
  description:
    "From an overweight kid who lost his mom to cancer, to a 20-year sales career, to the NICU that changed everything. This is how I got here.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <h1 className="font-heading text-[32px] leading-tight text-brand-dark md:text-[46px]">
              The full story.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-brand-gray-600">
              From an overweight kid who lost his mom to cancer, to a 20-year
              sales career, to the NICU that changed everything. This is how I
              got here.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Story Timeline ── */}
      <section className="bg-brand-cream py-12">
        <FadeUp>
          <StoryTimeline />
        </FadeUp>
      </section>

      {/* ── The Early Years ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              Where it started.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I was an overweight kid growing up. I got picked on. Tormented by
              others and worse by myself. In the middle of all that, my mom, my
              superhero, was diagnosed with cancer. She radiated love,
              positivity, and encouragement no matter what she was going through.
              She always made you feel like the most important person in the
              room.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              When I went to college in Florida, she got sick again. I raced
              home to her bedside. She waited for me to be there before she
              passed.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              My mom taught me the strength to fight. The strength to let go.
              And the ability to know when each is needed. That became the
              foundation for everything I have built since.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── The Career Chapter ── */}
      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeUp>
              <Image
                src="/mike-about-1.jpg"
                alt="Mike Abramowitz"
                width={600}
                height={400}
                className="h-[400px] w-full rounded-lg object-cover"
              />
            </FadeUp>
            <FadeUp>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              20 years of building.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              After college, I built a 20-year career in sales leadership. I
              interviewed over 10,000 people. Trained more than 5,000. Generated
              nearly $20M in team sales.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I paid my way through college by creating over 1,000 clients
              through self-generated appointments, producing nearly $400K in
              personal sales. I became a hall of fame performer and manager. Top
              0.5% producer out of more than 2 million reps in the company's
              40-year history.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I do not name the company because the brand is not the point. The
              skills are. Sales, leadership, team building, culture, and
              systems. Those 20 years gave me every tool I use today.
            </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── The Community Chapter ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              Giving back.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              While building my career, I poured into community. I founded
              PB&amp;J for Tampa Bay, which provided over 100,000 meals with
              more than 1,000 volunteers through events across the USA.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I created GRAB Tomorrow, which reached over 30,000 students
              through more than 300 hours of classroom speaking. I wrote the
              GRAB Tomorrow book series, including &ldquo;Your Best Year
              Ever&rdquo; and &ldquo;GRAB Your Thoughts: A Guided Journal to
              Capture Moments,&rdquo; which introduced the T.A.D. (Tiny Actions
              Daily) philosophy that runs through everything I do.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I grew a Tony Robbins community called The 2mm Club from 6 members
              to nearly 1,000 with monthly meetups focused on education,
              philanthropy, and adventure. I am a 7x firewalker and Date with
              Destiny graduate. Community building is in my DNA.
            </p>

            <iframe
              className="mt-10 aspect-video w-full rounded-xl"
              src="https://www.youtube.com/embed/ckuNkHXi55k"
              title="PB&J for Tampa Bay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </FadeUp>
        </div>
      </section>

      {/* ── The Media Chapter ── */}
      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              Getting the word out.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I co-founded a business and podcast that ran nearly 300 episodes
              helping entrepreneurs build businesses that serve their life, not
              the other way around. I have been a guest on over 100 podcasts.
              Featured on CBS. Delivered keynotes and workshops for organizations
              including AOLP (Association of Outdoor Lighting Professionals),
              Gracie Barra Leadership Conference, YellowTelescope, Vector
              Marketing, Front Row Dads, Freedom Builders University, and
              GoBundance.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I have spoken at USF, FBLA, NSLS, and other universities and
              student organizations.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── The Turning Point ── */}
      <section className="bg-brand-blue-light py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <div className="border-l-4 border-brand-blue pl-8 md:pl-10">
              <h2 className="font-heading text-[32px] leading-snug text-brand-dark">
                Then everything changed.
              </h2>
              <p className="mt-8 text-[17px] leading-relaxed text-brand-gray-600">
                My son was born at 1 pound 4 ounces. He spent 254 days in the
                NICU. He was on a trach, ventilator, and g-tube feeds for his
                first few years of life.
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
                For nearly a year, I stepped completely out of the day-to-day of
                my business to be fully present with my family. The business
                kept running. The systems and relationships I had spent two
                decades building held. Revenue kept coming in. Clients were
                served. The team operated.
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
                That season was the hardest of my life and it was also the
                proof. Proof that what I had built was real. That systems and
                relationships are not abstract concepts. They are what let you
                show up for the things that matter most.
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
                Today, my son is free from all the medical equipment. He is an
                incredible little boy. And his sister, now 2, lights up every
                room she walks into.
              </p>

              <Image
                src="/family-nicu.jpg"
                alt="Mike Abramowitz with his family"
                width={800}
                height={300}
                className="mt-10 h-[300px] w-full rounded-lg object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── The Current Chapter ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeUp>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              What I am building now.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I am based in Saint Augustine, Florida. Father of two. For the
              last five years I have been helping other business owners set up
              the systems that buy back their time and create predictability.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              I co-founded the WARM Method with my former coaching client
              Stuart, building a warm referral marketing system that helps
              businesses grow through relationships. I partner with companies as
              a rev share partner, building and running revenue engines on a
              performance basis. I close high-ticket sales. I coach
              entrepreneurs 1-on-1. I speak on stages.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              The through line has not changed since I was 20 years old.
              Relationships first. Systems always.
            </p>

            <div className="mt-10">
              <Link
                href="/work-with-me"
                className="inline-block rounded-md bg-brand-blue px-8 py-3 text-[17px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Work With Me
              </Link>
            </div>
          </FadeUp>
          <FadeUp>
            <Image
              src="/mike-about-3.png"
              alt="Mike Abramowitz"
              width={460}
              height={560}
              className="mx-auto max-h-[500px] w-auto rounded-lg object-contain"
            />
          </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
