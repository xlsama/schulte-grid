import { useEffect, useState } from 'react'
import Square from './components/square'
import Timer from './components/timer'
import css from './app.module.scss'
import Actions from './components/actions'

const randomSortArray = (arr: any[]) => {
  const stack = []
  while (arr.length) {
    const index = parseInt((Math.random() * arr.length) as unknown as string)
    stack.push(arr[index])
    arr.splice(index, 1)
  }
  return stack
}

export enum TimerStatus {
  Pending,
  Running,
  Finished,
}

function App() {
  const [layout, setLayout] = useState(5)
  const [squares, setSquares] = useState(
    randomSortArray(
      Array(layout * layout)
        .fill(0)
        .map((v, i) => ({
          checked: false,
          value: i + 1,
        })),
    ),
  )
  const [next, setNext] = useState(0)
  const [timerStatus, setTimerStatus] = useState(TimerStatus.Pending)

  useEffect(() => {
    if (next === squares.length) {
      setTimerStatus(TimerStatus.Finished)
      alert('结束')
    }
  }, [next])

  const validate = (value: number) => {
    if (value === next + 1) {
      setNext((prev) => ++prev)
      return true
    }

    return false
  }

  const handleCheck = (value: number) => {
    if (!validate(value)) {
      alert('不正确')
      return
    }

    setSquares((prev) =>
      prev.map((square) => ({
        ...square,
        checked: value === square.value ? !square.checked : square.checked,
      })),
    )
  }

  return (
    <main className={css.main}>
      <Timer timerStatus={timerStatus} setTimerStatus={setTimerStatus} />
      <Actions timerStatus={timerStatus} setTimerStatus={setTimerStatus} />

      <ul
        className={css.game_container}
        style={{
          gridTemplateColumns: `repeat(${layout}, auto)`,
          gridTemplateRows: `repeat(${layout}, auto)`,
        }}
      >
        {squares.map((item) => {
          return (
            <Square square={item} key={item.value} handleCheck={handleCheck} />
          )
        })}
      </ul>
    </main>
  )
}

export default App
