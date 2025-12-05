"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import useLenis from "../lib/useLenis";

export default function FranchisePage() {
  useLenis({ lerp: 0.07 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <nav className="fixed top-16 left-1/2 z-40 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl">
        <div className="rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-9 sm:px-6 h-16">
            <Link href="/" className="flex items-center">
              <Image src="/favicon.png" alt="FitMonk" width={40} height={40} className="rounded-md" />
            </Link>

            <div className="hidden md:flex items-center gap-14 tracking-widest">
              <Link href="/trial" className="nav-link text-white oswald">Trial</Link>
              <Link href="/careers" className="nav-link text-white oswald">Career</Link>
              <Link href="/franchise" className="nav-link text-white oswald">Franchise</Link>
              <Link href="/faq" className="nav-link text-white oswald">FAQ</Link>
            </div>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              onClick={toggleMobile}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition"
            >
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          <div className={`md:hidden px-4 pb-4 ${mobileOpen ? "flex" : "hidden"} flex-col gap-3`}>
            <Link href="/trial" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">Trial</Link>
            <Link href="/careers" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">Career</Link>
            <Link href="/franchise" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">Franchise</Link>
            <Link href="/faq" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">FAQ</Link>
          </div>
        </div>
      </nav>

      <section className="w-full min-h-screen flex items-start bg-black text-white relative">
        <div className="hidden md:block absolute left-12 top-80 transform -translate-y-1/2">
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed">PRIVACY</h1>
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed -mt-2">POLICY</h1>
          
        </div>

        <div className="md:hidden absolute left-4 top-38 text-left z-10">
          <h1 className="text-4xl font-extrabold roboto-condensed">PRIVACY</h1>
          <h1 className="text-4xl font-extrabold roboto-condensed -mt-2">POLICY</h1>
          
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 w-full z-10 pt-50">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2"></div>
            <div className="w-full md:w-1/2">
              <div className=" p-6 md:p-8 oswald text-white/90 text-lg max-h-full overflow-auto space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">1. Personal Information Collection</h3>
                  <p>Fitmonk collects basic personal details such as name, phone number, email, age, and fitness-related information for membership registration and service delivery.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2. Purpose of Data Use</h3>
                  <p>Information is used solely for communication, membership management, fitness guidance, and improving member experience.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3. Financial Data Security</h3>
                  <p>Any payment-related information is processed securely through trusted payment partners and is not stored or shared by Fitmonk.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4. Usage Data</h3>
                  <p>We may record check-in history, attendance, and activity logs to enhance training programs and service quality.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">5. Data Sharing Policy</h3>
                  <p>Fitmonk does not sell, rent, or share personal information with third parties, except when required by law or for essential operational services (e.g., SMS or payment processing providers).</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">6. Data Protection</h3>
                  <p>All personal information is stored securely and accessed only by authorized staff members.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">7. Member Rights</h3>
                  <p>Members may request updates, corrections, or removal of their personal information at any time.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">8. Photos &amp; Videos</h3>
                  <p>General gym photos or videos may be used for promotions only with proper consent from members. No personal images will be shared without permission.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">9. Policy Updates</h3>
                  <p>Fitmonk may update this privacy policy from time to time, and continued use of services implies acceptance of the updated terms.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">10. Contact for Queries</h3>
                  <p>Members can reach out to the Fitmonk management for any questions or concerns regarding privacy or data usage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
