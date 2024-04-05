import { useState } from 'react'
import ExpensiveCalculation from './components/ExpensiveCalculation'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExpensiveCalculation></ExpensiveCalculation>
    </>
  )
}

export default App
