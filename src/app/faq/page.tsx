"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Footer from "../components/Footer";
import useLenis from "../lib/useLenis";

export default function FranchisePage() {
  useLenis({ lerp: 0.07 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((s) => !s);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const answerRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const faqs = [
    {
      q: "What is FitMonk's trial policy?",
      a: "You can sign up for a one-time free trial session at any branch. Book via the trial form and we will confirm your slot.",
    },
    {
      q: "Do you provide personalized training?",
      a: "Yes — our certified trainers design personalised programs based on your goals, experience level and any physical constraints.",
    },
    {
      q: "What are the membership durations available?",
      a: "We offer monthly, quarterly and annual plans with flexible add-ons. Contact the branch for current pricing and offers.",
    },
    {
      q: "Can I switch branches?",
      a: "Yes — members can request a branch transfer through the app or by speaking to reception at your current branch.",
    },
    {
      q: "Can beginners join Fitmonk?",
      a: "Yes, we welcome beginners and provide tailored programs to help you start your fitness journey safely and effectively.",
    },
    {
      q: "How do I track my progress at Fitmonk?",
      a: "Our trainers regularly monitor your form, strength, endurance, and overall progress. We also provide goal-based programs for weight loss, muscle gain, or general fitness.",
    },
    {
      q: "What should I bring to the gym?",
      a: "Carry your earphone/headphone, a towel, water bottle, and appropriate workout attire and footwear.",
    },
    {
      q: "Is there a refund or membership freeze policy?",
      a: "Yes, we offer membership freeze options and refunds under certain conditions. Please refer to our policy page or contact your branch for details.",
    },
    {
      q: "Do you maintain hygiene & cleanliness?",
      a: "Yes, we maintain high standards of hygiene and cleanliness across all our branches. Regular cleaning and sanitization protocols are followed to ensure a safe environment for our members.",
    },
    {
      q: "Can I upgrade my membership later?",
      a: "Yes, you can upgrade at any time by paying the difference in the membership amount.",
    },
    {
      q: "What equipments are available at Fitmonk?",
      a: "We have a wide range of modern equipment including free weights, resistance machines, cardio machines, and functional training tools to support all fitness levels and goals.",
    },
  ];

  const toggleFAQ = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

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
              <Link href="/careers" className="nav-link text-white oswald">Careers</Link>
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
            <Link href="/careers" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">Careers</Link>
            <Link href="/franchise" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">Franchise</Link>
            <Link href="/faq" className="text-white josefin py-2 px-2 rounded hover:bg-white/5">FAQ</Link>
          </div>
        </div>
      </nav>

      <section className="w-full min-h-screen flex items-start bg-black text-white relative">
        <div className="hidden md:block absolute left-12 top-70 transform -translate-y-1/2">
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed">FAQs</h1>
        </div>

        <div className="md:hidden absolute left-4 top-38 text-left z-10">
          <h1 className="text-4xl font-extrabold roboto-condensed">FAQs</h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 w-full z-10 pt-30">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-1/2 ">
            </div>
            <div className="w-full md:w-1/2 space-y-4 mt-20">
              {faqs.map((f, i) => {
                const open = openIndex === i;
                return (
                  <div key={i} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(i)}
                      aria-expanded={open}
                      className="w-full px-5 py-4 flex items-start justify-between gap-4"
                    >
                      <div className="text-left">
                        <div className="font-semibold oswald text-white">{f.q}</div>
                      </div>
                      <div className="shrink-0">
                        {!open ? (
                          <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M5 12h14" />
                          </svg>
                        )}
                      </div>
                    </button>

                    <div
                      ref={(el) => { answerRefs.current[i] = el; }}
                      className="px-5 overflow-hidden oswald text-white/80"
                      style={{
                        maxHeight: open ? `${answerRefs.current[i]?.scrollHeight ?? 0}px` : "0px",
                        transition: "max-height 300ms ease",
                      }}
                      aria-hidden={!open}
                    >
                      <div className="pt-3 pb-4">{f.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
