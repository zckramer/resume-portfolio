interface PortfolioCardProps {
    // Define your props here
    title?: string;
    description?: string;
    imageUrl?: string;
    link?: string;
    date?: string;
    technologies?: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    title,
    description,
    imageUrl,
    link,
}) => {
    return (
        <div className="portfolio-card">
            {imageUrl && <img src={imageUrl} alt={title} className="portfolio-card__image" />}
            <div className="portfolio-card__content">
                {title && <h3 className="portfolio-card__title">{title}</h3>}
                {description && <p className="portfolio-card__description">{description}</p>}
                {link && (
                    <a href={link} className="portfolio-card__link" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
};

export default PortfolioCard;