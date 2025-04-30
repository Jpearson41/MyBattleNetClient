import React, {useRef, useState} from 'react';
import './GameCard.css';

//Images
const PCPlatformImage = `${process.env.PUBLIC_URL}/assets/PC-logo.png`;
const PS4PlatformImage = `${process.env.PUBLIC_URL}/assets/PS4-logo.png`;
const PS5PlatformImage = `${process.env.PUBLIC_URL}/assets/PS5-logo.png`;
const XboxPlatformImage = `${process.env.PUBLIC_URL}/assets/Xbox-logo.png`;
const SwitchPlatformImage = `${process.env.PUBLIC_URL}/assets/nintendo-switch-logo.png`;

const NextIconImage = `${process.env.PUBLIC_URL}/assets/next-button.png`;
const PreviousIconImage = `${process.env.PUBLIC_URL}/assets/back-button.png`;
interface GameCardItem {
  id: number;
  name: string;
  image: string;
  videoClip: string;
  platforms: string[];
  releaseDate: string;
  rating: number;
  description: string;
}

interface GameCardProps {
    items: GameCardItem[];
    onGameCardSelected: (GameCardItem: GameCardItem) => void;
}

const backgroundURL = `${process.env.PUBLIC_URL}/assets/hd-gif-2.gif`;

function GameCard( {items, onGameCardSelected }: GameCardProps) {

    const platformImages: { [key: string]: string } = {
        'PC': PCPlatformImage,
        'PS4': PS4PlatformImage,
        'PS5': PS5PlatformImage,
        'Xbox': XboxPlatformImage,
        'Switch': SwitchPlatformImage
        // Add more platforms and their respective image paths here
    };

    const containerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;
    const pageAmount = Math.ceil(items.length / cardsPerPage) - 1;
    const cardWidth = 700; 
    const gap = 5 * 16;
    const containerWidth = cardWidth * cardsPerPage + gap * (cardsPerPage - 1);
    

    const handleNextPage = () => {
        if (currentPage < Math.ceil(items.length / cardsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
            console.log("Current page increased to ", currentPage);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            //console.log("Current page decresed to ", currentPage);
        }
    };

    const scrollToPage = () => {
        if (containerRef.current) {
            //console.log("Scrolling to page ", currentPage);
            const offset = (containerRef.current.clientWidth - containerWidth) / 2;
            containerRef.current.style.transform = `translateX(calc(-${currentPage * (cardWidth * cardsPerPage + gap * (cardsPerPage))}px + ${offset}px))`;
            
        }
    };

    const getRatingClass = (rating: number) => {
        if (rating >= 85) return 'rating-green';
        if (rating >= 70) return 'rating-yellow';
        return 'rating-red';
    };

    const handleClick = (item: GameCardItem) => {
        onGameCardSelected(item);
    };

    React.useEffect(() => {
        scrollToPage();
    }, [currentPage]);


    return (
        <div className="page-container">
            {currentPage > 0 && (
                <button className="pagination-button pagination-button-left" onClick={handlePrevPage}>
                    <img src={PreviousIconImage} alt="Previous" />
                </button>
            )}
            <div className="game-card-container-wrapper">
                <div className="game-card-container" ref={containerRef}>
                    {items.map((item) => (
                        <div 
                            className="game-card"
                            key={item.id} 
                            onClick={() => handleClick(item)}>
                            <img src={item.image} className="game-card-image" />
                            <div className="game-card-details">
                                <span className="game-card-title">{item.name}</span>
                                <div className="game-card-platforms">
                                    Platforms: 
                                    {item.platforms.map((platform) => (
                                        <img
                                        key={platform}
                                        src={platformImages[platform]}
                                        alt={`${platform} icon`}
                                        className="platform-icon"
                                        />
                                    ))}
                                </div>
                                <span className="game-card-release-date">
                                    <span>Release Date:&nbsp;</span>
                                    <span style={{color: '#333'}}> {item.releaseDate}</span> 
                                </span>
                                <span className="game-card-rating">
                                    <span>Rating: &nbsp; </span>
                                    <span className={getRatingClass(item.rating)}>{ item.rating}</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {items.length > cardsPerPage && currentPage < Math.ceil(items.length / cardsPerPage) - 1 && (
                <button className="pagination-button pagination-button-right" onClick={handleNextPage}>
                    <img src={NextIconImage} alt="Next" />
                </button>
            )}
        </div>
    );
}


export default GameCard;
