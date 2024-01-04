import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import PanelControl from "../panel-component/PanelComponent";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./FormComponent.css";

const FormComponent = ({ listaInvitados, setListaDeInvitados }) => {
  const [invitado, setInvitado] = useState({
    asistencia: "",
    nombre: "",
    correo: "",
    edad: "",
  });

  const { nombre, correo, edad } = invitado;

  const [validacionSucces, setValidacionSucces] = useState(false);

  const [flag, setflag] = useState(false);
  const [flag2, setflag2] = useState(false);

  const [validacionEdad, setvalidacionEdad] = useState(false);

  const onChecked = () => {
    setflag(!flag);
    if (!flag === true) {
      setInvitado({
        ...invitado,
        asistencia: "Asistirá",
      });
      setflag2(false);
    }
  };

  const onChecked2 = () => {
    setflag2(!flag2);
    if (!flag2) {
      setInvitado({
        ...invitado,
        asistencia: "No Asistirá",
      });
      setflag(false);
    }
  };
  const onChange = (e) => {
    e.preventDefault();
    setInvitado({
      ...invitado,
      [e.target.name]: e.target.value,
    });
    setvalidacionEdad(false);
    setValidacionSucces(false);
    console.log(invitado);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (invitado.edad < 18) {
      setvalidacionEdad(true);
      return;
    }
    setvalidacionEdad(false);
    setListaDeInvitados([...listaInvitados, invitado]);
    console.log(listaInvitados);
    setflag(false);
    setflag2(false);
    setValidacionSucces(true);
    setInvitado({ asistencia: "", nombre: "", correo: "", edad: 0 });
  };
  return (
    <PanelControl>
      <FloatingLabel controlId="floatingName" label="Nombre">
        <Form.Control
          onChange={onChange}
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
        />
      </FloatingLabel>
      <br></br>
      <FloatingLabel controlId="floatingCorreo" label="Correo" className="mb-3">
        <Form.Control
          onChange={onChange}
          type="email"
          placeholder="name@example.com"
          name="correo"
          value={correo}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingEdad" label="Edad" className="mb-3">
        <Form.Control
          onChange={onChange}
          type="number"
          name="edad"
          value={edad}
        />
      </FloatingLabel>

      <Alert show={validacionEdad} variant="danger">
        Eres menor de edad, lo siento.
      </Alert>
      <Alert show={validacionSucces} variant="success">
        Registro completado
      </Alert>

      <div className="separar">
        <Button
          variant="warning"
          disabled={flag}
          onClick={onChecked}
          name="afirmativo"
        >
          Voy
        </Button>
        <Button
          variant="dark"
          disabled={flag2}
          onClick={onChecked2}
          name="negativo"
        >
          No voy
        </Button>
      </div>

      <br></br>
      <br></br>
      <div className="centrar">
        <Button variant="secondary" onClick={onSubmit}>
          Confirmar
        </Button>
      </div>
    </PanelControl>
  );
};

export default FormComponent;
