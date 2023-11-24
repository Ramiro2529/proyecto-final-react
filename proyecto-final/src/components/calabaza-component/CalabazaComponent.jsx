import "./CalabazaComponent.css"

const CalabazaComponent = () => {
  return (
    <div className="calabaza">
      <div className="posterior">
        <div className="division division--a"></div>
        <div className="division division--b"></div>
        <div className="division division--c"></div>
      </div>
      <div className="tronco">
        <div className="base-tallo"></div>
        <div className="tallo"></div>
        <div className="fin-tallo"></div>
      </div>
      <div className="anterior">
        <div className="division division--b"></div>
        <div className="division division--c"></div>
        <div className="division division--a"></div>
      </div>
      <div className="cara">
        <div className="ojos">
          <div className="ojo-izq"></div>
          <div className="ojo-der"></div>
        </div>
        <div className="boca">
          <div className="medio">
            <div className="inf"></div>
            <div className="inf"></div>
          </div>
          <div className="izq"></div>

          <div className="der"></div>
        </div>
      </div>
    </div>
  );
};

export default CalabazaComponent;
