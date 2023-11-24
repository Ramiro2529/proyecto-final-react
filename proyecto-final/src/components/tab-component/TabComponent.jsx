import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ListComponent } from "../list-component/ListComponent";
import { useState } from "react";
import FormComponent from "../form-component/FormComponent";
import { InviteComponent } from "../invite-component/InviteComponents";

const TabComponent = () => {
  const [listaInvitados, setListaDeInvitados] = useState([]);
  return (
    <div className="container">
          <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="invite" title="invite">
      <InviteComponent></InviteComponent>
      </Tab>
      <Tab eventKey="form" title="Form">
        <FormComponent
          listaInvitados={listaInvitados}
          setListaDeInvitados={setListaDeInvitados}
        ></FormComponent>
      </Tab>
      <Tab eventKey="list" title="list">
        <ListComponent listaInvitados={listaInvitados}></ListComponent>
      </Tab>
    </Tabs>
    </div>

  );
};

export default TabComponent;
