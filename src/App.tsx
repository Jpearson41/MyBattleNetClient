// This is the main component of the application.
import './App.css';
import LeftNavList from './components/LeftNavList';
import GameCard from './components/GameCard';
import GameView from './components/GameView';
import React, { useState } from 'react';
import Header from './components/Header';

//My Images
//import actionImage from './assets/action-genre-image.jpg';
//import indieImage from './assets/indie-genre-image.jpg'; // Ensure this file exists at the specified path
//import adventureImage from './assets/adventure-genre-image.jpg';
//import rpgImage from './assets/RPG-genre-image.jpg';
//import shooterImage from './assets/shooter-genre-image.jpg';


//My Genre Images
const ActionGenreImage = `${process.env.PUBLIC_URL}/assets/action-genre.png`;
const IndieGenreImage = `${process.env.PUBLIC_URL}/assets/indie-genre.png`;
const AdventureGenreImage = `${process.env.PUBLIC_URL}/assets/adventure-genre.png`;
const RPGGenreImage = `${process.env.PUBLIC_URL}/assets/rpg-genre.png`;
const ShooterGenreImage = `${process.env.PUBLIC_URL}/assets/shooter-genre.png`;
const LibraryIconImage = `${process.env.PUBLIC_URL}/assets/library-icon.png`;

//My Game Images
const AssassinsCreedImage = `${process.env.PUBLIC_URL}/assets/Assassins-Creed-Valhalla.jpg`;
const GodOfWarImage = `${process.env.PUBLIC_URL}/assets/God-Of-War.jpg`;
const SpidermanImage = `${process.env.PUBLIC_URL}/assets/Spider-man.jpg`;

const HadesImage = `${process.env.PUBLIC_URL}/assets/Hades.jpeg`;
const CelesteImage = `${process.env.PUBLIC_URL}/assets/Celeste.png`;
const HollowKnightImage = `${process.env.PUBLIC_URL}/assets/Hollow-Knight.jpeg`;

const LegendOfZeldaImage = `${process.env.PUBLIC_URL}/assets/Legend-of-Zelda.jpg`;
const RedDeadImage = `${process.env.PUBLIC_URL}/assets/Red-Dead-Redemption.png`;
const RedDeadClip = `${process.env.PUBLIC_URL}/assets/Red-dead-clip.mp4`;
const UnchartedImage = `${process.env.PUBLIC_URL}/assets/Uncharted.png`;

const EldinRingImage = `${process.env.PUBLIC_URL}/assets/Eldin-Ring.jpeg`;
const CyberpunkImage = `${process.env.PUBLIC_URL}/assets/Cyberpunk.png`;
const SkyrimImage = `${process.env.PUBLIC_URL}/assets/Skyrim.jpg`;

const ColdWarImage = `${process.env.PUBLIC_URL}/assets/Cold-War.jpg`;
const MW3Image = `${process.env.PUBLIC_URL}/assets/modern-warfare-3.jpg`;
const MW3Clip = `${process.env.PUBLIC_URL}/assets/mw3-clip.mp4`;
const MW2Image = `${process.env.PUBLIC_URL}/assets/modern-warfare-2-image.jpg`;
const MW2Clip = `${process.env.PUBLIC_URL}/assets/modern-warfare-2-clip.mp4`;
const OverwatchImage = `${process.env.PUBLIC_URL}/assets/Overwatch.jpg`;
const BlackOps6Image = `${process.env.PUBLIC_URL}/assets/Black-Ops-6.jpg`;
const BlackOps6Clip = `${process.env.PUBLIC_URL}/assets/bo6-clip.mp4`;

const BlackOps3Image = `${process.env.PUBLIC_URL}/assets/Black-Ops-3.jpg`;
const BlackOps3Clip = `${process.env.PUBLIC_URL}/assets/Black-ops-3-clip.mp4`;
const Destiny2Image = `${process.env.PUBLIC_URL}/assets/Destiny-2.png`;
const Destiny2Clip = `${process.env.PUBLIC_URL}/assets/destiny2-clip.mp4`;
const ApexLegendsImage = `${process.env.PUBLIC_URL}/assets/Apex-Legends.png`;
const ApexClip = `${process.env.PUBLIC_URL}/assets/Apex-legends-clip.mp4`;
const FortniteImage = `${process.env.PUBLIC_URL}/assets/fortniteImage.jpg`;
const FortniteClip = `${process.env.PUBLIC_URL}/assets/fortnite-header-vid.mp4`;
//My Friend Images
const CharlieIcon = `${process.env.PUBLIC_URL}/assets/charlie-icon.png`;
const BobbyIcon = `${process.env.PUBLIC_URL}/assets/bobby-icon.png`;
const GraysonIcon = `${process.env.PUBLIC_URL}/assets/grayson-icon.png`;
const JonahIcon = `${process.env.PUBLIC_URL}/assets/jonah-icon.png`;
//My Profile Image
const DrJPearsonIcon = `${process.env.PUBLIC_URL}/assets/my-icon.png`;
//Background URL
const backgroundURL = `${process.env.PUBLIC_URL}/assets/hd-gif-2.gif`;


function App() {

  const myActionGames = [
    { id: 0, name: "Assassin's Creed Valhalla", image: AssassinsCreedImage, videoClip: RedDeadClip, platforms: ["PC", "PS4", "Xbox"], releaseDate: "2020-11-10", rating: 85, description: "A battle royale game" },
    { id: 1, name: "God of War", image: GodOfWarImage, videoClip: RedDeadClip, platforms: ["PS4"], releaseDate: "2018-04-20", rating: 94, description: "A battle royale game" },
    { id: 2, name: "Spider-Man", image: SpidermanImage, videoClip: RedDeadClip, platforms: ["PS4"], releaseDate: "2018-09-07", rating: 87, description: "A battle royale game" }
  ];

  const myIndieGames = [
    { id: 0, name: "Hades", image: HadesImage, videoClip: RedDeadClip, platforms: ["PC", "Switch"], releaseDate: "2020-09-17", rating: 93, description: "A battle royale game" },
    { id: 1, name: "Celeste", image: CelesteImage, videoClip: RedDeadClip, platforms: ["PC", "PS4", "Xbox", "Switch"], releaseDate: "2018-01-25", rating: 91, description: "A battle royale game" },
    { id: 2, name: "Hollow Knight", image: HollowKnightImage, videoClip: RedDeadClip, platforms: ["PC", "PS4", "Xbox", "Switch"], releaseDate: "2017-02-24", rating: 90, description: "A battle royale game" }
  ];

  const myAdventureGames = [
    { id: 0, name: "The Legend of Zelda: Breath of the Wild", image: LegendOfZeldaImage, videoClip: RedDeadClip, platforms: ["Switch"], releaseDate: "2017-03-03", rating: 97, description: "A battle royale game" },
    { id: 1, name: "Red Dead Redemption 2", image: RedDeadImage, videoClip: RedDeadClip, platforms: ["PC", "PS4", "Xbox"], releaseDate: "2018-10-26", rating: 96, description: "A battle royale game" },
    { id: 2, name: "Uncharted 4: A Thief's End", image: UnchartedImage, videoClip: RedDeadClip, platforms: ["PS4"], releaseDate: "2016-05-10", rating: 93, description: "A battle royale game" }
  ];

  const myRPGGames = [
    { id: 0, name: "Elden Ring", image: EldinRingImage, videoClip: RedDeadClip, platforms: ["PC", "PS4", "Xbox"], releaseDate: "2015-05-19", rating: 92, description: "A battle royale game" },
    { id: 1, name: "Cyberpunk 2077", image: CyberpunkImage, videoClip: RedDeadClip, platforms: ["PC", "PS4", "Xbox"], releaseDate: "2020-12-10", rating: 86, description: "A battle royale game" },
    { id: 2, name: "Skyrim", image: SkyrimImage, videoClip: RedDeadClip, platforms: ["PC", "PS4", "Xbox"], releaseDate: "2013-09-17", rating: 97, description: "A battle royale game" }
  ];

  const myShooterGames = [
    { id: 0, name: "Call of Duty: Black Ops Cold War", image: ColdWarImage, videoClip: MW3Clip, platforms: ["PC", "PS4", "PS5", "Xbox", "Xbox"], releaseDate: "2020-11-13", rating: 76, description: "A battle royale game" },
    { id: 1, name: "Overwatch", image: OverwatchImage, videoClip: RedDeadClip, platforms: ["PC", "PS4", "Xbox", "Switch"], releaseDate: "2016-05-24", rating: 91, description: "A battle royale game" },
    { id: 2, name: "Call of Duty Black Ops 6", image: BlackOps6Image, videoClip: BlackOps6Clip, platforms: ["PC", "PS4", "PS5", "Xbox", "Xbox"], releaseDate: "2020-03-20", rating: 88, description: "A battle royale game" }
  ];

  const myGameGenres = [
        { id: 0, name: "Action", image: ActionGenreImage, games: myActionGames },
        { id: 1, name: "Indie", image: IndieGenreImage, games: myIndieGames },
        { id: 2, name: "Adventure", image: AdventureGenreImage, games: myAdventureGames },
        { id: 3, name: "RPG" , image: RPGGenreImage, games: myRPGGames },
        { id: 4, name: "Shooter", image: ShooterGenreImage, games: myShooterGames }
  ];

  const myLibraryGames = [
    { id: 0, name: "Black Ops 3", image: BlackOps3Image, videoClip: BlackOps3Clip, platforms: ["PC", "PS4", "PS5", "Xbox"], releaseDate: "2020-11-13", rating: 100, 
      description: "Call of Duty: Black Ops III is a 2015 first-person shooter game developed by Treyarch and published by Activision. It is the twelfth entry in the Call of Duty series and the sequel to the 2012 video game Call of Duty: Black Ops II. It was released on PlayStation 4, Windows, and Xbox on November 6, 2015. A feature-limited version developed by Beenox and Mercenary Technology that only supports multiplayer modes was released on PlayStation 3 and Xbox 360 and was also the final Call of Duty title released on those platforms." },
    { id: 1, name: "Destiny 2", image: Destiny2Image, videoClip: Destiny2Clip, platforms: ["PC", "PS4", "Xbox", "Switch"], releaseDate: "2016-05-24", rating: 100, 
      description: "Destiny 2 is a free-to-play online first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for PlayStation 4, Xbox, and Windows. It became free-to-play, utilizing the games as a service model, under the New Light title on October 1, 2019, followed by the game's release on Stadia the following month, and then PlayStation 5 and Xbox/S platforms in December 2020. The game was published by Activision until December 31, 2018, when Bungie acquired the publishing rights to the franchise. It is the sequel to 2014's Destiny and its subsequent expansions." },
    { id: 2, name: "Apex Legends", image: ApexLegendsImage, videoClip: ApexClip, platforms: ["PC", "PS4", "PS5", "Xbox"], releaseDate: "2020-03-20", rating: 100, 
      description: "Apex Legends is a 2019 battle royale-hero shooter video game developed by Respawn Entertainment and published by Electronic Arts, set in the same science fiction universe as Respawn's Titanfall series. It is offered free-to-play and is continuously updated under the games as a service model; the game was originally released for PlayStation 4, Windows, and Xbox in February 2019 and was followed by versions for Nintendo Switch in 2021 and both PlayStation 5 and Xbox/S in 2022, with all supporting cross-platform multiplayer. A mobile version designed for touchscreens was briefly available until its discontinuation in 2023.Before the match, players form into two- or three-player squads, and select from pre-designed characters with distinctive abilities, known as 'Legends'. The game has three gameplay modes - Trios, Duos and Solos. In 'Battle Royale', up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat. The available play area on the island shrinks over time, forcing players to keep moving or else find themselves outside the play area which can be fatal. The final team alive wins the round. In 'Arenas', players form into three-player squads and fight against another squad in a 3v3 team deathmatch over a series of rounds to determine the winner of the match. Teams win when their team has at least 3 points and is 2 points ahead.Work on Apex Legends began around late 2016, though the project remained a secret right up until its launch. The game's release in 2019 came as a surprise, as until that point it had been assumed that Respawn Entertainment was working on a third installment to the Titanfall franchise, the studio's previous major game, although a number of Titanfall characters appear as minor characters or playable Legends. Apex Legends received generally positive reviews from critics, who praised its gameplay, progression system, and fusion of elements from various genres. Some considered it a worthy competitor to other battle royale games. Apex Legends surpassed 25 million players by the end of its first week, and 50 million within its first month. By April 2021, it had approximately 100 million players, making it one of the most played video games of all time by player count." },
    { id: 3, name: "Call of Duty: Modern Warfare 2", image: MW2Image, videoClip: MW2Clip, platforms: ["PC", "PS4", "PS5", "Xbox"], releaseDate: "2020-11-13", rating: 76, description: "A battle royale game" },
    { id: 4, name: "Call of Duty: Modern Warfare 3", image: MW3Image, videoClip: MW3Clip, platforms: ["PC", "PS4", "PS5", "Xbox"], releaseDate: "2020-11-13", rating: 76, description: "A battle royale game" },
    { id: 4, name: "Fortnite", image: FortniteImage, videoClip: FortniteClip, platforms: ["PC", "PS4", "PS5", "Xbox", "Switch"], releaseDate: "2020-11-13", rating: 95, description: "A battle royale game" },
  ];

  const myTabItems = [
    { id: 0, name: "Library", image: LibraryIconImage, games: myLibraryGames },
    { id: 2, name: "Action", image: ActionGenreImage, games: myActionGames },
    { id: 3, name: "Indie", image: IndieGenreImage, games: myIndieGames },
    { id: 4, name: "Adventure", image: AdventureGenreImage, games: myAdventureGames },
    { id: 5, name: "RPG" , image: RPGGenreImage, games: myRPGGames },
    { id: 6, name: "Shooter", image: ShooterGenreImage, games: myShooterGames }

  ];

  const myFriendsList = [
    { id: 0, name: "Jonah Mitchell", gamertag: "DrJMitchell", status: "Appearing Offline", friendsSince: "2022-01-01T12:00:00Z", icon: JonahIcon  },
    { id: 1, name: "Bobby Hammond", gamertag: "Bobs", status: "Offline", friendsSince: "2022-01-01T12:00:00Z", icon: BobbyIcon  },
    { id: 2, name: "Charlie Curlee", gamertag: "Rigby", status: "Online", friendsSince: "2022-01-01T12:00:00Z", icon: CharlieIcon  },
    { id: 2, name: "Grayson Moss", gamertag: "DrNutt", status: "Online", friendsSince: "2022-01-01T12:00:00Z", icon: GraysonIcon }
  ];

  const myProfile = { id: 0, name: "Jack Pearson", gamertag: "DrJPearson", status: "Offline", icon: DrJPearsonIcon  }
  

  const [currentView, setCurrentView] = useState('Shop');
  const [currentGameSelected, setCurrentGameSelected] = useState(myActionGames[0]);
  const [currentGenreSelected, setCurrentGenreSelected] = useState(myGameGenres[0]);

  
  const handleCardItemSelected = (item: { id: number; name: string; description: string; image: string; videoClip: string; platforms: string[]; releaseDate: string; rating: number }) => {
      console.log("Selected Card item:", item);
      // Update other components or state based on the selected item
      setCurrentGameSelected(item);
      setCurrentView('Game Selected');
      
  };

  const handleTabClick = (item: {id: number, name: string}) => {
        //setSelectedIndex(item.id);
        console.log("Tab Clicked");
        if (item.name === 'Library') {
          setCurrentView('Library');
        } else if (item.name === 'Action') {
          setCurrentView('Shop');
          setCurrentGenreSelected(myGameGenres[0]);
        }else if (item.name === 'Indie') {
          setCurrentView('Shop');
          setCurrentGenreSelected(myGameGenres[1]);
        }else if (item.name === 'Adventure') {
          setCurrentView('Shop');
          setCurrentGenreSelected(myGameGenres[2]);
        }else if (item.name === 'RPG') {
          setCurrentView('Shop');
          setCurrentGenreSelected(myGameGenres[3]);
        }else if (item.name === 'Shooter') {
          setCurrentView('Shop');
          setCurrentGenreSelected(myGameGenres[4]);
        }
    };

  
  return (
    <div className="App">
      <Header 
        friendsList={myFriendsList}
        profile={myProfile}
        tabItems={myTabItems}
        onTabItemSelected={handleTabClick}
      />
      {currentView === 'Shop' && (
        <div className="main-container" style={{ background: `url(${backgroundURL}) no-repeat center center`, backgroundSize: 'cover' }}>
          
              <div className="genre-item">
                <div className="genre-item-image">
                  <img src={currentGenreSelected.image} alt={`${currentGenreSelected.name} cover`} />
                </div>
                <div className="genre-item-text">
                  {currentGenreSelected.name}
                </div>
              </div>
              <GameCard
                  items={currentGenreSelected.games}
                  onGameCardSelected={handleCardItemSelected}
                />
            
        </div>  
      )}
      {currentView === 'Library' && (
        <div className="main-container" style={{ background: `url(${backgroundURL}) no-repeat center center`, backgroundSize: 'cover' }}>
          <div className="genre-item">
                <div className="genre-item-image">
                  <img src={myTabItems[0].image} alt={`${myTabItems[0].name} cover`} />
                </div>
                <div className="genre-item-text">
                  {myTabItems[0].name}
                </div>
              </div>
              <GameCard
                  items={myLibraryGames}
                  onGameCardSelected={handleCardItemSelected}
                />

        </div>
        )}
        {currentView === 'Game Selected' && (
          <div className = "main-container" style={{ background: `url(${backgroundURL}) no-repeat center center`, backgroundSize: 'cover' }}>
            <GameView
              game={currentGameSelected}
              library={myLibraryGames}
            />
          </div>
        )}
    </div>
  );
}



export default App;


