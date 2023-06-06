const ProfilePicture = ({ altText }) => {
    return (
          <div className="profile-position">
            <img className="profile-animation" src={require ("../images/image.jpg" )} alt={altText} />
          </div>
        );
      };
      
    export default ProfilePicture;