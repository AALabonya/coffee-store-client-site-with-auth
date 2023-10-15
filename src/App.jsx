
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'
import Header from './components/Header'

function App() {
  const loadedcoffees = useLoaderData()
const [coffees, setCoffees] = useState(loadedcoffees)


  return (
    <>
     <Header/>
      <h1 className='text-6xl text-purple-600 my-20'>Hot Cold Coffee:{coffees.length}</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'> 
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
      }
     </div>
    </>
  )
}

export default App
