import { useState } from 'react'
import Timer from './components/timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="text-center">
      <Timer />
    </main>
  )
}

export default App
