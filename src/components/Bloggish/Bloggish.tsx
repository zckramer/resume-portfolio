import './Bloggish.css';
import AboutMeEntry from './AboutMeEntry';

const Bloggish: React.FC = () => {
    return (
        <div className="bloggish">
            <main className="bloggish-app">
                <AboutMeEntry />

                <footer className="bloggish-footer">
                    <div>
                        <a href="https://www.linkedin.com/in/zckramer/">LinkedIn</a> · <a href="https://github.com/zckramer">GitHub</a> ·{' '}
                        <a href="mailto:zckramer83@gmail.com">Email</a>
                    </div>
                    <div className="bloggish-muted">Last updated: 1/27/2026</div>
                </footer>
            </main>
        </div>
    );
};

export default Bloggish;