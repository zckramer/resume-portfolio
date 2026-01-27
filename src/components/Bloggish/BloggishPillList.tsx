type BloggishPillListProps = {
    pills: Array<React.ReactNode>;
    className?: string;
};

const BloggishPillList: React.FC<BloggishPillListProps> = ({ pills, className }) => {
    return (
        <div className={['bloggish-pill-list', className].filter(Boolean).join(' ')}>
            {pills.map((pill, index) => (
                <div key={index} className="bloggish-pill">
                    {pill}
                </div>
            ))}
        </div>
    );
};

export default BloggishPillList;
