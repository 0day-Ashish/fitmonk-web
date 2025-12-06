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

  const jobs = [
    {
      id: 1,
      title: "Personal Trainer (Full-time)",
      location: "Chinar Park",
      type: "Full-time",
      desc: "Looking for a certified PT with 2+ years experience in strength & conditioning to lead small group sessions.",
      apply: "mailto:hr@fitmonk.com?subject=Apply%20Personal%20Trainer",
    },
    {
      id: 2,
      title: "Front Desk Executive",
      location: "VIP Road",
      type: "Part-time",
      desc: "Customer-facing role to manage memberships, calls and bookings. Friendly attitude required.",
      apply: "mailto:hr@fitmonk.com?subject=Apply%20Front%20Desk%20Executive",
    },
    {
      id: 3,
      title: "Sales & Membership Manager",
      location: "Any Branch",
      type: "Full-time",
      desc: "Drive walk-in conversions and manage corporate tie-ups. Strong communication & CRM experience preferred.",
      apply: "mailto:hr@fitmonk.com?subject=Apply%20Sales%20Manager",
    },
  ];

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
              <Link href="/career" className="nav-link text-white oswald">Careers</Link>
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
            <Link href="/career" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">Careers</Link>
            <Link href="/franchise" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">Franchise</Link>
            <Link href="/faq" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">FAQ</Link>
          </div>
        </div>
      </nav>

      <section className="w-full min-h-screen flex items-start bg-black text-white relative">
        <div className="hidden md:block absolute left-12 top-77 transform -translate-y-1/2">
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed">CAREERS</h1>
          <div className="mt-6 max-w-md">
            <p className="text-white/80 oswald text-sm">
              To apply, click on the Apply button and send us the following items :
            </p>
            <ol className="list-decimal list-inside text-white/70 oswald text-sm mt-2 space-y-1">
              <li>Resume (Attach Your CV/Resume)</li>
              <li>Why do you want to join FitMonk?</li>
              <li>Where do you live currently?</li>
              <li>Which position are you applying for?</li>
            </ol>
          </div>
        </div>

        <div className="md:hidden absolute left-4 top-38 text-left z-10">
          <h1 className="text-4xl font-extrabold roboto-condensed">CAREERS</h1>
          <div className="mt-3 max-w-xs">
            <p className="text-white/80 oswald text-sm">
              To apply, click on the Apply button and send us the following items :
            </p>
            <ol className="list-decimal list-inside text-white/70 oswald text-sm mt-2 space-y-1">
              <li>Resume (Attach Your CV/Resume)</li>
              <li>Why do you want to join FitMonk?</li>
              <li>Where do you live currently?</li>
              <li>Which position are you applying for?</li>
            </ol>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 w-full z-10 pt-50">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-semibold mb-2 oswald">Current Openings</h3>
              {jobs.map((job) => (
                <div key={job.id} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg font-semibold oswald text-white">{job.title}</div>
                      <div className="text-sm text-white/70 mt-1">{job.location} • {job.type}</div>
                    </div>
                    <a
                      href={job.apply}
                      className="ml-4 inline-flex items-center gap-2 px-3 py-2 bg-white text-black rounded-md text-sm font-medium"
                    >
                      Apply
                    </a>
                  </div>
                  <p className="mt-3 text-white/80 text-sm">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
