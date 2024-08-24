import itens from "../../../itens";
import "./lista.css"

function Lista({nome, idade, funcao, id}) {
    return (
        <ol className="lista-nomes">
            {itens.map((projeto) =>
                <li key={projeto.id}>
                    <div className="cards">
                        <h1>{projeto.nome}</h1>
                        <span>{projeto.idade}</span>
                        <div className="experiencias">
                            <h2>Empresas:</h2>
                            <ul>
                                {projeto.experiencias.map((empresa, id) =>
                                    <li key={id} className="empresa">{empresa.nome_empresa} ({empresa.funcao} de {empresa.anoAdmissao} até {empresa.anoDemissao})</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </li>
            )}
        </ol>
    )
}

export default Lista;