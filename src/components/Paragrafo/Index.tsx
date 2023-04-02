import { P } from './Styles'

export type Props = {
  children: string
  fontSize?: number
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
