type BloggishPanelProps = {
    heading: string;
    headingAside?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
};

const BloggishPanel: React.FC<BloggishPanelProps> = ({ heading, headingAside, children, className }) => {
    return (
        <div className={['bloggish-panel', className].filter(Boolean).join(' ')}>
            {headingAside ? (
                <div className="bloggish-panelHeadingRow">
                    <h2 className="bloggish-heading">{heading}</h2>
                    <div className="bloggish-panelHeadingAside">{headingAside}</div>
                </div>
            ) : (
                <h2 className="bloggish-heading">{heading}</h2>
            )}
            {children}
        </div>
    );
};

export default BloggishPanel;
