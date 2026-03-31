export default function SocialProofBar() {
  const orgs = ["CBS", "COO Alliance", "Front Row Dads", "GoBundance", "AOLP", "USF", "NSLS"];

  return (
    <section className="border-y border-brand-gray-200 bg-brand-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[2px] text-brand-gray-400">
          Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {orgs.map((org) => (
            <span
              key={org}
              className="text-[13px] font-bold uppercase text-brand-gray-400"
            >
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
