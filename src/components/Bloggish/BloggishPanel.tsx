type BloggishPanelProps = {
    heading: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    headingAside?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
};

const BloggishPanel: React.FC<BloggishPanelProps> = ({
    heading,
    headingLevel = 2,
    headingAside,
    children,
    className,
}) => {
    const HeadingTag = `h${headingLevel}` as const;

    return (
        <div className={['bloggish-panel', className].filter(Boolean).join(' ')}>
            {headingAside ? (
                <div className="bloggish-panelHeadingRow">
                    <HeadingTag className="bloggish-heading">{heading}</HeadingTag>
                    <div className="bloggish-panelHeadingAside">{headingAside}</div>
                </div>
            ) : (
                <HeadingTag className="bloggish-heading">{heading}</HeadingTag>
            )}
            {children}
        </div>
    );
};

export default BloggishPanel;
