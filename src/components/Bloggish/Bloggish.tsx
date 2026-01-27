import './Bloggish.css';
import AboutMeEntry from './AboutMeEntry';

const Bloggish: React.FC = () => {
    const entries = [{ id: 'about-me', Component: AboutMeEntry }];

    return (
        <div className="bloggish">
            <main className="bloggish-app">
                {entries.map(({ id, Component }) => (
                    <Component key={id} />
                ))}

                <footer className="bloggish-footer">
                    <div>
                        <a href="https://www.linkedin.com/in/zckramer/">LinkedIn</a> · <a href="https://github.com/zckramer">GitHub</a> ·{' '}
                        <a href="mailto:zckramer83@gmail.com">Email</a>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Bloggish;