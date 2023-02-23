import { useEffect, useState } from 'react'

const Timer = () => {
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount((count) => (count += 10)), 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (count === 100) {
      setSecond((second) => ++second)
      setCount(0)
    }
  }, [count])

  useEffect(() => {
    if (second === 60) {
      setMinute((minute) => ++minute)
      setSecond(0)
    }
  }, [second])

  return (
    <div className="text-lg font-medium text-[#4ade80] bg-stone-100 inline-block p-2 rounded">
      {minute}:{second}:{count}
    </div>
  )
}

export default Timer
