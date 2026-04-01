"use client";

const milestones = [
  { year: "Early Years", label: "Lost my mom. Found my fight." },
  { year: "20 Years", label: "Sales leadership. 5,000+ trained." },
  { year: "Community", label: "PB&J. GRAB Tomorrow. The 2mm Club." },
  { year: "Media", label: "100+ podcasts. Keynotes. CBS." },
  { year: "The NICU", label: "254 days. Everything changed." },
  { year: "Today", label: "WARM Method. Coaching. Speaking." },
];

export default function StoryTimeline() {
  return (
    <div className="w-full overflow-x-auto">
      {/* Desktop: horizontal path */}
      <div className="hidden md:block">
        <div className="relative mx-auto max-w-4xl px-6 py-4">
          {/* Connecting line */}
          <div className="absolute left-[calc(8.33%+12px)] right-[calc(8.33%+12px)] top-[30px] h-[2px] bg-brand-gray-200" />

          <div className="relative grid grid-cols-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex flex-col items-center text-center">
                {/* Dot */}
                <div
                  className={`relative z-10 flex h-[14px] w-[14px] items-center justify-center rounded-full ${
                    i === 4
                      ? "bg-brand-blue ring-4 ring-brand-blue-light"
                      : "bg-brand-blue"
                  }`}
                >
                  <div className="h-[6px] w-[6px] rounded-full bg-white" />
                </div>

                {/* Year label */}
                <p className="mt-3 text-[13px] font-bold text-brand-dark">
                  {m.year}
                </p>

                {/* Description */}
                <p className="mt-1 max-w-[140px] text-[12px] leading-snug text-brand-gray-400">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical path */}
      <div className="block md:hidden">
        <div className="relative mx-auto max-w-sm px-6">
          {milestones.map((m, i) => (
            <div key={m.year} className="relative flex gap-4 pb-8 last:pb-0">
              {/* Vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full ${
                    i === 4
                      ? "bg-brand-blue ring-4 ring-brand-blue-light"
                      : "bg-brand-blue"
                  }`}
                >
                  <div className="h-[6px] w-[6px] rounded-full bg-white" />
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-[2px] grow bg-brand-gray-200" />
                )}
              </div>

              {/* Text */}
              <div className="-mt-1">
                <p className="text-[13px] font-bold text-brand-dark">
                  {m.year}
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-400">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
