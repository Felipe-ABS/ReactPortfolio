import './App.css'
import Lista from './components/lista/lista'
import Bin2Dec from './components/bin2Dec/Bin2Dec'

function App() {

  return (
    <>
      <nav>
        {
          // Onde vai ficar a aba de navegação do site
        }
        <h1><a href='#'>Nav Bar</a></h1>
        <ul className='nav-buttons'>
          <li><a href='#' target='_blank'>Home</a></li>
          <li><a href='#' target='_blank'>Projetos</a></li>
          <li><a href='#' target='_blank'>Sobre</a></li>
          <li><a href='#' target='_blank'>Contato</a></li>
        </ul>
      </nav>
      <main>
        {
          // Onde vai ficar o conteúdo principal da página
        }
        <h1>Main Content</h1>
        <Lista />
        <Bin2Dec/>
      </main>
    </>
  )
}

export default App
