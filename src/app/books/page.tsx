import FadeUp from "@/components/FadeUp";
import Image from "next/image";
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
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(books as Book[]).map((book) => (
                <div
                  key={book.title}
                  className="overflow-hidden rounded-lg border border-brand-gray-200 bg-white"
                >
                  {book.coverImage ? (
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      width={400}
                      height={600}
                      className="w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[2/3] w-full items-center justify-center bg-brand-gray-100">
                      <span className="text-sm text-brand-gray-400">
                        Cover Image
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <h2 className="font-heading text-lg text-brand-dark">
                      {book.title}
                    </h2>
                    <p className="mb-4 mt-2 text-[14px] leading-relaxed text-brand-gray-600">
                      {book.description}
                    </p>
                    {book.purchaseUrl ? (
                      <Link
                        href={book.purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
