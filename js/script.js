const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

var count = 0;

const mariojump = () => {               //fazer o mario pular
    mario.classList.add('mariojump');

    setTimeout(() => {
        mario.classList.remove('mariojump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');  //se bater no tubo parar animações

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '30px';

        clearInterval(loop);
    }

}, 10);

// function contador() 
//     {
//         count++;

//         if(count == pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
//             alert("GameOver");
//         }

//     };


document.addEventListener('keydown', mariojump);