import Paragrafo from '../Paragrafo/Index'
import { Titulo } from '../Titulo/Styles'

import { Card, LinkBotao } from './Styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
