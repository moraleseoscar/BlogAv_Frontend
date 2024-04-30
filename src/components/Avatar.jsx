import { Button } from "react-bootstrap";

function Avatar({ avatar, onEdit, onDelete }) {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={avatar.image_avatar} alt="aang" />
      </div>
      <div className="avatar-info">
        <h3>{avatar.title}</h3>
        <p>Nación de {avatar.element}</p>
        <p>{avatar.content}</p>
        <br />
        <div className="avatar-actions">
          <Button variant="info" onClick={() => onEdit(avatar)}>
            Editar
          </Button>
          <Button variant="danger" onClick={() => onDelete(avatar)}>
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
