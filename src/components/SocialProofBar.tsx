import Image from "next/image";

const logos = [
  { src: "/logos/cbs.svg", alt: "CBS", width: 80, height: 40 },
  { src: "/logos/coo-alliance.png", alt: "COO Alliance", width: 160, height: 40 },
  { src: "/logos/front-row-dads.png", alt: "Front Row Dads", width: 120, height: 50 },
  { src: "/logos/gobundance.png", alt: "GoBundance", width: 140, height: 40 },
  { src: "/logos/aolp.png", alt: "AOLP", width: 120, height: 50 },
  { src: "/logos/gracie-barra.svg", alt: "Gracie Barra", width: 50, height: 50 },
  { src: "/logos/nsls.png", alt: "NSLS", width: 160, height: 46 },
  { src: "/logos/fbla.svg", alt: "FBLA", width: 60, height: 50 },
  { src: "/logos/spc.png", alt: "Saint Petersburg College", width: 140, height: 36 },
];

const textLogos = [
  "USF",
  "Vector Marketing",
  "YellowTelescope",
  "The Brotherhood",
];

export default function SocialProofBar() {
  const allItems = [
    ...logos.map((logo) => (
      <div
        key={logo.alt}
        className="flex h-12 shrink-0 items-center px-8"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-8 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
      </div>
    )),
    ...textLogos.map((name) => (
      <div
        key={name}
        className="flex h-12 shrink-0 items-center px-8"
      >
        <span className="whitespace-nowrap text-[14px] font-bold uppercase tracking-wider text-brand-gray-400 transition-colors duration-300 hover:text-brand-dark">
          {name}
        </span>
      </div>
    )),
  ];

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
          {allItems}
          {allItems}
        </div>
      </div>
    </section>
  );
}
