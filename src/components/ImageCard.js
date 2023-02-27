
const ImageCard = ({ image }) => {


  const { urls, likes, user } = image;


  return (
    <div className="card">
      <img className="card-img" src={urls.small} alt="" />
      <div className="user">
        <img
          src={user.profile_image.medium}
          alt={user.username}
          className="rounded-full mr-2 w-10 md:w-auto"
        />
        <p>{user.first_name} {user.last_name}</p>
        <p>Likes = {likes}</p>

      </div>
    </div>
  );
};

export default ImageCard;
