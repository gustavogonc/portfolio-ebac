import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos/Index'
import Sidebar from './containers/Sidebar/Index'
import Sobre from './containers/Sobre/Index'
import EstiloGlobal, { Container } from './styles'
import temaLight from './Themes/Light'
import temaDark from './Themes/Dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
