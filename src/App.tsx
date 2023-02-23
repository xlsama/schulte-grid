import { useState } from 'react'
import Square from './components/square'
import Timer from './components/timer'
import css from './app.module.scss'

function App() {
  const [layout, setLayout] = useState(5)

  return (
    <main className={css.main}>
      <Timer />
      <ul className={css.game_container}>
        {Array(layout * layout)
          .fill(0)
          .map((item, index) => {
            return <Square value={index + 1} key={index} />
          })}
      </ul>
    </main>
  )
}

export default App
