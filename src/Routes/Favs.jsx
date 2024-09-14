import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useCharStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist) => (
          <Card  item={dentist} key={dentist.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
