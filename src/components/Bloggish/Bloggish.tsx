import './Bloggish.css';

const Bloggish: React.FC = () => {
    return (
        <div className="bloggish">
            <main className="bloggish-app">
                <header className="bloggish-header">
                    <div>
                        <h1 className="bloggish-title">Zack Kramer</h1>
                        <div className="bloggish-subtitle">
                            Developer Experience Engineer · Tooling · Interactive Systems
                        </div>
                    </div>
                </header>

                <section className="bloggish-grid">
                    <div className="bloggish-stack">
                        <div className="bloggish-panel">
                            <h2 className="bloggish-heading">Overview</h2>
                            <p className="bloggish-text">
                                I design systems that help other builders think more clearly.
                            </p>
                            <p className="bloggish-text">
                                My work focuses on <strong>developer-facing tools, workflows, and platforms</strong>—the
                                environments where software actually gets built. I care less about individual features
                                and more about the <strong>constraints, guardrails, and feedback loops</strong> that
                                determine whether a system scales gracefully or collapses under its own complexity.
                            </p>
                            <p className="bloggish-text bloggish-muted">
                                Developer experience is a systems problem, not a UX afterthought.
                            </p>
                        </div>

                        <div className="bloggish-panel">
                            <h2 className="bloggish-heading">Selected System</h2>
                            <p className="bloggish-text">
                                <strong>AI-Aware Developer Context System — Effity Labs</strong>
                            </p>
                            <p className="bloggish-text">
                                Designed and implemented a two-tier documentation and context system that serves both
                                human developers and AI assistants.
                            </p>
                            <ul className="bloggish-list bloggish-text bloggish-muted">
                                <li>Human-oriented documentation for learning and intent</li>
                                <li>Machine-readable context for automation and AI reasoning</li>
                                <li>Automated synchronization to prevent documentation drift</li>
                                <li>Decision frameworks that act as guardrails, not rules</li>
                            </ul>
                            <p className="bloggish-text">
                                The system functions as a single source of truth for architecture, conventions, and
                                workflows—reducing onboarding time and enabling safer AI-assisted development.
                            </p>
                        </div>

                        <div className="bloggish-panel">
                            <h2 className="bloggish-heading">Internal Platforms</h2>
                            <p className="bloggish-text">
                                Across enterprise and startup environments, I’ve built and maintained internal
                                platforms, dashboards, configuration tools, and shared component libraries used by
                                multiple teams.
                            </p>
                            <p className="bloggish-text bloggish-muted">
                                Developers were always the primary users. The goal was clarity, reliability, and
                                making the correct path obvious.
                            </p>
                        </div>
                    </div>
                    <aside className="bloggish-stack">
                        <div className="bloggish-panel">
                            <h2 className="bloggish-heading">What I Work On</h2>
                            <ul className="bloggish-list bloggish-list--separated bloggish-text">
                                <li>Developer tools &amp; internal platforms</li>
                                <li>Interactive, data-dense UIs</li>
                                <li>Reducing ambiguity &amp; decision fatigue</li>
                                <li>Operational guardrails</li>
                                <li>AI-assisted workflows</li>
                            </ul>
                        </div>

                        <div className="bloggish-panel">
                            <h2 className="bloggish-heading">How I Think</h2>
                            <ul className="bloggish-list bloggish-list--separated bloggish-text bloggish-muted">
                                <li>Developers are users</li>
                                <li>Documentation is an interface</li>
                                <li>Guardrails scale better than rules</li>
                                <li>Feedback loops beat instructions</li>
                                <li>Good tools teach by existing</li>
                            </ul>
                        </div>
                        <div className="bloggish-panel">
                            <h2 className="bloggish-heading">Interests</h2>
                            <div className="bloggish-pill-list">
                                <div className="bloggish-pill">Developer Tools</div>
                                <div className="bloggish-pill">Game Tooling</div>
                                <div className="bloggish-pill">Internal Platforms</div>
                                <div className="bloggish-pill">Long-Lived Systems</div>
                                <div className="bloggish-pill">Real Constraints</div>
                            </div>
                        </div>
                    </aside>
                </section>

                <footer className="bloggish-footer">
                    <div>
                        <a href="#">LinkedIn</a> · <a href="#">GitHub</a> ·{' '}
                        <a href="mailto:you@example.com">Email</a>
                    </div>
                    <div className="bloggish-muted">Last updated: 2026</div>
                </footer>
            </main>
        </div>
    );
};

export default Bloggish;