import BloggishPanel from './BloggishPanel';

type BloggishEntryProps = {
    entryTitle: string;
    headerTitle: React.ReactNode;
    headerSubtitle?: React.ReactNode;
    dateOfPost: string;
    headerVariant?: 'primary' | 'secondary';
    left: React.ReactNode;
    right: React.ReactNode;
    className?: string;
};

const BloggishEntry: React.FC<BloggishEntryProps> = ({
    entryTitle,
    headerTitle,
    headerSubtitle,
    dateOfPost,
    headerVariant = 'secondary',
    left,
    right,
    className,
}) => {
    const isPrimary = headerVariant === 'primary';
    const titleClassName = isPrimary ? 'bloggish-title' : 'bloggish-type-title';
    const subtitleClassName = isPrimary ? 'bloggish-subtitle' : 'bloggish-type-subtitle';

    return (
        <BloggishPanel
            heading={entryTitle}
            headingAside={<span className="bloggish-entry-meta">posted on {dateOfPost}</span>}
            className={['bloggish-entry', className].filter(Boolean).join(' ')}
        >
            <header className="bloggish-header">
                <div>
                    {isPrimary ? (
                        <h1 className={titleClassName}>{headerTitle}</h1>
                    ) : (
                        <div className={titleClassName}>{headerTitle}</div>
                    )}
                    {headerSubtitle ? (
                        <div className={subtitleClassName}>{headerSubtitle}</div>
                    ) : null}
                </div>
            </header>

            <section className="bloggish-grid">
                <div className="bloggish-stack">{left}</div>
                <aside className="bloggish-stack">{right}</aside>
            </section>
        </BloggishPanel>
    );
};

export default BloggishEntry;
