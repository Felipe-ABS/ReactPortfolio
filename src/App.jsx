import './App.css'
import {
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Lista from './pages/projects/lista/lista.jsx'
import ErrorPage from './pages/error-page/error-page.jsx'
import Contato from './pages/contato/contato.jsx'
import Testes from './pages/testes/testes.jsx'
import Contact from './pages/routerContactTest/contact.jsx'

function App() {
  return (
    <>
      {
        // Onde vai ficar a aba de navegação do site
        // Ao clicar em "Projetos" ele vai para uma tela com todos os projetos
        // ou abre um tooltip (ou seleção de opções) para escolher os projetos disponíveis
      }
        <nav>
          <Link to={'/'}><h1>Felipe ABS</h1></Link>
          <ul className='nav-buttons'>
            <Link to={'/'}><li>Projetos</li></Link>
            <Link to={'testes'}><li>Testes</li></Link>
            <Link to={'/'}><li>Sobre</li></Link>
            <Link to={'contato'}><li>Contato</li></Link>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path='/' errorElement={<ErrorPage/>} element={<Lista/>} />
            <Route path='contato' errorElement={<ErrorPage/>} element={<Contato />} />
            <Route path='testes' errorElement={<ErrorPage/>} element={<Testes/>}/>
            <Route path='/contacts/:contactId' errorElement={<ErrorPage/>} element={<Contact/>}/>
          </Routes>
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
