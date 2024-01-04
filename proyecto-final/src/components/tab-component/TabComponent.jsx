import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ListComponent } from "../list-component/ListComponent";
import { useState } from "react";
import FormComponent from "../form-component/FormComponent";
import { InviteComponent } from "../invite-component/InviteComponents";
import './TabComponent.css';

const TabComponent = () => {
  const [listaInvitados, setListaDeInvitados] = useState([]);
  return (
    <div className="container">
          <Tabs 
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="invite" title="Inivitación">
      <InviteComponent></InviteComponent>
      </Tab>
      <Tab eventKey="form" title="Formulario de confirmación">
        <FormComponent
          listaInvitados={listaInvitados}
          setListaDeInvitados={setListaDeInvitados}
        ></FormComponent>
      </Tab>
      <Tab eventKey="list" title="Lista de invitados">
        <ListComponent listaInvitados={listaInvitados}></ListComponent>
      </Tab>
    </Tabs>
    </div>

  );
};

export default TabComponent;
