import ImgAvatar from "../assets/image-avatar.png";

function Avatar() {
  return (
    <div className="header__img-avatar-container">
      <img className="header__img-avatar" src={ImgAvatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
