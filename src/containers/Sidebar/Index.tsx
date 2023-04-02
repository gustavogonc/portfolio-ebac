import Avatar from '../../components/Avatar/Index'
import Paragrafo from '../../components/Paragrafo/Index'
import Titulo from '../../components/Titulo/Index'

import { Descricao, BotaoTema, SidebarContainer } from './Styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gustavo Gonçalves</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        gustavogonc
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full-Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
