type BloggishEntryProps = {
    entryTitle: string;
    dateOfPost: string;
    left: React.ReactNode;
    right: React.ReactNode;
    className?: string;
};

const BloggishEntry: React.FC<BloggishEntryProps> = ({
    entryTitle,
    dateOfPost,
    left,
    right,
    className,
}) => {
    return (
        <article className={['bloggish-panel', 'bloggish-entry', className].filter(Boolean).join(' ')}>
            <div className="bloggish-panelHeadingRow">
                <h2 className="bloggish-heading">
                    {entryTitle}
                    <span className="sr-only">, posted on {dateOfPost}</span>
                </h2>
                <div className="bloggish-panelHeadingAside">
                    <span className="bloggish-entry-meta" aria-hidden="true">
                        <time dateTime={dateOfPost}>{dateOfPost}</time>
                    </span>
                </div>
            </div>

            <section className="bloggish-grid">
                <div className="bloggish-stack">{left}</div>
                <aside className="bloggish-stack">{right}</aside>
            </section>
        </article>
    );
};

export default BloggishEntry;
