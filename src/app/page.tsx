"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import useLenis from "./lib/useLenis";
import Footer from "./components/Footer";

export default function Home() {
  useLenis({ lerp: 0.07 });

  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((s) => !s);
  const branchesRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(min-width: 768px)");
      if (!mq.matches) return;
    } else {
      return;
    }

    let st: any = null;
    async function setupPin() {
      if (!branchesRef.current || !headingRef.current) return;
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;
      gsap.registerPlugin(ScrollTrigger);

      st = ScrollTrigger.create({
        trigger: branchesRef.current,
        start: "top top+=100",
        end: "bottom top+=100",
        pin: headingRef.current,
        pinSpacing: true,
      });
    }
    setupPin();
    return () => {
      if (st) st.kill && st.kill();
    };
  }, []);

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (delta < 0) setVisible(false);
      else if (delta > 0) setVisible(true);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 ">
      <div className={`fixed top-0 inset-x-0 z-50 notice-bar ${visible ? "" : "notice-hidden"}`}>
        <div className="overflow-hidden">
          <div className="marquee py-2 text-sm font-medium roboto-condensed">
            New Year Discount — Get 20% off all membership plans at FitMonk! Offer valid until Jan 31. Join now and start stronger.
          </div>
        </div>
      </div>
      <nav className="fixed top-16 left-1/2 z-40 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl">
        <div className="rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-9 sm:px-6 h-16">
            <Link href="/" className="flex items-center">
              <Image src="/favicon.png" alt="FitMonk" width={40} height={40} className="rounded-md" />
            </Link>
            <div className="hidden md:flex items-center gap-14 tracking-widest">
              <Link href="/trial" className="nav-link text-white oswald">
                Trial
              </Link>
              <Link href="/careers" className="nav-link text-white oswald">
                Careers
              </Link>
              <Link href="/franchise" className="nav-link text-white oswald">
                Franchise
              </Link>
              <Link href="/faq" className="nav-link text-white oswald">
                FAQ
              </Link>
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
            <Link href="/trial" className="text-white josefin py-2 px-2 rounded ">Trial</Link>
            <Link href="/careers" className="text-white josefin py-2 px-2 rounded ">Careers</Link>
            <Link href="/franchise" className="text-white josefin py-2 px-2 rounded ">Franchise</Link>
            <Link href="/faq" className="text-white josefin py-2 px-2 rounded ">FAQ</Link>
          </div>
        </div>
      </nav>
      <section
        className="w-full h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden pointers-events-none"
        style={{ backgroundImage: "url('/bg.webp')", backgroundRepeat: "no-repeat" }}
      >
        <div className="flex flex-col items-center justify-center gap-10 mt-10">
          <div className="w-20 md:w-54 lg:w-50">
            <Image
              src="/me.png"
              alt="Model phone preview"
              width={720}
              height={1280}
              className="w-full h-auto pointers-event-none"
            />
          </div>
          <div className="flex justify-center gap-4 oswald">
            <Link href="/trial" className="btn btn-primary bg-white text-black px-6 py-2 rounded-md font-medium">
              Try Us
            </Link>
            <Link href="/about" className="btn btn-outline text-white px-6 py-2 rounded-md">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-black text-white py-16 pt-40 pb-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="w-full lg:w-1/2">
              <video
                src="/fitmonkvid.mp4"
                className="w-full rounded-lg shadow-md"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1 className="text-6xl lg:text-9xl font-extrabold roboto-condensed">WHY</h1>
              <h1 className="text-6xl lg:text-9xl font-extrabold mb-3 roboto-condensed">FITMONK?</h1>
              <p className="text-white/90 mt-20 oswald mb-5">
               Fitmonk is one of the best gyms in the locality, known for its highly trained professionals, personalized guidance, and a friendly, motivating environment. Whether you're a beginner or an experienced lifter, Fitmonk ensures you get the support, structure, and consistency you need to reach your fitness goals. With expert-led sessions, modern equipment, and a community-driven atmosphere, Fitmonk makes fitness not just effective, but enjoyable.
              </p>
              <p className="text-white/90 oswald">
               It was created with a simple mission: to make fitness accessible, sustainable, and exciting for everyone. We believe that true progress happens when expert training meets a welcoming community and that&apos;s exactly what we offer. Our certified trainers design tailored programs, track your progress, and help you build long-term habits that transform your lifestyle. At Fitmonk, you&apos;re not just joining a gym; you&apos;re joining a supportive family committed to helping you become the strongest version of yourself.
              </p>
              <p className="text-white/90 mt-4 oswald">
                Join a community of people building sustainable routines and get
                tools that make staying fit simple and enjoyable !
              </p>
              <div className="mt-6">
                <DotLottieReact
                  src="https://lottie.host/54a2b077-6075-4538-92b2-08d71dc1fbe4/FK3ROkvAUH.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black text-white py-20 pt-50 pb-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col items-left justify-center lg:justify-start space-y-0">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-extrabold roboto-condensed leading-none">
              MEET
            </h2>
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-extrabold roboto-condensed leading-none -mt-2">
              THE
            </h2>
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-extrabold roboto-condensed leading-none -mt-2">
              FOUNDER
            </h2>
          </div>

          {/* profile image + caption */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
             <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl">
               <Image
                 src="/gauravbro.webp"
                 alt="Gaurav Bro — Founder & CEO"
                 width={720}
                 height={720}
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="mt-4 text-lg font-semibold oswald text-center">Gaurav Sharma</div>
            <div className="mt-4 text-lg font-semibold oswald text-center">Founder &amp; CEO</div>

           <div className="flex items-center gap-3 mt-3">
             <a href="https://www.instagram.com/the.lifter.lad__/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 text-white/80 hover:bg-white/6">
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                 <circle cx="17.5" cy="6.5" r="0.5" />
               </svg>
             </a>
             <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 text-white/80 hover:bg-white/6">
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                 <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.84v2.07h.05c.54-1.02 1.86-2.07 3.84-2.07C20.9 8.5 22 10.57 22 14.13V24h-4v-8.1c0-1.93-.03-4.42-2.7-4.42-2.7 0-3.11 2.1-3.11 4.27V24h-4V8.5z" />
               </svg>
             </a>
             
             <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 text-white/80 hover:bg-white/6">
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                 <path d="M23.5 6.2a2.8 2.8 0 0 0-1.96-1.98C19.62 4 12 4 12 4s-7.62 0-9.54.22A2.8 2.8 0 0 0 .5 6.2 29 29 0 0 0 0 12a29 29 0 0 0 .5 5.8 2.8 2.8 0 0 0 1.96 1.98C4.38 20 12 20 12 20s7.62 0 9.54-.22a2.8 2.8 0 0 0 1.96-1.98A29 29 0 0 0 24 12a29 29 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
               </svg>
             </a>
           </div>
           </div>
         </div>
       </section>

      {/* Branches section */}
      <section ref={branchesRef} className="w-full bg-black text-white py-16 pt-50 pb-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
          <div ref={headingRef} className="w-full lg:w-1/2 flex flex-col items-left justify-center lg:justify-start space-y-0">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-extrabold roboto-condensed leading-none">
              OUR
            </h2>
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-extrabold roboto-condensed leading-none -mt-2">
              BRANCHES
            </h2>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="oswald text-white/90 mb-6">Our locations across the country — visit any of our branches:</p>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/chinarpark.webp"
                    alt="Chinar Park branch"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 font-semibold oswald">Chinar Park Branch, Meena Tower, Kol-700059</div>
                <div className="mt-5 mb-15 flex gap-10">
                  <Link
                    href={`https://www.google.com/maps/place/The+Fit+Monk/@22.622779,88.439135,17z/data=!3m2!4b1!5s0x39f89fd2950e4ecf:0xd780e5160eedd3d6!4m6!3m5!1s0x39f89f3a3f7b6ef5:0xa8f585973cd597fe!8m2!3d22.622779!4d88.4417099!16s%2Fg%2F11wnzsqt1n!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-black bg-white px-4 py-2 rounded-md oswald"
                  >
                    Get Directions
                  </Link>
                  <Link
                    href={`https://www.google.com/maps/place/The+Fit+Monk/@22.622779,88.439135,17z/data=!3m2!4b1!5s0x39f89fd2950e4ecf:0xd780e5160eedd3d6!4m6!3m5!1s0x39f89f3a3f7b6ef5:0xa8f585973cd597fe!8m2!3d22.622779!4d88.4417099!16s%2Fg%2F11wnzsqt1n!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-black bg-white px-4 py-2 rounded-md oswald"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/viproad.webp"
                    alt="VIP Road branch"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 font-semibold oswald">VIP Road Branch, Baguiati, West Bengal-700059</div>
                <div className="mt-5 flex gap-10">
                  <Link
                    href={`https://www.google.com/maps/place/The+Fit+Monk/@22.6210528,88.4293808,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89f5d74f30623:0xc2fd2f98baeeaec6!8m2!3d22.6210528!4d88.4319557!16s%2Fg%2F11kqrkl_5s!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-black bg-white px-4 py-2 rounded-md oswald"
                  >
                    Get Directions
                  </Link>
                  <Link
                    href={`https://www.google.com/maps/place/The+Fit+Monk/@22.6210528,88.4293808,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89f5d74f30623:0xc2fd2f98baeeaec6!8m2!3d22.6210528!4d88.4319557!16s%2Fg%2F11kqrkl_5s!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-black bg-white px-4 py-2 rounded-md oswald"
                  >
                    Contact
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews section */}
      <section className="w-full bg-black text-white py-20 pb-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-left space-y-0">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-extrabold roboto-condensed leading-none">REVIEWS</h2>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg oswald">
              <p className="text-white/90">"FitMonk helped me build consistent habits — trainers are supportive and the sessions are effective."</p>
              <div className="mt-4 font-semibold">— Priya</div>
            </div>

            <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg oswald">
              <p className="text-white/90">"Great environment and personalized coaching. My strength improved in weeks."</p>
              <div className="mt-4 font-semibold">— Rohit</div>
            </div>

            <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg oswald">
              <p className="text-white/90">"Clean facilities and motivating trainers. Highly recommend FitMonk."</p>
              <div className="mt-4 font-semibold">— Ayesha</div>
            </div>

            <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg oswald">
              <p className="text-white/90">"Flexible timings and excellent community — perfect for busy schedules."</p>
              <div className="mt-4 font-semibold">— Karan</div>
            </div>
            <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg oswald">
              <p className="text-white/90">"Flexible timings and excellent community — perfect for busy schedules."</p>
              <div className="mt-4 font-semibold">— Karan</div>
            </div>
            <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg oswald">
              <p className="text-white/90">"Flexible timings and excellent community — perfect for busy schedules."</p>
              <div className="mt-4 font-semibold">— Karan</div>
            </div>
          </div>
        </div>
      </section>
     <Footer />
   </main>
  );
} 
