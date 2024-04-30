import Avatar from "./Avatar.jsx";
import { Button } from "react-bootstrap";
import useNavigate from "@hooks/useNavigate";

function Avatares({ avatares }) {
  const { navigate } = useNavigate();

  const handleNavigateToNewPost = () => {
    navigate("/newPost");
  };

  const handleEdit = (avatar) => {
    // Lógica para editar el avatar
    console.log("Editar avatar:", avatar);
  };

  const handleDelete = async (avatar) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${avatar.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el avatar");
      }

      console.log("Avatar eliminado:", avatar);
    } catch (error) {
      console.error("Error al eliminar el avatar:", error);
    }
  };

  return (
    <section>
      <div className="avatar-header">
        <h2>Lista de Avatares</h2>
        <Button
          variant="secondary"
          className="add-avatar-btn"
          onClick={handleNavigateToNewPost}
        >
          + Agregar
        </Button>
      </div>
      {avatares.map((avatar, index) => (
        <Avatar
          key={index}
          avatar={avatar}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export default Avatares;
