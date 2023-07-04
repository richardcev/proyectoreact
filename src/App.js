import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MyImage from './images/tallermecanico.webp';

function App() {
  return(
    <Container>
    <Row className="mt-5">
      <Col md={6} className="text-center">
        <h1>Bienvenido a Car Shop</h1>
        <p>
          Ofrecemos servicios de recepción de autos para diagnóstico,
          mantenimiento y reparación. Nuestro equipo de expertos se encargará
          de cuidar tu vehículo y garantizar su óptimo funcionamiento.
        </p>
        <Button variant="primary">Solicitar Servicio</Button>
      </Col>
      <Col md={6}>
        <img
          src={MyImage}
          alt="Car Repair"
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
  )

}

export default App;
