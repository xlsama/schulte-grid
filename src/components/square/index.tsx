import css from './index.module.scss'

type Props = {
  square: { value: number; checked: boolean }
  style?: React.CSSProperties
  handleCheck: (value: number) => void
}

const Square: React.FC<Props> = ({
  square: { value, checked },
  style,
  handleCheck,
}) => {
  return (
    <li
      className={`${css.square} ${checked ? css.checked : ''}`}
      style={style}
      onClick={() => handleCheck(value)}
    >
      {value}
    </li>
  )
}

export default Square
