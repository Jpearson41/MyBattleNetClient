import './ProfileComponent.css';

interface profile {
  name: string;
  gamertag: string;
  status: string;
  icon: string;
}

interface props {
    profile: profile,

}

function Profile({profile}:props) {
    return (
      <div className='profile-container'>
        <div  className="profile-icon">
            <img src={profile.icon} />
        </div>
        <div className="profile-details">
            <span className="profile-gamertag">{profile.gamertag}</span>
        </div>
      </div>
    );
}

export default Profile;