import React from "react";
//import { Fragment } from "react";
import { useState } from "react";
import './LeftNavList.css';

interface GenreItem {
    id: number;
    name: string;
    image: string;
    games: { 
            id: number; 
            name: string;
            description: string;
            image: string; 
            platforms: string[]; 
            releaseDate: string; 
            rating: number; 
        }[];
}

interface LibraryItem {
    id: number; 
    name: string;
    description: string;
    image: string; 
    platforms: string[]; 
    releaseDate: string; 
    rating: number;
}

interface TabItem {
    id: number;
    name: string;
}

interface Props {
    genreItems: GenreItem[];
    libraryItems: LibraryItem[];
    tabItems: TabItem[];
    onLibraryItemSelected: (item: LibraryItem) => void;
    onGenreItemSelected: (item: GenreItem) => void;
}

function LeftNavList({ tabItems, libraryItems, genreItems, onLibraryItemSelected, onGenreItemSelected }: Props) {

    //const [selectedIndex, setSelectedIndex] = useState(-1);
    const [currentView, setCurrentView] = useState('Shop');

    const handleGenreClick = (item: GenreItem) => {
        //setSelectedIndex(item.id);
        onGenreItemSelected(item);
    };
    const handleLibraryClick = (item: LibraryItem) => {
        //setSelectedIndex(item.id);
        onLibraryItemSelected(item);
    };
    const handleTabClick = (item: TabItem) => {
        //setSelectedIndex(item.id);
        if (item.name === 'Games') {
            setCurrentView('My Games');
        } else if (item.name === 'Shop') {
            setCurrentView('Shop');
        }
    };

    return (
        <div className="left-Nav-Container">
            <div className = "button-row">
                {tabItems.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => handleTabClick(item)}>
                            <div className="genre-item-content">
                                <span className="genre-item-text">{item.name}</span>
                            </div>
                    </div>
                ))}
            </div>
            {currentView === 'Shop' && (
                <div>
                    {genreItems.map((item) => (
                        <div 
                            className="genre-item"
                            key={item.id} 
                            onClick={() => handleGenreClick(item)}>
                                    <div className="genre-item-image">
                                        <img src={item.image} alt={`${item.name} cover`}  />
                                    </div>
                                    <div className="genre-item-text">{item.name}</div>
                        </div>
                    
                    ))}
                </div>  
            )}
            {currentView === "My Games" && (
                <div>
                    {libraryItems.map((item) => (
                        <div 
                            className="genre-item"
                            key={item.id} 
                            onClick={() => handleLibraryClick(item)}>
                                <div className="genre-item-image">
                                        <img src={item.image} alt={`${item.name} cover`}  />
                                </div>
                                <div className="genre-item-text">{item.name}</div>
                        </div>
                    
                    ))}
                </div>
            )}
        </div>
    );
}

export default LeftNavList;