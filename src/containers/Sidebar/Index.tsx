import Avatar from '../../components/Avatar/Index'
import Paragrafo from '../../components/Paragrafo/Index'
import Titulo from '../../components/Titulo/Index'

import { Descricao, BotaoTema, SidebarContainer } from './Styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
