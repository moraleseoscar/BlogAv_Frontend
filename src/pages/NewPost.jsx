import { useState } from "react";
import Input from "@components/Input";
import { Button } from "react-bootstrap";
import useNavigate from "@hooks/useNavigate";

function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageAvatar, setImageAvatar] = useState("");
  const [element, setElement] = useState("");
  const { page, navigate } = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      content: content,
      image: imageAvatar,
      element_avatar: element,
    };

    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setTitle("");
      setContent("");
      setImageAvatar("");
      setElement("");
      navigate("/posts");

      console.log("Publicación creada exitosamente");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Nueva Publicación</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <Input
          label="Título"
          type="text"
          value={title}
          onChange={(value) => setTitle(value)}
        />
        <Input
          label="Contenido"
          type="text"
          value={content}
          onChange={(value) => setContent(value)}
        />
        <Input
          label="Enlace de Imagen Avatar"
          type="text"
          value={imageAvatar}
          onChange={(value) => setImageAvatar(value)}
        />
        <Input
          label="Elemento"
          type="text"
          value={element}
          onChange={(value) => setElement(value)}
        />
        <Button type="submit" variant="primary">
          Publicar
        </Button>
      </form>
    </div>
  );
}

export default NewPost;
