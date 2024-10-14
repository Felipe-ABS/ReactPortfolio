import {
    Routes,
    Route,
    Link
  } from 'react-router-dom'
import ECommerce from '../projects/eCommerce/e-commerce'
import ErrorPage from '../error-page/error-page'
import './project-page.css'
import ProjectButton from '../../components/project-button/ProjectButton'

export default function ProjectPage() {
    return (
        <>
            <div className='project-page'>
                <div className="title">
                    <h1>Página de Projetos</h1>
                    <h2>Ideias:</h2>
                    <p>- Os projetos ficarão numa barra lateral à direita, enquanto na maior parte da página terá um preview com fotos do projeto ao clicar nele.</p>
                    <p>- No card dos projetos terá 2 botões, "Preview" e "Abrir Projeto", ao clicar no preview e no card em si, abrirá o preview do projeto, ao clicar em Abrir Projeto, ele abrirá o projeto funcionando em outra aba, de forma independente.</p>
                </div>
                <div className='project-link'>
                    <Link className='link' to='ecommerce'><span>E-Commerce</span></Link>
                </div>
                <div className="display-box">
                    <div className='project-preview'>
                        <h1>COMEÇO</h1>
                        <Routes>
                            <Route path='/ecommerce' errorElement={<ErrorPage/>} element={<ECommerce/>}/>
                        </Routes>
                        <h1>FIM</h1>
                    </div>
                    <div className="projects">
                        <ol className="project-list">
                            <li className="project-item"><ProjectButton/>1</li>
                            <li className="project-item"><ProjectButton/>2</li>
                            <li className="project-item"><ProjectButton/>3</li>
                            <li className="project-item"><ProjectButton/>4</li>
                            <li className="project-item"><ProjectButton/>5</li>
                        </ol>
                    </div>
                </div>
            </div>
            
        </>
    )
}