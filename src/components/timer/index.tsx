import { useEffect, useRef, useState } from 'react'
import { TimerStatus } from '../../App'
import css from './index.module.scss'

const format = (time: number) => {
  if (time < 10) {
    return `0${time}`
  }
  return time
}

type Props = {
  timerStatus: TimerStatus
  setTimerStatus: (status: TimerStatus) => void
}

const Timer: React.FC<Props> = ({ timerStatus, setTimerStatus }) => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [millisecond, setMillisecond] = useState(0)
  const timer = useRef(0)

  useEffect(() => {
    if (timerStatus === TimerStatus.Running) {
      const interval = 100
      timer.current = setInterval(() => {
        setMillisecond((prev) => (prev += interval))
      }, interval)
    }

    return () => clearInterval(timer.current)
  }, [timerStatus])

  useEffect(() => {
    if (millisecond >= 1000) {
      setMillisecond(0)
      setSecond((prev) => ++prev)
    }
  }, [millisecond])

  useEffect(() => {
    if (second >= 60) {
      setSecond(0)
      setMinute((prev) => ++prev)
    }
  }, [second])

  useEffect(() => {
    if (minute >= 60) {
      setMinute(0)
      setHour((prev) => ++prev)
    }
  }, [minute])

  return (
    <div className={css.timer}>
      <span>{format(hour)}</span>:<span>{format(minute)}</span>:
      <span>{format(second)}</span>:<span>{format(millisecond / 10)}</span>
    </div>
  )
}

export default Timer
