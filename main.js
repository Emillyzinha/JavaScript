function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// SSEMPRE pensaer: 'e se fosse um instrumento maior?'

// ALL - seleciona todos os selectors encontrados
const listaDeTeclas = document.querySelectorAll('.tecla')
//referencias = criadas ou declaradas com base no valor que vão receber ou guardar

// let contador = 0;

// como que acessa o onclick que está dentro do while?

// console.log('fora 1', contador);

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; // não é bom repetir código
    const instrumento = tecla.classList[1];
    // classList = retorna uma lista de classe a respeito da tecla selecionada, então se o contador estiver em 1, ele retorna a tecla pom e pega o segundo elemento da lista. é para pegar as teclas

    // TEMPLATE STRING
    const idAudio = `#som_${instrumento}`;
    // tudo que é variável coloca um cifrão e chaves ao redor. posso fazer contas nisso também

    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
        // console.log('dentro', contador);
    }
    // função anônima = 

    // console.log('fora', contador);

    // contador += 1;
}
