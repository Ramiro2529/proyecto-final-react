import ListGroup from "react-bootstrap/ListGroup";
import PanelControl from "../panel-component/PanelComponent";
export const ListComponent = ({ listaInvitados }) => {

  
  return (
    <PanelControl>
      <ListGroup>
        {listaInvitados.map((i) => (
          <ListGroup.Item
            variant={i.asistencia == "Asistirá" ? "primary" : "danger"}
            key={Math.random()}
          >
            {i.nombre}, {i.asistencia}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </PanelControl>
  );
};