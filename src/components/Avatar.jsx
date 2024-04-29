function Avatar({ avatar }) {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={avatar.image_avatar} alt="aang" />
      </div>
      <div className="avatar-info">
        <h3>{avatar.title}</h3>
        <p>Nación de {avatar.element}</p>
        <p>{avatar.content}</p>
      </div>
    </div>
  );
}

export default Avatar;
