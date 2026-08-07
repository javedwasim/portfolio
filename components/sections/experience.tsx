export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Work Experience
        </h2>
        <div className="mt-10">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">
              Senior Software Engineer & Team Lead
            </h3>
            <p className="font-semibold text-blue-500">
              Software Engineering | SaaS & AI Solutions
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              10+ Years of Professional Experience
            </p>
          </div>

          <ul className="list-disc space-y-4 pl-6 text-lg text-slate-400">
            <li>
              Lead the design and development of scalable{" "}
              <strong>SaaS platforms</strong>, backend systems, RESTful APIs, and
              business-critical applications.
            </li>
            <li>
              Design and maintain <strong>multi-tenant architectures</strong>,
              including database-per-tenant solutions, role-based access
              control, authentication, and authorization.
            </li>
            <li>
              Build reliable backend services using{" "}
              <strong>PHP, Laravel, Python, MySQL, Redis, and Node.js</strong>,
              with a strong focus on performance, maintainability, and
              scalability.
            </li>
            <li>
              Develop{" "}
              <strong>
                queue-driven workflows, notification systems, automation
                pipelines, and third-party integrations
              </strong>{" "}
              for complex business processes.
            </li>
            <li>
              Lead technical implementation across projects, making architecture
              decisions, reviewing code, mentoring developers, and maintaining
              engineering standards.
            </li>
            <li>
              Implement modern development practices including{" "}
              <strong>
                Docker, Git, CI/CD, unit testing, code reviews, and Agile
                workflows
              </strong>
              .
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}