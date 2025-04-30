import { useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import'./GameView.css';

//Images
const PCPlatformImage = `${process.env.PUBLIC_URL}/assets/PC-logo.png`;
const PS4PlatformImage = `${process.env.PUBLIC_URL}/assets/PS4-logo.png`;
const PS5PlatformImage = `${process.env.PUBLIC_URL}/assets/PS5-logo.png`;
const XboxPlatformImage = `${process.env.PUBLIC_URL}/assets/Xbox-logo.png`;
const SwitchPlatformImage = `${process.env.PUBLIC_URL}/assets/nintendo-switch-logo.png`;


interface game {
    id: number; 
    name: string; 
    image: string;
    videoClip: string;
    platforms: string[]; 
    releaseDate: string; 
    rating: number;
    description: string;
}

interface Props {
    game: game;
    library: game[];

}


function GameView({game, library}: Props) {

    const platformImages: { [key: string]: string } = {
        'PC': PCPlatformImage,
        'PS4': PS4PlatformImage,
        'PS5': PS5PlatformImage,
        'Xbox': XboxPlatformImage,
        'Switch': SwitchPlatformImage
        // Add more platforms and their respective image paths here
    };

    const isInLibrary = library.find((item) => item.name === game.name) ? true : false;

    const descriptionScrollRef = useRef<HTMLDivElement>(null);
    var myScrollDuration: number;

    const calculateDuration = () => {
        if (descriptionScrollRef.current) {
            const contentHeight = descriptionScrollRef.current.scrollHeight;
            const containerHeight = descriptionScrollRef.current.clientHeight;
            const scrollHeight = contentHeight - containerHeight;
            const baseDuration = 10000; 
            const duration = baseDuration + (scrollHeight * 15); // Adjust duration based on scroll height
            return duration;
        }
        return 10000;
    };

    var myScrollDuration = calculateDuration();

    const scrollToBottom = () => {
        console.log("Scrolling to bottom: ", myScrollDuration);
        return new Promise<void>((resolve) => {
            if (descriptionScrollRef.current) {
                scroll.scrollToBottom({
                    containerId: 'descriptionScrollContainer',
                    duration: myScrollDuration, 
                    smooth: 'linear',
                    onComplete: resolve()
                });
            } else {
                resolve();
            }
        });
    };

    const scrollToTop = () => {
        console.log("Scrolling to top: ", myScrollDuration);
        return new Promise<void>((resolve) => {
            if (descriptionScrollRef.current) {
                scroll.scrollToTop({
                    containerId: 'descriptionScrollContainer',
                    duration: 3000, 
                    smooth: 'easeInQuint',
                    onComplete: resolve()
                });
            } else {
                resolve();
            }
        });
    };

    useEffect(() => {
        const startScroll = async () => {
            await scrollToBottom();
            //setTimeout(() => {
            //}, 3000); // Wait for the duration before scrolling back up
            await scrollToTop();
        };

        const initialTimeout = setTimeout(async () => {
            await scrollToBottom();
            setInterval(() => {
                startScroll();
            }, myScrollDuration + 3000);

            
        }, 3000); // Initial delay before starting the scroll

        return () => clearTimeout(initialTimeout);

    });

    const getRatingClass = (rating: number) => {
        if (rating >= 85) return 'rating-green';
        if (rating >= 70) return 'rating-yellow';
        return 'rating-red';
    };

    return (
        <div className='game-view-container'>
            <div className='image-header-container'>
                <img src={game.image} alt={game.name} className="game-image"/>
                <h2 className="game-header">{game.name}</h2>
            </div>
            <div className='game-ui-container'>
                <div className='description-box-container'>
                    <div className="game-info">
                        <div className="game-card-platforms">
                            Platforms: 
                            {game.platforms.map((platform) => (
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
                            <span style={{color: 'black'}}> {game.releaseDate}</span> 
                        </span>
                        <span className="game-card-rating">
                            <span>Rating: &nbsp; </span>
                            <span className={getRatingClass(game.rating)}>{ game.rating}</span>
                        </span>
                    </div>
                    <div className="game-description">
                        <div className='game-description-content' id="descriptionScrollContainer" ref={descriptionScrollRef}>
                            {game.description}
                        </div>
                    </div>
                    <button className="game-action-button">
                        {isInLibrary ? 'Play' : 'Purchase'}
                    </button>
                </div>
                <div className = 'video-box-container'>
                    <video className='video-box' autoPlay loop muted >
                        <source src={game.videoClip} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default GameView;
