import { useState } from 'react'
import Login from './conponenets/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" ">
      <Login />
    </div>
  )
}

export default App
