import { useState } from "react";

export default function Bin2Dec() {
    const [binNum, setBinNum] = useState('')

    function calcularBinario(e) {
        e.preventDefault()
        console.log(e.target)
        console.log("Funcionou!");
        console.log("O valor digitado é: " + binNum);
    }

    return (
        /**
         * Nível: 1-Iniciante

            Binário é o sistema numérico no qual todos os computadores digitais são baseados. Portanto, é importante que os desenvolvedores entendam a matemática binária ou de base 2. O objetivo do Bin2Dec é fornecer prática e compreensão de como funcionam os cálculos binários.

            Bin2Dec permite ao usuário inserir strings de até 8 dígitos binários, 0 e 1, em qualquer sequência e então exibir seu equivalente decimal.

            Este desafio exige que o desenvolvedor que o implementa siga estas restrições:

             - Matrizes não podem ser usadas para conter os dígitos binários inseridos pelo usuário
             - A determinação do equivalente decimal de um determinado dígito binário na sequência deve ser calculada usando uma única função matemática, por exemplo, o logaritmo natural. Cabe a você descobrir qual função usar.

             Storias do Usuário

             - O usuário pode inserir até 8 dígitos binários em um campo de entrada
             - O usuário deve ser notificado se algo diferente de 0 ou 1 for inserido
             - O usuário visualiza os resultados em um único campo de saída contendo o equivalente decimal (base 10) do número binário inserido

             Funcionalidade Bônus

             - O usuário pode inserir um número variável de dígitos binários

             Possível solução = Stacks, de Estrutura de Dados
         */
        // Número digitado vezes 2 elevado à posição da direita para a esquerda (n * 2 ^ [i])
        // Ex: 2^3 2^2 2^1 2^0
        //      1   0   1   0
        //      8   0   2   0
        // Em seguida, vai somar os resultados das multiplicações
        // 8 + 0 + 2 + 0 = 10

        <div>
            <form name="binario" onSubmit={calcularBinario}>
                <label>Insira uma sequência binária: </label>
                <input type="text"
                    name="binNumInput"
                    value={binNum}
                    onChange={(e) => {
                            setBinNum(e.target.value)
                            console.log(binNum)
                        }
                    }/>
                <button type="submit">Enviar</button>

            </form>
        </div>
    );
}