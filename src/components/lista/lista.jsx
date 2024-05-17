import itens from "../../itens";

function Lista({nome, idade, funcao, id}) {
    // const lista = [
    //     1,
    //     2,
    //     3
    // ] // Se coloca na Key da tag a variável de onde você quer pegar a informação, nesse caso a lista de array
    // console.log(Math.floor(Math.random()) * 10);
    // console.log(chave);
    // console.log(id);
    return (
        <ol>
            {itens.map((projeto) =>
                <li key={projeto.id}>
                    <div>
                        <h1>{projeto.nome}</h1>
                        <p>{projeto.idade}</p>
                        <span>{projeto.funcao}</span>
                    </div>
                </li>
            )}
        </ol>
    )
}

export default Lista;