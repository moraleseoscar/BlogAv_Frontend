import Avatar from "./Avatar.jsx";

function Avatares({ avatares }) {
  return (
    <section id="avatar-list">
      <h2>Lista de Avatares</h2>
      {avatares.map((avatar, index) => (
        <Avatar key={index} avatar={avatar} />
      ))}
    </section>
  );
}

export default Avatares;
