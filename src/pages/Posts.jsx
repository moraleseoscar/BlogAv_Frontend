import { useState, useEffect } from "react";
import Avatares from "@components/Avatares";
import useApi from "@hooks/useApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useNavigate from "@hooks/useNavigate";

function Posts() {
  const { navigate } = useNavigate();
  const { data: posts, loading, error } = useApi("http://127.0.0.1:3000/posts");
  const [reversedPosts, setReversedPosts] = useState([]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const reversed = [...posts].reverse(); // Crear una copia invertida del array
      setReversedPosts(reversed);
    }
  }, [posts]);

  const handleEdit = (dataAvatar) => {
    withReactContent(Swal)
      .fire({
        title: "Editar Avatar", // Título del formulario
        html: `
        <label for="avatar-name" class="swal2-input-label">Nombre de avatar:</label>
        <input id="avatar-name" class="swal2-input" placeholder="Nombre de avatar" value="${dataAvatar.title}" />
        
        <label for="avatar-description" class="swal2-input-label">Descripción:</label>
        <textarea id="avatar-description" class="swal2-textarea" placeholder="Descripción">${dataAvatar.content}</textarea>
        
        <label for="avatar-image" class="swal2-input-label">Enlace de imagen:</label>
        <input id="avatar-image" class="swal2-input" placeholder="Enlace de imagen" value="${dataAvatar.image_avatar}" />
        
        <label for="avatar-nation" class="swal2-input-label">Nación:</label>
        <input id="avatar-nation" class="swal2-input" placeholder="Nación" value="${dataAvatar.element}" />
      `,
        focusConfirm: false,
        showCancelButton: true, // Mostrar botón de cancelar
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
          return {
            title: document.getElementById("avatar-name").value,
            content: document.getElementById("avatar-description").value,
            image: document.getElementById("avatar-image").value,
            element_avatar: document.getElementById("avatar-nation").value,
          };
        },
      })
      .then((result) => {
        if (result && !result.dismiss) {
          const postId = dataAvatar.id;
          fetch(`http://localhost:3000/posts/${postId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(result.value),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error al actualizar el post");
              }
              return response.json();
            })
            .then((data) => {
              console.log("Post actualizado correctamente:", data);
              window.location.reload();
            })
            .catch((error) => {
              console.error("Error al actualizar el post:", error);
            });
        }
      });
  };

  const handleDelete = async (avatar) => {
    const result = await Swal.fire({
      title: "¿Eliminar Avatar?",
      text: "Una vez realizada esta acción, no podrá deshacerla.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:3000/posts/${avatar.id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Error al eliminar el avatar");
        }

        console.log("Avatar eliminado:", avatar);
        navigate("/posts");
        window.location.reload();
      } catch (error) {
        console.error("Error al eliminar el avatar:", error);
      }
    } else {
      console.log("Cancelado");
    }
  };

  const EmptyState = () => {
    return (
      <div>
        <p>No hay publicaciones disponibles.</p>
      </div>
    );
  };

  return (
    <div>
      <header>
        <h1>El Ciclo Eterno: Explorando la Leyenda de los Avatares</h1>
      </header>
      <div className="container">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : reversedPosts && reversedPosts.length > 0 ? (
          <Avatares
            avatares={reversedPosts}
            onDelete={handleDelete}
            onEdit={handleEdit}
            isAdmin={true}
          />
        ) : (
          <EmptyState />
        )}
      </div>
      <br />
    </div>
  );
}

export default Posts;
