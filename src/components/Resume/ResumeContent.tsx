export default function ResumeContent() {
  return (
    <article className="resume">
      <section className="resume__section">
        <h2 className="resume__h2">About Zack Kramer</h2>
        <p>
          A <strong>full-stack developer</strong> with a passion for{" "}
          <strong>education</strong> and <strong>front-end development</strong>. A
          diligent and supportive team member, Zack encourages sharing of experience
          and knowledge to create a pleasant and productive team, emphasizing
          <em> de-siloing</em> and <em> engagement</em>. The ideal addition to any
          team where upskilling and best practices are needed.
        </p>
      </section>

      <section className="resume__section">
        <h2 className="resume__h2">Technical Skills</h2>

        <h3 className="resume__h3">Languages & Frameworks</h3>
        <p>
          JavaScript, TypeScript, Java (Spring Boot), Node.js, React.js, Angular,
          Next.js, GraphQL, SQL, PostgreSQL, Hasura
        </p>
        <div className="tags">
          <span className="tag">TypeScript</span>
          <span className="tag">React</span>
          <span className="tag">Spring Boot</span>
          <span className="tag">GraphQL</span>
          <span className="tag">PostgreSQL</span>
        </div>

        <h3 className="resume__h3">Back-End & API Development</h3>
        <p>
          RESTful Services, GraphQL Integration (e.g., Location360, Customer360),
          Java Spring Boot, Supabase, Camunda, Low-code API Development
        </p>

        <h3 className="resume__h3">Front-End Engineering</h3>
        <p>
          Responsive and Adaptive Design, Micro Front Ends (MFE), Shared Component
          Libraries, Dynamic Filtering UIs, Tabular Data Presentation (sorting,
          filtering, grouping)
        </p>

        <h3 className="resume__h3">Cloud & DevOps</h3>
        <p>Amazon Web Services (AWS), DynamoDB, Lambda (Node.js), S3, SQS, Billing, Terraform (IaC)</p>

        <h3 className="resume__h3">Search & Data Engineering</h3>
        <p>
          OpenSearch (multi-locale support, aggregate-based filtering), Data
          Ingestion Pipelines (ETL), Data Modeling, ErwinDM
        </p>

        <h3 className="resume__h3">Testing & Quality Assurance</h3>
        <p>Test-Driven Development (TDD), Jest, Software Quality Assurance (SQA)</p>

        <h3 className="resume__h3">Development Practices</h3>
        <p>
          Application Architecture, Agile Development, Agile Team Practices, Build &
          Release Management, Application Lifecycle Management (ALM), Configuration
          & Release Management
        </p>

        <h3 className="resume__h3">Tools & Platforms</h3>
        <p>
          Mono-repo Architectures, Design Thinking, Storybook, Research Analysis,
          Client Consultation, Digital Full Stack Development
        </p>

        <h3 className="resume__h3">Industry Experience</h3>
        <p>
          Healthcare Compliance (State-by-State), Financial Services, Agriculture/Sales,
          Technical/Administrative Consulting
        </p>
      </section>

      <section className="resume__section">
        <h2 className="resume__h2">Education</h2>
        <ul className="resume__list">
          <li>
            <strong>WeCanCodeIT — Columbus, Ohio</strong>
            <div className="muted">
              Certificate of Completion — Applied technical and coding skills to
              enterprise-level software development.
            </div>
          </li>
          <li>
            <strong>Full Sail University — Winter Park, Florida (Remote Program)</strong>
            <div className="muted">
              Video Game Design, B.S. — Studied physics, psychology, mythology, and
              probability. Capstone completed with minimal external programming
              support; self-taught C# in Unity through collaboration.
            </div>
          </li>
        </ul>
      </section>

      <section className="resume__section">
        <h2 className="resume__h2">Experience</h2>

        <article className="role">
          <header className="role__hdr">
            <h3 className="resume__h3">Accenture ATC</h3>
            <span className="role__dates">Aug 2021 — Present</span>
          </header>
          <p className="muted">
            Much of the work is under NDA. Highlights and reflections from selected
            project assignments:
          </p>
          <ul className="resume__list">
            <li>
              <strong>Agriculture / Sales.</strong> Built a catalog of agricultural
              products (pesticides, herbicides, seed blends, fertilizers) for the
              Brazilian market with a low-bandwidth, mobile-first audience. Delivered
              robust search, filtering, and retrofitted accessibility.
            </li>
            <li>
              <strong>Financial / Analysis.</strong> Worked with financial and
              insurance clients on consultation and parity PoCs. Rapidly translated
              needs into modern, pragmatic solutions.
            </li>
            <li>
              <strong>Health / Administrative.</strong> Helped rebuild a widely used
              healthcare network supporting decisions like bed-day allotment and
              post-care routing. Navigated state-by-state rules and legacy systems,
              unblocked teams with targeted queries and sandbox expertise.
            </li>
          </ul>
        </article>
      </section>
    </article>
  );
}
