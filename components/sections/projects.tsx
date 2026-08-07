export function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-slate-950 py-12 text-white md:py-24 lg:py-10"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Featured Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">Multi-Tenant SaaS Platform</h3>
            <p className="mt-2 font-mono text-sm text-blue-400">
              Laravel · Vue.js · Inertia.js · MySQL · Redis · Docker
            </p>
            <p className="mt-4 text-slate-400">
              Designed and developed a scalable multi-tenant SaaS platform with a
              database-per-tenant architecture. Implemented role-based access
              control, workflow automation, queue-driven processing,
              notification systems, and modular backend services designed for
              reliability and scalability.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold">Key Highlights</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-400">
                <li>Multi-tenant architecture with isolated tenant databases</li>
                <li>Workflow and business-process automation</li>
                <li>RBAC and permission management</li>
                <li>Queue-based background processing</li>
                <li>RESTful APIs and third-party integrations</li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">
              AI Agent & LLM Engineering Platform
            </h3>
            <p className="mt-2 font-mono text-sm text-blue-400">
              Python · LangGraph · LLMs · Agentic AI · MCP
            </p>
            <p className="mt-4 text-slate-400">
              Exploring and building modern AI-powered applications using LLMs,
              agentic workflows, tool calling, and multi-agent architectures.
              Designed agents capable of reasoning through tasks, interacting
              with external tools, and automating complex workflows.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold">Key Highlights</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-400">
                <li>Agentic AI workflows using LangGraph</li>
                <li>LLM-powered task automation & tool calling</li>
                <li>Multi-agent architecture</li>
                <li>Retrieval and contextual information processing</li>
              </ul>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">
              Automated Web Research & Company Intelligence
            </h3>
            <p className="mt-2 font-mono text-sm text-blue-400">
              Python · LLMs · Web Scraping · AI Agents
            </p>
            <p className="mt-4 text-slate-400">
              Built an AI-driven research workflow that collects information from
              company websites, analyzes relevant pages, and transforms
              unstructured web content into structured business insights.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold">Key Highlights</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-400">
                <li>Automated website and page discovery</li>
                <li>Intelligent content extraction</li>
                <li>LLM-powered analysis and summarization</li>
                <li>Automated research workflows</li>
              </ul>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">OpenCart E-Commerce Platform</h3>
            <p className="mt-2 font-mono text-sm text-blue-400">
              OpenCart · PHP · MySQL · JavaScript · REST APIs
            </p>
            <p className="mt-4 text-slate-400">
              Developed and customized{" "}
              <strong>OpenCart-based e-commerce platforms</strong> with
              extensive experience in extending the core framework, building
              custom modules, integrating third-party services, and implementing
              business-specific e-commerce workflows.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold">Key Highlights</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-400">
                <li>Custom OpenCart module and extension development</li>
                <li>Advanced product, catalog, cart, and order management</li>
                <li>Payment gateway and shipping integrations</li>
                <li>Third-party API integrations and automation</li>
                <li>Custom admin functionality and business workflows</li>
                <li>Database optimization and performance improvements</li>
                <li>Troubleshooting and enhancement of existing OpenCart applications</li>
              </ul>
            </div>
          </div>

          {/* Project 5 */}
          <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">Core PHP Web Application</h3>
            <p className="mt-2 font-mono text-sm text-blue-400">
              Core PHP · MySQL · API Integration
            </p>
            <p className="mt-4 text-slate-400">
              Developed custom web applications using Core PHP, implementing
              dynamic modules and business logic.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold">Key Highlights</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-400">
                <li>MySQL database design, queries, and optimization</li>
                <li>Third-party API integrations and automation</li>
                <li>Custom admin panels and application maintenance</li>
              </ul>
            </div>
          </div>

          {/* Project 6 */}
          <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">CodeIgniter Web Application</h3>
            <p className="mt-2 font-mono text-sm text-blue-400">
              CodeIgniter · PHP · MySQL · REST APIs
            </p>
            <p className="mt-4 text-slate-400">
              Developed web applications using the CodeIgniter MVC framework,
              including custom modules, business workflow implementation, and
              RESTful API development.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold">Key Highlights</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-400">
                <li>RESTful API development and third-party integrations</li>
                <li>MySQL database optimization and performance improvements</li>
                <li>
                  Application maintenance, troubleshooting, and feature
                  enhancements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}