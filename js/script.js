const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add('jump');//adiciona a classe jump
    setTimeout(() =>{
        mario.classList.remove('jump')//remove a classe jump
    },500);
}
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;//deslocamento esquerdo da imagem do cano
    // console.log('pipePosition'); amostra em loop se deslocando a esquerda
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    //pega o estilo que ta na imagem do mario
    // e passa o elemento css no lugar de bottom
    //o + no inicio transforma em valor numerico
    //apaga a palavra px da string
    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){//posicao do cano 120 é quando encosta no mario
        // < 80 serve pra fazer com o mario passe no pulo do cano
        //> 0
        pipe.style.animation = 'none';//tira a animacao
        //quando bate ele volta pro inicio
        pipe.style.left = `${pipePosition}px`;//faz ficar onde bateu

        mario.style.animation = 'none';//faz o mario parada no local aonde encostou no tubo
        mario.style.bottom = `${pipePosition}px`;

        mario.src="./images/game-over.png";//troca a imagem
        mario.style.width = '75px';//tamanho da imagem
        mario.style.marginLeft = '50px';//coloca uma margem

        clearInterval(loop);//quando colidi o loop para

    }

},10);

document.addEventListener('keydown', jump);