import './Bloggish.css';
import AboutMeEntry from './AboutMeEntry';

const Bloggish: React.FC = () => {
    const entries = [{ id: 'about-me', Component: AboutMeEntry }];

    return (
        <div className="bloggish">
            <main className="bloggish-app">
                <header className="bloggish-header">
                    <div>
                        <h1 className="bloggish-title">Bloggish</h1>
                        <div className="bloggish-subtitle">
                            Developer Experience Engineer · Tooling · Interactive Systems
                        </div>
                    </div>
                </header>

                {entries.map(({ id, Component }) => (
                    <Component key={id} />
                ))}
            </main>
        </div>
    );
};

export default Bloggish;