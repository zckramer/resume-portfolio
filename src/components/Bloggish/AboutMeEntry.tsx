import BloggishEntry from './BloggishEntry';
import BloggishPanel from './BloggishPanel';
import BloggishListPanel from './BloggishListPanel';
import BloggishPillList from './BloggishPillList';

const AboutMeEntry: React.FC = () => {
    const whatIWorkOn = [
        'Developer tools & internal platforms',
        'Interactive, data-dense UIs',
        'Reducing ambiguity & decision fatigue',
        'Operational guardrails',
        'AI-assisted workflows',
    ];

    const howIThink = [
        'Developers are users',
        'Documentation is an interface',
        'Guardrails scale better than rules',
        'Feedback loops beat instructions',
        'Good tools teach by existing',
    ];

    const interests = [
        'Developer Tools',
        'Game Tooling',
        'Internal Platforms',
        'Long-Lived Systems',
        'Real Constraints',
    ];

    return (
        <BloggishEntry
            entryTitle="About Me"
            headerTitle="Zack Kramer"
            headerSubtitle="Developer Experience Engineer · Tooling · Interactive Systems"
            dateOfPost="1/27/2026"
            headerVariant="primary"
            left={
                <>
                    <BloggishPanel heading="Overview">
                        <p className="bloggish-text">
                            I design systems that help other builders think more clearly.
                        </p>
                        <p className="bloggish-text">
                            My work focuses on <strong>developer-facing tools, workflows, and platforms</strong>—the
                            environments where software actually gets built. I care less about individual features and
                            more about the <strong>constraints, guardrails, and feedback loops</strong> that determine
                            whether a system scales gracefully or collapses under its own complexity.
                        </p>
                        <p className="bloggish-text bloggish-muted">
                            Developer experience is a systems problem, not a UX afterthought.
                        </p>
                    </BloggishPanel>

                    <BloggishPanel heading="Selected System">
                        <p className="bloggish-text">
                            <strong>AI-Aware Developer Context System — Effity Labs</strong>
                        </p>
                        <p className="bloggish-text">
                            Designed and implemented a two-tier documentation and context system that serves both human
                            developers and AI assistants.
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
                    </BloggishPanel>

                    <BloggishPanel heading="Internal Platforms">
                        <p className="bloggish-text">
                            Across enterprise and startup environments, I’ve built and maintained internal platforms,
                            dashboards, configuration tools, and shared component libraries used by multiple teams.
                        </p>
                        <p className="bloggish-text bloggish-muted">
                            Developers were always the primary users. The goal was clarity, reliability, and making the
                            correct path obvious.
                        </p>
                    </BloggishPanel>
                </>
            }
            right={
                <>
                    <BloggishListPanel heading="What I Work On" items={whatIWorkOn} />
                    <BloggishListPanel heading="How I Think" muted items={howIThink} />

                    <BloggishPanel heading="Interests">
                        <BloggishPillList pills={interests} />
                    </BloggishPanel>
                </>
            }
        />
    );
};

export default AboutMeEntry;
