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
        <div className="hidden md:block absolute left-12 top-55 z-10">
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed">TERMS</h1>
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed -mt-2">&</h1>
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed -mt-2">CONDITIONS</h1>
        </div>

        <div className="md:hidden absolute left-4 top-36 text-left z-10">
          <h1 className="text-4xl font-extrabold roboto-condensed">TERMS</h1>
          <h1 className="text-4xl font-extrabold roboto-condensed -mt-2">&</h1>
          <h1 className="text-4xl font-extrabold roboto-condensed -mt-2">CONDITIONS</h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 w-full z-10 pt-50">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2"></div>
            <div className="w-full md:w-1/2">
              <div className="mt-5 p-6 md:p-8 rounded-xl shadow-lg oswald text-white/90 text-lg max-h-[1000vh] overflow-auto space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">1. Membership &amp; Access</h3>
                  <p>Membership is non-transferable and valid only for the registered member. Members must present their ID or membership details when entering the gym. Fitmonk reserves the right to deny entry to anyone violating gym policies.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2. Fees &amp; Payment</h3>
                  <p>Membership fees must be paid in advance as per the selected plan. All payments made are non-refundable, unless stated otherwise in promotional offers. Membership freeze or extension is allowed only in genuine medical or emergency cases with valid proof.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3. Health &amp; Safety</h3>
                  <p>Members must ensure they are medically fit before joining the gym. Fitmonk is not responsible for any injuries, health issues, or accidents occurring due to improper usage of equipment or negligence. Members should immediately report any damaged equipment or safety hazard to the staff.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4. Personal Belongings</h3>
                  <p>Members are responsible for their own belongings. Fitmonk is not liable for loss, theft, or damage to any personal items kept inside the gym.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">5. Proper Conduct &amp; Behaviour</h3>
                  <p>Members must maintain decorum and behave respectfully with trainers, staff, and fellow members. Misuse of equipment, inappropriate behavior, or harassment will lead to immediate termination of membership. Clean gym attire and shoes are mandatory.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">6. Use of Equipment</h3>
                  <p>Follow trainer instructions while using machines and weights. Return weights and equipment to their designated place after use. Do not drop weights unnecessarily or damage gym property.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">7. Hygiene &amp; Cleanliness</h3>
                  <p>Members must wipe equipment after use and maintain personal hygiene. Use of towel is mandatory. Do not litter in the gym premises.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">8. Photography &amp; Video</h3>
                  <p>Photography or videography inside the gym is not permitted without prior approval. Fitmonk may use general gym photos for promotional purposes; no personal images will be used without consent.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">9. Personal Training</h3>
                  <p>Personal Training sessions must be purchased separately. PT sessions are valid only within the specified period and cannot be transferred.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">10. Timings &amp; Holidays</h3>
                  <p>Gym timings may change during festivals, maintenance, or special circumstances. Fitmonk reserves the right to close the facility temporarily for repairs or upgrades.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">11. Privacy Policy</h3>
                  <p>Any personal information provided by members will be kept confidential and used only for gym-related communication. Fitmonk does not share member data with third parties.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">12. Acceptance of Terms</h3>
                  <p>By registering at Fitmonk, members agree to abide by the above Terms &amp; Conditions and any updates issued by the management.</p>
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
