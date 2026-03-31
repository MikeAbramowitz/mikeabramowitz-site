"use client";

import { useState, useMemo } from "react";

interface PodcastEntry {
  date: string;
  podcast: string;
  host: string;
  title: string;
  url: string;
  tag: string;
}

const TAGS = ["All", "Business", "Referrals", "Personal Development", "Story"];

export default function PodcastGrid({ podcasts }: { podcasts: PodcastEntry[] }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return podcasts
      .filter((p) => {
        const matchesTag =
          activeTag === "All" ||
          p.tag.toLowerCase() === activeTag.toLowerCase();
        const matchesSearch =
          !q ||
          p.podcast.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.host.toLowerCase().includes(q);
        return matchesTag && matchesSearch;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [podcasts, search, activeTag]);

  const formatDate = (dateStr: string) => {
    // Handle partial dates like "2022-06" or "2022-01"
    const parts = dateStr.split("-");
    if (parts.length === 2) {
      const d = new Date(`${parts[0]}-${parts[1]}-01T00:00:00`);
      return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
    }
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const tagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "business":
        return "bg-brand-blue-light text-brand-blue";
      case "referrals":
        return "bg-brand-gold-light text-brand-gold";
      case "personal development":
        return "bg-green-50 text-green-700";
      case "story":
        return "bg-rose-50 text-rose-700";
      default:
        return "bg-brand-gray-100 text-brand-gray-600";
    }
  };

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by podcast name, episode title, or topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-brand-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue"
        />
      </div>

      {/* Tag filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
              activeTag === tag
                ? "bg-brand-blue text-white"
                : "bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="mb-6 text-sm text-brand-gray-400">
        Showing {filtered.length} of {podcasts.length} appearances
      </p>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <div
            key={`${p.date}-${p.podcast}-${i}`}
            className="rounded-lg border border-brand-gray-200 bg-brand-white p-6 transition-shadow duration-200 hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-sm font-bold text-brand-dark leading-snug">
                {p.podcast}
              </h3>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize ${tagColor(
                  p.tag
                )}`}
              >
                {p.tag}
              </span>
            </div>
            <p className="mb-3 text-[14px] leading-snug text-brand-gray-600">
              {p.title}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-brand-gray-400">
                {formatDate(p.date)}
              </span>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                >
                  Listen
                </a>
              ) : (
                <span className="text-[12px] text-brand-gray-400">
                  Link coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-brand-gray-400">
          No episodes match your search.
        </p>
      )}
    </div>
  );
}
