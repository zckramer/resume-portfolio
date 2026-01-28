import BloggishPanel from './BloggishPanel';

type BloggishListPanelProps = {
    heading: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    items: Array<React.ReactNode>;
    muted?: boolean;
    separated?: boolean;
    className?: string;
};

const BloggishListPanel: React.FC<BloggishListPanelProps> = ({
    heading,
    headingLevel,
    items,
    muted = false,
    separated = true,
    className,
}) => {
    const listClassName = [
        'bloggish-list',
        separated ? 'bloggish-list--separated' : undefined,
        'bloggish-text',
        muted ? 'bloggish-muted' : undefined,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <BloggishPanel heading={heading} headingLevel={headingLevel}>
            <ul className={listClassName}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </BloggishPanel>
    );
};

export default BloggishListPanel;
