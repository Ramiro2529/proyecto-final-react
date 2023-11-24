import ListGroup from "react-bootstrap/ListGroup";
import PanelControl from "../panel-component/PanelComponent";
export const ListComponent = ({listaInvitados}) => {
  return (
    <PanelControl>
      <ListGroup>
        {listaInvitados.map((i) => (<ListGroup.Item key={i+1}>{i.nombre}, {i.correo}</ListGroup.Item>))}
      </ListGroup>
    </PanelControl>
  );
};
