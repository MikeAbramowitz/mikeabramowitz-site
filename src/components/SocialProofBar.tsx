import Image from "next/image";

const logos = [
  { src: "/logos/cbs.svg", alt: "CBS", width: 80, height: 40 },
  { src: "/logos/coo-alliance.png", alt: "COO Alliance", width: 160, height: 40 },
  { src: "/logos/front-row-dads.png", alt: "Front Row Dads", width: 120, height: 50 },
  { src: "/logos/gobundance.png", alt: "GoBundance", width: 140, height: 40 },
  { src: "/logos/aolp.png", alt: "AOLP", width: 160, height: 66 },
  { src: "/logos/gracie-barra.svg", alt: "Gracie Barra", width: 100, height: 100 },
  { src: "/logos/nsls.png", alt: "NSLS", width: 160, height: 46 },
  { src: "/logos/fbla.svg", alt: "FBLA", width: 100, height: 80 },
  { src: "/logos/spc.png", alt: "Saint Petersburg College", width: 140, height: 36 },
  { src: "/logos/usf.png", alt: "USF", width: 120, height: 60 },
  { src: "/logos/vector-marketing.webp", alt: "Vector Marketing", width: 160, height: 50 },
  { src: "/logos/yellowtelescope.jpeg", alt: "YellowTelescope", width: 160, height: 44 },
  { src: "/logos/brotherhood.webp", alt: "The Brotherhood", width: 60, height: 60 },
];

export default function SocialProofBar() {
  const items = logos.map((logo) => (
    <div
      key={logo.alt}
      className="flex h-14 shrink-0 items-center px-8"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-10 w-auto max-w-[160px] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  ));

  return (
    <section className="border-y border-brand-gray-200 bg-brand-gray-100 py-6 overflow-hidden">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[2px] text-brand-gray-400">
        Featured In &amp; Trusted By
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-gray-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-gray-100 to-transparent" />

        {/* Scrolling track: duplicate items for seamless loop */}
        <div className="logo-scroll flex w-max items-center">
          {items}
          {items}
        </div>
      </div>
    </section>
  );
}
