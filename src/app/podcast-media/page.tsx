import FadeUp from "@/components/FadeUp";
import PodcastGrid from "@/components/PodcastGrid";
import podcasts from "@/data/podcasts.json";

export const metadata = {
  title: "Podcast Appearances & Media | Mike Abramowitz",
  description:
    "Over 100 guest appearances, keynote highlights, and press features. Hours of free content on business growth, relationships, systems, and personal story.",
};

export default function PodcastMediaPage() {
  return (
    <main>
      {/* Hero */}
      <FadeUp>
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h1 className="font-heading text-[46px] leading-tight text-brand-dark">
              Podcast and media.
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-brand-gray-600">
              Over 100 guest appearances, keynotes, and workshops. Hours of
              free content on business growth, relationships, systems, and my
              story.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* Podcast Grid */}
      <FadeUp>
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-10 font-heading text-[32px] text-brand-dark">
              Guest appearances.
            </h2>
            <PodcastGrid podcasts={podcasts} />
          </div>
        </section>
      </FadeUp>

      {/* Press and Media Kit */}
      <FadeUp>
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-4 font-heading text-[32px] text-brand-dark">
              Press and media kit.
            </h2>
            <p className="mb-10 text-[17px] leading-relaxed text-brand-gray-600">
              Everything a podcast host, journalist, or event organizer needs in
              one place.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Headshots */}
              <div className="rounded-lg border border-brand-gray-200 bg-white p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4 text-brand-blue"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <h3 className="mb-1 font-heading text-lg text-brand-dark">
                  Professional Headshots
                </h3>
                <p className="mb-4 text-sm text-brand-gray-600">
                  High-resolution photos for press and event promotion.
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                >
                  Download
                </a>
              </div>

              {/* Bio */}
              <div className="rounded-lg border border-brand-gray-200 bg-white p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4 text-brand-blue"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <h3 className="mb-1 font-heading text-lg text-brand-dark">
                  Bio
                </h3>
                <p className="mb-4 text-sm text-brand-gray-600">
                  Short, medium, and long versions ready to use.
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                >
                  Download
                </a>
              </div>

              {/* One-Sheet / Speaker Sheet */}
              <div className="rounded-lg border border-brand-gray-200 bg-white p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4 text-brand-blue"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                <h3 className="mb-1 font-heading text-lg text-brand-dark">
                  One-Sheet / Speaker Sheet
                </h3>
                <p className="mb-4 text-sm text-brand-gray-600">
                  PDF overview of topics, credentials, and testimonials.
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                >
                  Download
                </a>
              </div>

              {/* Interview Questions */}
              <div className="rounded-lg border border-brand-gray-200 bg-white p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4 text-brand-blue"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="mb-1 font-heading text-lg text-brand-dark">
                  Interview Questions
                </h3>
                <p className="mb-4 text-sm text-brand-gray-600">
                  Suggested questions for podcast hosts and journalists.
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}
