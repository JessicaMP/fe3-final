import React from 'react'
import { useCharStates } from "../Context/Context";
import Card from '../Components/Card'
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {list} = useCharStates();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {list.map((dentist) => (
          <Link to={"/dentista/" + dentist.id } key={dentist.id}>
            <Card  item={dentist} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home
