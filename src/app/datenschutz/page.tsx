import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen bg-[#013DA6] text-white font-sans">
      <Navbar />
      <main className="flex-1 pt-48 pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Link
              href="/"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors mb-12 inline-block border-b border-white/10 pb-1"
            >
              &larr; Return to Home
            </Link>
            <h1 className="font-display text-5xl md:text-8xl leading-[0.85] mb-20 tracking-tighter">
              Privacy.
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            <div className="md:col-span-4">
              <Reveal delay={0.1}>
                <p className="text-white/30 text-lg font-light leading-relaxed">
                  We value your privacy and transparency in everything we do.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-8">
              <Reveal delay={0.2}>
                <div className="prose prose-invert prose-sm max-w-none space-y-12 opacity-60 font-light leading-relaxed">
                  <section>
                    <h2 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">1. Datenschutz auf einen Blick</h2>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                      personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">2. Verantwortliche Stelle</h2>
                    <p>
                      {CONTACT.company}<br />
                      {CONTACT.address.street}<br />
                      {CONTACT.address.zip} {CONTACT.address.city}<br />
                      E-Mail: {CONTACT.email}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">3. Datenerfassung</h2>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen
                      (z.B. per E-Mail). Andere Daten werden automatisch beim Besuch der Website
                      durch unsere IT-Systeme erfasst (z.B. Browser, Betriebssystem, Uhrzeit des
                      Seitenaufrufs).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">4. Cookies & Analysis</h2>
                    <p>
                      Diese Website verwendet funktionale Cookies, um die Benutzererfahrung zu verbessern. 
                      Tracking-Technologien von Drittanbietern werden nur nach Ihrer expliziten Zustimmung aktiviert.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">5. Ihre Rechte</h2>
                    <p>
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                      Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                      ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                    </p>
                  </section>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
