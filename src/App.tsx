import Projetos from './containers/Projetos/Index'
import Sidebar from './containers/Sidebar/Index'
import Sobre from './containers/Sobre/Index'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
