'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-3xl md:text-4xl font-extrabold text-white roboto-condensed">FREE FITNESS TIPS</h4>
            <p className="text-sm text-white/80 mt-1 oswald">Get a weekly dose of fitness directly into your mailbox.</p>
          </div>

          <form
            className="w-full md:w-1/2 flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              aria-label="Your email"
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-l-md bg-white/10 placeholder-white/60 text-white outline-none border border-white/10"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-white text-black font-semibold rounded-r-md border border-white/10 hover:opacity-95 transition roboto-condensed"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10" />

      <div className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h5 className="text-sm font-bold mb-4 roboto-condensed">COMPANY</h5>
            <ul className="space-y-3 text-sm text-white/70 oswald">
              <li>
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold mb-4 roboto-condensed">GYMS</h5>
            <ul className="space-y-3 text-sm text-white/70 oswald">
              <li>
                <Link href="/franchise" className="hover:underline">Own a Gym</Link>
              </li>
              <li>
                <Link href="/franchise-login" className="hover:underline">Franchise Login</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold mb-4 roboto-condensed">MEMBERS</h5>
            <ul className="space-y-3 text-sm text-white/70 mb-6 oswald">
              <li>
                <Link href="/faq" className="hover:underline">FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link href="/events-gallery" className="hover:underline">Events &amp; Gallery</Link>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-2">
              <a className="p-2 rounded-full border border-white/20 text-white/80 hover:bg-white/6" href="https://www.instagram.com/the.fit.monk.vip/" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
                </svg>
              </a>
              <a className="p-2 rounded-full border border-white/20 text-white/80 hover:bg-white/6" href="#" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.37-3.6 3.47-3.6.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a className="p-2 rounded-full border border-white/20 text-white/80 hover:bg-white/6" href="#" aria-label="YouTube">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.5 6.2a2.8 2.8 0 0 0-1.96-1.98C19.62 4 12 4 12 4s-7.62 0-9.54.22A2.8 2.8 0 0 0 .5 6.2 29 29 0 0 0 0 12a29 29 0 0 0 .5 5.8 2.8 2.8 0 0 0 1.96 1.98C4.38 20 12 20 12 20s7.62 0 9.54-.22a2.8 2.8 0 0 0 1.96-1.98A29 29 0 0 0 24 12a29 29 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-10 pt-4 text-white/60 text-xs flex items-center justify-between">
          <div>© {new Date().getFullYear()} Fitmonk. All rights reserved.</div>
          <div>
            Designed and Developed by{" "}
            <Link href="https://arddev.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">
              ard.dev
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
