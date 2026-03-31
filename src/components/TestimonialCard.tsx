interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  initials: string;
}

export default function TestimonialCard({
  quote,
  author,
  title,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="rounded-lg border border-brand-gray-200 bg-brand-white p-8">
      <p className="mb-6 text-[15.5px] italic leading-relaxed text-brand-charcoal">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-light text-sm font-semibold text-brand-blue">
          {initials}
        </div>
        <div>
          <p className="text-sm font-bold text-brand-dark">{author}</p>
          <p className="text-[13px] text-brand-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
}
