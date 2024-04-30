import { useState, useEffect } from "react";
import Avatares from "@components/Avatares";
import useNavigate from "@hooks/useNavigate";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { navigate } = useNavigate();

  const fetchData = async () => {
    try {
      let response = await fetch("http://127.0.0.1:3000/posts");
      if (!response.ok) {
        throw new Error("Error en la solicitud al servidor");
      }
      let data = await response.json();
      data.reverse();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert(
        "Ocurrió un error al cargar los datos. Por favor, inténtalo de nuevo más tarde."
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const EmptyState = () => {
    return (
      <div>
        <p>No hay publicaciones disponibles.</p>
      </div>
    );
  };

  const handleEdit = (postId) => {
    console.log("Editando post con ID:", postId);
    navigate(`/newPost/${postId}`);
  };

  return (
    <div>
      <header>
        <h1>El Ciclo Eterno: Explorando la Leyenda de los Avatares</h1>
      </header>
      <div className="container">
        {loading ? (
          <p>Cargando...</p>
        ) : posts.length > 0 ? (
          <Avatares avatares={posts} onEdit={handleEdit} />
        ) : posts.length === 0 ? (
          <EmptyState />
        ) : (
          <></>
        )}
      </div>
      <br />
    </div>
  );
}

export default Posts;
