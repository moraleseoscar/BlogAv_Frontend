import Image from "react-bootstrap/Image";

function Home() {
  return (
    <div>
      <h1>¡Bienvenido!</h1>
      <p>
        ¡Bienvenido al mundo del Avatar! Descubre la historia, los poderes y las
        aventuras de todos los Avatares a lo largo de las eras. Desde Korra
        hasta Wan, sumérgete en la conexión entre los mundos y las naciones en
        este viaje épico.
      </p>
      <p>Y si no sabes quién es Wan, este blog es para ti.</p>
      <Image
        src="https://i.pinimg.com/originals/76/aa/a1/76aaa1c9342343330d84e146387a24e6.jpg"
        fluid
      />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
