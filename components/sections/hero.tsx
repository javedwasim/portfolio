import Image from "next/image";
import Link from "next/link";
import myAvatar from "@/public/img/myavatar.jpeg";

export default function Hero() {
  const summary = `
I am a Senior Software Engineer with over 10 years of experience
designing and developing scalable SaaS platforms, enterprise web
applications, and high-performance backend systems. My expertise
includes PHP, Laravel, Python, AI-powered applications, RESTful APIs,
MySQL, workflow automation, and multi-tenant architectures. I am
passionate about building secure, maintainable, and scalable software
that solves real business problems while delivering exceptional
performance and user experience.
`;

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className="grid items-center  lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Hello, I'm
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Javed Wasim
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-300">
              Senior Software Engineer | Team Lead
            </h2>

            <p className="mt-2 text-lg text-blue-400">
              Backend Engineering • AI Development • Laravel • Python
            </p>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
              {summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/resume.pdf"
                className="rounded-xl bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Download Resume
              </Link>

              <Link
                href="#projects"
                className="rounded-xl border border-slate-700 px-7 py-3 font-medium text-slate-200 transition hover:border-blue-500 hover:text-white"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-full border-4 border-slate-800 shadow-2xl">
              <Image
                src={myAvatar}
                alt="Javed Wasim"
                priority
                placeholder="blur"
                className="h-[420px] w-[420px] object-cover lg:h-[420px] lg:w-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}