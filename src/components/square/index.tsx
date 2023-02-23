import css from './index.module.scss'

type Props = {
  value: number
}

const Square: React.FC<Props> = ({ value }) => {
  return <li className={css.square}>{value}</li>
}

export default Square
