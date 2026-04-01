"use client";

import { useEffect, useRef } from "react";

interface JotFormEmbedProps {
  formId: string;
  title?: string;
}

export default function JotFormEmbed({ formId, title = "Contact Form" }: JotFormEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      const iframe = iframeRef.current;
      if (!iframe) return;

      const args = e.data.split(":");
      if (args[0] === "setHeight" && args.length > 2) {
        const h = parseInt(args[1], 10);
        if (!isNaN(h)) iframe.style.height = `${h}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id={`JotFormIFrame-${formId}`}
      title={title}
      src={`https://form.jotform.com/${formId}`}
      className="w-full border-0"
      style={{ minHeight: 600 }}
      allow="geolocation; microphone; camera; fullscreen"
      scrolling="no"
    />
  );
}
