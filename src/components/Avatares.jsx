import PropTypes from "prop-types";
import Avatar from "./Avatar.jsx";
import { Button } from "react-bootstrap";
import useNavigate from "@hooks/useNavigate";

function Avatares({ avatares, onDelete, onEdit, isAdmin }) {
  const { navigate } = useNavigate();

  const handleNavigateToNewPost = () => {
    navigate("/newPost");
  };

  return (
    <section>
      <div className="avatar-header">
        <h2>Lista de Avatares</h2>
        {isAdmin && (
          <Button
            variant="secondary"
            className="add-avatar-btn"
            href="#/newPost"
            onClick={handleNavigateToNewPost}
          >
            + Agregar
          </Button>
        )}
      </div>
      {avatares.map((avatar, index) => (
        <Avatar
          key={index}
          avatar={avatar}
          onDelete={onDelete}
          onEdit={onEdit}
          isAdmin={isAdmin} // Pasar el estado del rol del usuario a Avatar
        />
      ))}
    </section>
  );
}

Avatares.propTypes = {
  avatares: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired, // Propiedad booleana que indica si el usuario es administrador
};

export default Avatares;
