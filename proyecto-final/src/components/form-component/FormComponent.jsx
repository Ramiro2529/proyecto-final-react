import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import PanelControl from "../panel-component/PanelComponent";
const FormComponent = ({ listaInvitados, setListaDeInvitados }) => {
  let invitado = {
    asistencia: "",
    nombre: "",
    correo: "",
    edad: 0,
  };

  const [flag, setflag] = useState(false);

  const onChecked = () => {
    setflag(!flag);
  };
  const onChange = (e) => {
    e.preventDefault();

    invitado.nombre = document.getElementById("nombre").value;
    invitado.correo = document.getElementById("correo").value;
    invitado.edad = document.getElementById("edad").value;
    console.log(invitado);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (invitado.edad < 18) {
      return;
    }
    invitado.asistencia = !flag;
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
          id="nombre"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCorreo" label="Correo" className="mb-3">
        <Form.Control
          onChange={onChange}
          type="email"
          placeholder="name@example.com"
          name="correo"
          id="correo"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingEdad" label="Edad" className="mb-3">
        <Form.Control onChange={onChange} type="number" id="edad" name="edad" />
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
