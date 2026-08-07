import Link from "next/link";

// Icons for social links
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1.09-.35-3.56 1.09-.3-.08-.6-.13-.9-.13-.3 0-.6.05-.9.13-2.47-1.44-3.56-1.09-3.56-1.09-.5.92-.87 2.12-.78 3.46 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
    <path d="M12 11V7" />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white">Javed Wasim</h3>
            <p className="mt-2 text-base">Senior Software Engineer</p>
            <p className="mt-1 text-sm">
              Building scalable SaaS, backend systems & AI solutions.
            </p>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="#experience" className="hover:text-blue-400 transition-colors">Experience</Link></li>
              <li><Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="#skills" className="hover:text-blue-400 transition-colors">Skills</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white">Get in Touch</h4>
            <p className="mt-4 text-green-400">Available for remote opportunities</p>
            <p className="mt-1">Pakistan · Remote</p>
            <div className="mt-4 flex space-x-4">
              <Link href="mailto:javed.wasim.anjum@gmail.com" aria-label="Email" className="hover:text-blue-400 transition-colors"><MailIcon className="h-6 w-6" /></Link>
              <Link href="https://www.linkedin.com/in/muhammad-javed-wasim-anjum-3623294b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors"><LinkedinIcon className="h-6 w-6" /></Link>
              <Link href="https://github.com/javedwasim" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition-colors"><GithubIcon className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Javed Wasim. All rights reserved. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}