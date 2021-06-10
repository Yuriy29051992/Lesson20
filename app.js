//[0...0.999999999]
let secret = Math.floor(Math.random() * 100) + 1;

// 0.99.999999999



let isFail = true;

for(let i = 1; i<= 10; i++) {
  
    let variant = prompt (`ваш ответ (${i}/10)`);

    if(variant == secret){
        alert(`Вы угадали! Таки ${secret}`);
        isFail = false;
    }else if (secret > variant){
        alert('Моё число больше');
    }else {
        alert('Моё число меньше');
    }
}


if(isFail){
alert (`Game Over! ${secret}`);
}
