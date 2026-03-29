import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function Impressum() {
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
              Imprint.
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <Reveal delay={0.1}>
              <section className="space-y-8">
                <div>
                  <h2 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Angaben gemäß § 5 TMG</h2>
                  <p className="text-xl md:text-2xl font-light leading-relaxed">
                    {CONTACT.company}<br />
                    {CONTACT.address.street}<br />
                    {CONTACT.address.zip} {CONTACT.address.city}
                  </p>
                </div>

                <div>
                  <h2 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Kontakt</h2>
                  <p className="text-xl md:text-2xl font-light leading-relaxed">
                    E-Mail: {CONTACT.email}<br />
                    Telefon: {CONTACT.phone}
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.2}>
              <section className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Verantwortlich für den Inhalt</h2>
                  <p className="text-base text-white/50 leading-relaxed font-light">
                    {CONTACT.company}<br />
                    Maximilian Fritsch<br />
                    {CONTACT.address.street}<br />
                    {CONTACT.address.zip} {CONTACT.address.city}
                  </p>
                </div>

                <div className="prose prose-invert prose-sm opacity-40 font-light leading-relaxed space-y-6">
                  <p>
                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
                    externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
                    verantwortlich.
                  </p>
                  <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                    dem deutschen Urheberrecht. Jede Art der Verwertung bedürfen der schriftlichen
                    Zustimmung von {SITE_NAME}.
                  </p>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Reveal } from "@/components/Reveal";
