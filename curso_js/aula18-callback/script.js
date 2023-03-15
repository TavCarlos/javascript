function NewButton(txt, callback){ //criando uma função, eu consigo criar outros botões. aqui callback é uma função que é passada como parâmetro para a função NewBytton

    const $body = document.querySelector('body') //peguei o body na variável $body
    const $button = document.createElement('button')
    $button.textContent = txt; //adiciono um texto dentro do elemento botão
    
    callback($button); //chamo a função callback e retorno o $botton; consigo personalizar o botão antes da sua inserção

    $body.insertAdjacentElement("beforeend", $button) //inserir o button no body antes do </body>

    return $button //assim eu coloca o button para fora da função
}

NewButton("Login", (button) => { //função callback com retorno do $button
    button.style.cssText = `
    font-size: 20px;
    `;

    button.addEventListener('click', () => {
        console.log('oi')
    })
}); //callback é a representação dessa função aqui



NewButton("Signup", (button) => {
    button.style.cssText = `
        font-size: 30px;
        color: red;
    `
});
