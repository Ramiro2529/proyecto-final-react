import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalabazaComponent from "../calabaza-component/CalabazaComponent";

const PanelControl = (props) => {


  return (

    <Container fluid>
      <Row>
        <Col>
        <CalabazaComponent></CalabazaComponent>
        </Col>
        <Col xs={6}>
          <div>{props.children}</div>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
  );
};

export default PanelControl;
