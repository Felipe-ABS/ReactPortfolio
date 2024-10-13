import {
    Routes,
    Route,
    Link
  } from 'react-router-dom'
import ECommerce from '../projects/eCommerce/e-commerce'
import ErrorPage from '../error-page/error-page'
import './project-page.css'

export default function ProjectPage() {
    return (
        <>
            <div>
                <h1>Página de Projetos</h1>
                <h2>Ideias:</h2>
                <p>- Os projetos ficarão numa barra lateral à direita, enquanto na maior parte da página terá um preview com fotos do projeto ao clicar nele.</p>
                <p>- No card dos projetos terá 2 botões, "Preview" e "Abrir Projeto", ao clicar no preview e no card em si, abrirá o preview do projeto, ao clicar em Abrir Projeto, ele abrirá o projeto funcionando em outra aba, de forma independente.</p>
            </div>
            <div className='projectLink'>
                <Link className='link' to='ecommerce'>E-Commerce</Link>
            </div>
            <div className='project-display'>
                <h1>COMEÇO</h1>
                <Routes>
                    <Route path='/ecommerce' errorElement={<ErrorPage/>} element={<ECommerce/>}/>
                </Routes>
                <h1>FIM</h1>
            </div>
        </>
    )
}