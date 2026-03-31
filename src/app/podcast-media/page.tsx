import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import PodcastGrid from "@/components/PodcastGrid";
import podcasts from "@/data/podcasts.json";

export const metadata: Metadata = {
  title: "Podcast Appearances & Media | Mike Abramowitz",
  description:
    "Over 100 guest appearances, keynote highlights, and press features. Hours of free content on business growth, relationships, systems, and personal story.",
};

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const mediaKitItems = [
  {
    icon: <CameraIcon />,
    title: "Professional Headshots",
    description: "High-resolution photos for press and event promotion.",
  },
  {
    icon: <DocumentIcon />,
    title: "Bio",
    description: "Short, medium, and long versions ready to use.",
  },
  {
    icon: <FileIcon />,
    title: "One-Sheet / Speaker Sheet",
    description: "PDF overview of topics, credentials, and testimonials.",
  },
  {
    icon: <ChatIcon />,
    title: "Interview Questions",
    description: "Suggested questions for podcast hosts and journalists.",
  },
];

export default function PodcastMediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <h1 className="font-heading text-[32px] leading-tight text-brand-dark sm:text-[40px] lg:text-[46px]">
              Podcast and media.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-brand-gray-600">
              Over 100 guest appearances, keynote highlights, and press
              features. Hours of free content on business growth, relationships,
              systems, and my story.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Podcast Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="mb-10 font-heading text-[32px] text-brand-dark">
              Guest appearances.
            </h2>
          </FadeUp>
          <PodcastGrid podcasts={podcasts} />
        </div>
      </section>

      {/* Press and Media Kit */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <h2 className="font-heading text-[32px] text-brand-dark">
              Press and media kit.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-brand-gray-600">
              Everything a podcast host, journalist, or event organizer needs in
              one place.
            </p>
          </FadeUp>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {mediaKitItems.map((item) => (
              <FadeUp key={item.title}>
                <div className="rounded-lg border border-brand-gray-200 bg-brand-white p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="mb-1 text-sm font-bold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-[14px] text-brand-gray-600">
                    {item.description}
                  </p>
                  {/* Replace href with actual download links */}
                  <a
                    href="#"
                    className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                  >
                    Download
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
