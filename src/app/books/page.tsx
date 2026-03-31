import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import books from "@/data/books.json";

export const metadata = {
  title: "Books by Mike Abramowitz | GRAB Tomorrow Series",
  description:
    "The GRAB Tomorrow series and the T.A.D. (Tiny Actions Daily) philosophy. Books on personal development, consistency, and building your best year.",
};

interface Book {
  title: string;
  description: string;
  coverImage: string;
  purchaseUrl: string;
}

export default function BooksPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <h1 className="font-heading text-[46px] leading-tight text-brand-dark">
              Books.
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              The GRAB Tomorrow series and the T.A.D. (Tiny Actions Daily)
              philosophy that runs through everything I do.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Books Grid ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {(books as Book[]).map((book) => (
                <div
                  key={book.title}
                  className="overflow-hidden rounded-lg border border-brand-gray-200 bg-white"
                >
                  {/* Replace with book cover image */}
                  <div className="flex aspect-[2/3] w-full items-center justify-center bg-brand-gray-100">
                    <div className="flex flex-col items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-brand-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                      <span className="text-sm text-brand-gray-400">
                        Cover Image
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-heading text-xl text-brand-dark">
                      {book.title}
                    </h2>
                    <p className="mb-4 mt-2 text-[15px] leading-relaxed text-brand-gray-600">
                      {book.description}
                    </p>
                    {book.purchaseUrl ? (
                      <Link
                        href={book.purchaseUrl}
                        className="inline-block rounded-md bg-brand-blue px-6 py-2.5 text-sm text-white transition-opacity hover:opacity-90"
                      >
                        Get the Book
                      </Link>
                    ) : (
                      <span className="text-sm text-brand-gray-400">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Philosophy Section ── */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <h2 className="font-heading text-[28px] leading-snug text-brand-dark">
              The T.A.D. Philosophy
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-gray-600">
              T.A.D. stands for Tiny Actions Daily. It is not a book. It is a
              philosophy that originated inside the GRAB Tomorrow series and has
              become a core principle in everything I do and teach. The idea is
              simple: small, consistent actions compound into massive results
              over time. Whether you are building a business, rebuilding your
              health, or showing up for your family, it starts with what you do
              today.
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
