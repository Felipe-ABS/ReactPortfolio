import './App.css'
import Lista from './components/lista/lista'
import Bin2Dec from './components/bin2Dec/Bin2Dec'

function App() {
  return (
    <>
      <nav>
        {
          // Onde vai ficar a aba de navegação do site
          // Ao clicar em "Projetos" ele vai para uma tela com todos os projetos
          // ou abre um tooltip (ou seleção de opções) para escolher os projetos disponíveis
        }
        <h1><a href='#'>Felipe ABS</a></h1>
        <ul className='nav-buttons'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Projetos</a></li>
          <li><a href='#'>Sobre</a></li>
          <li><a href='#'>Contato</a></li>
        </ul>
      </nav>
      <main>
        <Lista />
      </main>
      <footer>
        {
          // Colocar minha bio, contatos e github
        }
        &copy;2024 FelipeABS
      </footer>
    </>
  )
}

export default App
