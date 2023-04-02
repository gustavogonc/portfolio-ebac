import Titulo from '../../components/Titulo/Index'
import Paragrafo from '../../components/Paragrafo/Index'
import { GitHubSecao } from './Styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
      explicabo temporibus praesentium expedita quidem quia, perspiciatis modi
      natus labore non eaque minima, debitis consequatur sunt inventore tenetur
      dicta qui tempore.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=gustavogonc&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gustavogonc&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
