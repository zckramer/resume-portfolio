type BloggishPanelProps = {
    heading: string;
    children: React.ReactNode;
    className?: string;
};

const BloggishPanel: React.FC<BloggishPanelProps> = ({ heading, children, className }) => {
    return (
        <div className={['bloggish-panel', className].filter(Boolean).join(' ')}>
            <h2 className="bloggish-heading">{heading}</h2>
            {children}
        </div>
    );
};

export default BloggishPanel;
