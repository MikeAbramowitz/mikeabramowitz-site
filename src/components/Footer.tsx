import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "About", href: "/about" },
    { label: "Work With Me", href: "/work-with-me" },
    { label: "Speaking", href: "/speaking" },
    { label: "Books", href: "/books" },
    { label: "Podcast & Media", href: "/podcast-media" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-dark py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo */}
        <div className="mb-8 flex items-baseline gap-1.5 font-body">
          <span className="text-lg font-bold uppercase tracking-[0.5px] text-brand-blue">
            MIKE
          </span>
          <span className="text-lg font-bold uppercase tracking-[0.5px] text-white/60">
            ABRAMOWITZ
          </span>
        </div>

        {/* Nav links */}
        <div className="mb-8 flex flex-wrap gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 transition-colors duration-200 hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/30">
          &copy; 2026 Mike Abramowitz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
