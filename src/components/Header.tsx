import './Header.css';
import FriendsList from './FriendsList';
import Profile from './ProfileComponent';
import { useEffect, useRef, useState } from 'react';

interface Friend {
    name: string;
    gamertag: string;
    status: string;
    friendsSince: string;
    icon: string;
}

interface Profile {
  name: string;
  gamertag: string;
  status: string;
  icon: string;
}

interface TabItem {
    id: number;
    name: string;
    image: string;
    games: {
      id: number;
      name: string;
      image: string;
      platforms: string[];
      releaseDate: string;
      rating: number;
      description: string;
    }[];
}

interface props {
    friendsList: Friend[];
    profile: Profile;
    tabItems: TabItem[];
    onTabItemSelected: (item: TabItem) => void;
}

const videoFiles = [
  `${process.env.PUBLIC_URL}/assets/red-dead-clip.mp4`,
  `${process.env.PUBLIC_URL}/assets/mw3-clip.mp4`,
  `${process.env.PUBLIC_URL}/assets/modern-warfare-2-clip.mp4`,
  `${process.env.PUBLIC_URL}/assets/destiny2-clip.mp4`,
  `${process.env.PUBLIC_URL}/assets/bo6-clip.mp4`,
  `${process.env.PUBLIC_URL}/assets/Black-ops-3-clip.mp4`,
  `${process.env.PUBLIC_URL}/assets/Apex-legends-clip.mp4`,
  `${process.env.PUBLIC_URL}/assets/fortnite-header-vid.mp4`,
];


function Header({friendsList, profile, tabItems, onTabItemSelected}: props) {
  const [currentVideo, setCurrentVideo] = useState<string>(videoFiles[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const shuffleVideos = () => {
      const randomIndex = Math.floor(Math.random() * videoFiles.length);
      setCurrentVideo(videoFiles[randomIndex]);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', shuffleVideos);
      return () => {
        videoElement.removeEventListener('ended', shuffleVideos);
      };
    }
  }, []);

  function handleTabClick(item: TabItem): void {
    onTabItemSelected(item);
  }

  return (
    <div className='header-container'>
      <div className="header-items-container">
        <div className="header-items">
          <Profile profile={profile} />
          <video ref={videoRef} className="header-video" src={currentVideo} autoPlay muted />
          <span className="header-text">My Battle.net</span>
        </div>
        <div className = "button-row">
            {tabItems.map((item) => (
                <div className = "button-row-items" 
                    key={item.id} 
                    onClick={() => handleTabClick(item)}>
                    <img src={item.image} className="button-row-image" />
                    <span className="button-row-text">{item.name}</span>
                </div>
            ))}
        </div>
      </div>
      <FriendsList friendsList={friendsList} />
    </div>
    
    
  );
}

export default Header;