import React from 'react'
import { useDentistStates } from "../Context/DentistsContext";
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists } = useDentistStates();
  console.log(dentists);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card key={dentist.id} item={dentist} />
        ))}
      </div>
    </main>
  )
}

export default Home
