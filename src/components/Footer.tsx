import Link from "next/link";
import Image from "next/image";

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
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Mike Abramowitz"
            width={1051}
            height={126}
            className="h-10 w-auto invert opacity-70"
          />
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

        {/* Social links */}
        <div className="mb-8 flex gap-6">
          <a href="https://www.linkedin.com/in/mikeabramowitz1/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors duration-200 hover:text-white/80">LinkedIn</a>
          <a href="https://www.instagram.com/mikeabramowitz/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors duration-200 hover:text-white/80">Instagram</a>
          <a href="https://www.facebook.com/mike.abramowitz.9" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors duration-200 hover:text-white/80">Facebook</a>
          <a href="https://x.com/mikeabramowitz" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors duration-200 hover:text-white/80">X</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/30">
          &copy; 2026 Mike Abramowitz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
