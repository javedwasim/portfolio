export function Skills() {
  return (
    <section id="skills" className="w-full bg-slate-950 py-12 text-white md:py-24 lg:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-400">Backend Engineering</h3>
            <ul className="space-y-2 text-slate-400">
              <li>PHP & Laravel</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>RESTful API Development</li>
              <li>Microservices & Service-Oriented Architecture</li>
              <li>Queue-Driven Processing</li>
              <li>Workflow Automation</li>
              <li>Authentication & Authorization</li>
              <li>RBAC & Multi-Tenant Systems</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-400">Frontend Engineering</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Vue.js</li>
              <li>Inertia.js</li>
              <li>Next.js</li>
              <li>JavaScript / TypeScript</li>
              <li>Responsive UI Development</li>
              <li>API Integration</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-400">AI & LLM Engineering</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Large Language Models (LLMs)</li>
              <li>Agentic AI</li>
              <li>LangGraph</li>
              <li>AI Agents & Tool Calling</li>
              <li>Retrieval-Augmented Generation (RAG)</li>
              <li>LLM Application Development</li>
              <li>AI-Powered Automation</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-400">Databases & Infrastructure</h3>
            <ul className="space-y-2 text-slate-400">
              <li>MySQL</li>
              <li>Redis</li>
              <li>Docker</li>
              <li>AWS S3</li>
              <li>Linux / WSL</li>
              <li>Git & GitHub</li>
              <li>CI/CD</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-400">Architecture & Engineering</h3>
            <ul className="space-y-2 text-slate-400">
              <li>SaaS Architecture</li>
              <li>Multi-Tenant Architecture</li>
              <li>System Design</li>
              <li>Scalable Backend Architecture</li>
              <li>Clean Code & SOLID Principles</li>
              <li>Unit Testing & Code Review</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}