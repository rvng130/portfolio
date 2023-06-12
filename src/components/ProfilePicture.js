const ProfilePicture = ({ altText }) => {
    return (
          <div className="profile-position">
            <img className="profile-animation" src={require ("../images/me.png" )} alt={altText} />
          </div>
        );
      };
      
    export default ProfilePicture;