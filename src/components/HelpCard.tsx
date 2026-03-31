import Link from "next/link";

interface HelpCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function HelpCard({ icon, title, description, href }: HelpCardProps) {
  return (
    <div className="rounded-xl border border-brand-gray-200 bg-brand-white p-8 transition-shadow duration-200 hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-light">
        {icon}
      </div>
      <h3 className="mb-3 font-heading text-xl">{title}</h3>
      <p className="mb-5 text-[14.5px] leading-relaxed text-brand-gray-600">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors duration-200 hover:text-brand-blue-dark"
      >
        Learn more
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="mt-px"
        >
          <path
            d="M6 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
