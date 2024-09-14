import React from 'react'
import { useCharStates } from "../Context/Context";
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useCharStates();

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map((dentist) => (
          <Card  item={dentist} key={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home
