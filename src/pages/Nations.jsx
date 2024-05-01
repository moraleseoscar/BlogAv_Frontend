import { Row, Col, Card } from "react-bootstrap";

function Nations() {
  return (
    <div>
      <header>
        <h1>Naciones del mundo de Avatar</h1>
      </header>
      <div className="nations">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/96/70/30/967030e7aa51065000266b2109b6cd44.gif"
                alt="Nación del Agua"
                className="nation-image"
              />
              <Card.Body>
                <Card.Title>Nación del Agua</Card.Title>
                <Card.Text>
                  La Nación del Agua está compuesta por dos tribus, la Tribu del
                  Agua del Norte y la Tribu del Agua del Sur. Es conocida por su
                  dominio del agua y su conexión con la luna y los océanos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.makeagif.com/media/10-09-2023/VjZ6PA.gif"
                alt="Nación de la Tierra"
                className="nation-image"
              />
              <Card.Body>
                <Card.Title>Nación de la Tierra</Card.Title>
                <Card.Text>
                  La Nación de la Tierra es conocida por su resistencia y
                  fortaleza. Sus habitantes son maestros en el control de la
                  tierra y la roca, y tienen ciudades impresionantes talladas en
                  las montañas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.makeagif.com/media/11-19-2023/nW6R0n.gif"
                alt="Nación del Fuego"
                className="nation-image"
              />
              <Card.Body>
                <Card.Title>Nación del Fuego</Card.Title>
                <Card.Text>
                  La Nación del Fuego es una sociedad industrializada y
                  militarmente poderosa. Sus habitantes son maestros del fuego y
                  su líder, el Señor del Fuego, es el gobernante absoluto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.imgur.com/EIZMS.gif"
                alt="Nación del Aire"
                className="nation-image"
              />
              <Card.Body>
                <Card.Title>Nación del Aire</Card.Title>
                <Card.Text>
                  La Nación del Aire es conocida por sus monjes pacíficos y por
                  sus habilidades en el control del aire. Sus ciudades flotantes
                  y templos elevados son un testimonio de su dominio del viento
                  y la libertad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Nations;
