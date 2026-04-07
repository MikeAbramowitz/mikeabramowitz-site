import { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Privacy Policy | Mike Abramowitz",
  description:
    "Privacy policy for mikeabramowitz.com. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <FadeUp>
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-heading text-[46px] leading-tight text-brand-dark">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-brand-gray-400">
              Last updated: April 7, 2026
            </p>

            <div className="mt-12 space-y-10 text-[17px] leading-relaxed text-brand-gray-600">
              <div>
                <h2 className="font-heading text-[22px] text-brand-dark">
                  Overview
                </h2>
                <p className="mt-3">
                  This website, mikeabramowitz.com, is owned and operated by Mike
                  Abramowitz. This policy explains what information is collected
                  when you visit the site and how it is used.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[22px] text-brand-dark">
                  Information collected
                </h2>
                <p className="mt-3">
                  When you fill out a contact or speaking inquiry form on this
                  site, you may provide your name, email address, phone number,
                  and message. This information is collected through JotForm, a
                  third-party form provider, and is sent directly to Mike
                  Abramowitz for the purpose of responding to your inquiry.
                </p>
                <p className="mt-3">
                  When you book a session through the scheduling tool on this
                  site, your information is collected by OneCal, a third-party
                  scheduling provider, and is used solely to coordinate the
                  meeting.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[22px] text-brand-dark">
                  Cookies and third-party services
                </h2>
                <p className="mt-3">
                  This site embeds YouTube videos, which may set cookies on your
                  browser to track viewing preferences and provide analytics to
                  YouTube (owned by Google). This site does not set its own
                  tracking cookies or use any first-party analytics tools.
                </p>
                <p className="mt-3">
                  The site is hosted on Vercel. Vercel may collect standard
                  server log information such as your IP address, browser type,
                  and pages visited for operational purposes.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[22px] text-brand-dark">
                  How your information is used
                </h2>
                <p className="mt-3">
                  Any information you submit through forms on this site is used
                  to respond to your inquiry, schedule a meeting, or follow up
                  on a conversation. Your information is never sold to third
                  parties. It may be shared only with service providers
                  (JotForm, OneCal) as described above in order to facilitate
                  your request.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[22px] text-brand-dark">
                  Your rights
                </h2>
                <p className="mt-3">
                  If you would like to request that your personal information be
                  deleted or if you have questions about this policy, you can
                  reach out at{" "}
                  <a
                    href="mailto:mike@mikeabramowitz.com"
                    className="text-brand-blue hover:text-brand-blue-dark"
                  >
                    mike@mikeabramowitz.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[22px] text-brand-dark">
                  Changes to this policy
                </h2>
                <p className="mt-3">
                  This policy may be updated from time to time. Any changes will
                  be posted on this page with an updated date.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}
