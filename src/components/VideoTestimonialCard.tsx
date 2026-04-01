interface VideoTestimonialCardProps {
  videoId: string;
  quote: string;
  author: string;
  title: string;
}

export default function VideoTestimonialCard({
  videoId,
  quote,
  author,
  title,
}: VideoTestimonialCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-brand-gray-200 bg-white">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${author} testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="mb-4 text-[15.5px] italic leading-relaxed text-brand-charcoal">
          &ldquo;{quote}&rdquo;
        </p>
        <div>
          <p className="text-sm font-bold text-brand-dark">{author}</p>
          <p className="text-[13px] text-brand-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
}
