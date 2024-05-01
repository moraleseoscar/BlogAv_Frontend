import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function Avatar({ avatar, onDelete, onEdit, isAdmin }) {
  const handleEdit = () => {
    onEdit(avatar);
  };

  const handleDelete = () => {
    onDelete(avatar);
  };

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
          {isAdmin && (
            <>
              <Button variant="info" onClick={handleEdit}>
                Editar
              </Button>{" "}
              <Button variant="danger" onClick={handleDelete}>
                Eliminar
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired, // Propiedad booleana que indica si el usuario es administrador
};

export default Avatar;
