import { TimerStatus } from '../../App'
import css from './index.module.scss'

type Props = {
  timerStatus: TimerStatus
  setTimerStatus: (status: TimerStatus) => void
}

const Actions: React.FC<Props> = ({ timerStatus, setTimerStatus }) => {
  return (
    <section className={css.button_container}>
      <button
        disabled={timerStatus === TimerStatus.Running}
        onClick={() => setTimerStatus(TimerStatus.Running)}
      >
        Start
      </button>
    </section>
  )
}

export default Actions
