function Lista() {
    const lista = [
        1,
        2,
        3
    ] // Se coloca na Key da tag a variável de onde você quer pegar a informação, nesse caso a lista de array
    return (
        <ul>
            <li>{lista}</li>
        </ul>
    )
}

export default Lista;