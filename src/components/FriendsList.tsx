import { useState } from 'react';
import './FriendsList.css';

interface friend {
    name: string;
    gamertag: string;
    status: string;
    friendsSince: string;
    icon: string;
}

interface props {
    friendsList: friend[];
}



function FriendsList ({friendsList}: props) {

    const [selectedFriendIndex, setSelectedFriendIndex] = useState<number | null>(null);

    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'online':
                return 'status-circle online';
            case 'offline':
                return 'status-circle offline';
            case 'appearing offline':
                return 'status-circle appearing-offline';
            default:
                return 'status-circle';
        }
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    return (
        <div className = "friend-list-container">
            <div className = "friend-icon-container">
                {friendsList.map((friend, index) => (
                    <div key={index} className="friend-icon" 
                    onMouseEnter={() => setSelectedFriendIndex(index)} 
                    onMouseLeave={() => setSelectedFriendIndex(null)}>
                        <img src={friend.icon} />
                    </div>
                ))}
            </div>
            
            {selectedFriendIndex !== null && (
                <div 
                    className = "friend-dialog-content"
                    style={{
                        backgroundImage: `url(${friendsList[selectedFriendIndex].icon})`,
                        backgroundSize: '50%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'overlay',
                    }}>
                    <div className = "friend-dialog-header">
                        <span>{friendsList[selectedFriendIndex].gamertag}</span>
                        <span style={{fontSize: '1.5rem', fontFamily: 'cursive', fontWeight: 'normal', color: 'black'}}>{friendsList[selectedFriendIndex].name}</span>
                    </div>
                    <div className = "friend-dialog-info">
                        <span>
                            {friendsList[selectedFriendIndex].status}
                            <span className={getStatusClass(friendsList[selectedFriendIndex].status)}></span>
                        </span>
                        <span style={{fontSize: '1.0rem'}}>
                            Offline since: {formatDate(friendsList[selectedFriendIndex].friendsSince)}</span>
                    </div>
                    
                </div>
            )}
        </div>
        
    );

}
//selectedFriendIndex !== null

export default FriendsList;