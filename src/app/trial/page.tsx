"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import  useLenis  from "../lib/useLenis";

export default function TrialPage() {
  useLenis({ lerp: 0.07 });
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((s) => !s);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trial form submitted", formData);
    // TODO: send to API / show success message
  };
  
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

      <section className="w-full min-h-screen flex items-start justify-start bg-black text-white relative">
        <div className="hidden md:block absolute left-12 top-80 transform -translate-y-1/2">
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed">TRY</h1>
          <h1 className="text-9xl font-extrabold leading-none roboto-condensed -mt-4">FITMONK</h1>
          <div className="mt-6 max-w-md">
            <p className="text-white/80 oswald text-sm">
              Try our facilities for free! Fill out the form to get started.
          </p>
            </div>
        </div>

        <div className="md:hidden absolute left-4 top-38 text-left z-10">
          <h2 className="text-4xl font-extrabold roboto-condensed">TRY</h2>
          <h2 className="text-4xl font-extrabold roboto-condensed -mt-2">FITMONK</h2>
           <div className="mt-3 max-w-xs">
            <p className="text-white/80 oswald text-sm">
              Try our facilities for free! Fill out the form to get started.
            </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 z-10 w-full pt-60">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="w-full md:w-1/2"></div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#0b0b0b] p-6 rounded-xl shadow-lg">
                <label className="block text-sm font-medium mb-2 oswald">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mb-4 px-3 py-2 rounded bg-white/5 text-white outline-none border border-white/10"
                />

                <label className="block text-sm font-medium mb-2 oswald">Phone No.</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  className="w-full mb-4 px-3 py-2 rounded bg-white/5 text-white outline-none border border-white/10"
                />

                <label className="block text-sm font-medium mb-2 oswald">Email (optional)</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full mb-4 px-3 py-2 rounded bg-white/5 text-white outline-none border border-white/10"
                />

                <label className="block text-sm font-medium mb-2 oswald">Branch</label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full mb-6 px-3 py-2 rounded bg-white/5 text-white outline-none border border-white/10"
                >
                  <option value="" disabled>
                    Select your Branch
                  </option>
                  <option value="Chinar Park Branch">Chinar Park Branch</option>
                  <option value="VIP Road Branch">VIP Road Branch</option>
                </select>

                <button type="submit" className="w-full bg-white text-black px-4 py-2 rounded-md font-medium oswald">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

