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
            </main>
        </div>
    );
};

export default Bloggish;