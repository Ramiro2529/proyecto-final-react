import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import PanelControl from "../panel-component/PanelComponent";
const FormComponent = ({ listaInvitados, setListaDeInvitados }) => {
  const [invitado, setInvitado] = useState({
    asistencia: "",
    nombre: "",
    correo: "",
    edad: 0,
  });

  const [flag, setflag] = useState(false);

  const onChecked = () => {
    setflag(!flag);
  };
  const onChange = (e) => {
    e.preventDefault();
    setInvitado({
      ...invitado,
      asistencia: flag,
      [e.target.name]: e.target.value,
    });
    console.log(invitado);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (invitado.edad < 18) {
      return;
    }
    setListaDeInvitados([...listaInvitados, invitado]);
    console.log(listaInvitados);
  };
  return (
    <PanelControl>
      <FloatingLabel controlId="floatingName" label="Nombre">
        <Form.Control
          onChange={onChange}
          type="text"
          placeholder="Nombre"
          name="nombre"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCorreo" label="Correo" className="mb-3">
        <Form.Control
          onChange={onChange}
          type="email"
          placeholder="name@example.com"
          name="correo"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingEdad" label="Edad" className="mb-3">
        <Form.Control onChange={onChange} type="number" name="edad" />
      </FloatingLabel>
      <button
        color="green"
        disabled={flag}
        onClick={onChecked}
        name="afirmativo"
      >
        voy
      </button>
      <button color="red" disabled={!flag} onClick={onChecked} name="negativo">
        No voy
      </button>
      <br></br>
      <button onClick={onClick}>Confirmar</button>
    </PanelControl>
  );
};

export default FormComponent;
