

    var cardposition = new Array();
    cardposition[0] = 'btn0';
    cardposition[1] = 'btn1';
    cardposition[2] = 'btn2';
    cardposition[3] = 'btn3';
    cardposition[4] = 'btn4';
    cardposition[5] = 'btn5';
    cardposition[6] = 'btn6';
    cardposition[7] = 'btn7';
    cardposition[8] = 'btn8';
    cardposition[9] = 'btn9';
    cardposition[10] = 'btn10';
    cardposition[11] = 'btn11';
    cardposition[12] = 'btn12';
    cardposition[13] = 'btn13';
    cardposition[14] = 'btn14';
    cardposition[15] = 'btn15';
    cardposition[16] = 'btn16';
    cardposition[17] = 'btn17';
    cardposition[18] = 'btn18';
    cardposition[19] = 'btn19';
    cardposition[20] = 'btn20';
    cardposition[21] = 'btn21';
    cardposition[22] = 'btn22';
    cardposition[23] = 'btn23';
    cardposition[24] = 'btn24';
    cardposition[25] = 'btn25';
    cardposition[26] = 'btn26';
    cardposition[27] = 'btn27';
    cardposition[28] = 'btn28';
    cardposition[29] = 'btn29';
    cardposition[30] = 'btn30';
    cardposition[31] = 'btn31';
    cardposition[32] = 'btn32';
    cardposition[33] = 'btn33';
    cardposition[34] = 'btn34';
    cardposition[35] = 'btn35';
    cardposition[36] = 'btn36';
    cardposition[37] = 'btn37';
    cardposition[38] = 'btn38';
    cardposition[39] = 'btn39';
    cardposition[40] = 'btn40';
    cardposition[41] = 'btn41';
    cardposition[42] = 'btn42';
    cardposition[43] = 'btn43';
    cardposition[44] = 'btn44';
    cardposition[45] = 'btn45';
    cardposition[46] = 'btn46';
    cardposition[47] = 'btn47';

    var card = new Array();
    // 출력할 진짜 색깔
    card[0] = './images/month_01_1.jpg'; 
    card[1] = './images/month_01_2.jpg'; 
    card[2] = './images/month_01_3.jpg'; 
    card[3] = './images/month_01_4.jpg';

    card[4] = './images/month_02_1.jpg'; 
    card[5] = './images/month_02_2.jpg'; 
    card[6] = './images/month_02_3.jpg'; 
    card[7] = './images/month_02_4.jpg';

    card[8] = './images/month_03_1.jpg'; 
    card[9] = './images/month_03_2.jpg'; 
    card[10] = './images/month_03_3.jpg'; 
    card[11] = './images/month_03_4.jpg';

    card[12] = './images/month_04_1.jpg'; 
    card[13] = './images/month_04_2.jpg'; 
    card[14] = './images/month_04_3.jpg'; 
    card[15] = './images/month_04_4.jpg';

    card[16] = './images/month_05_1.jpg'; 
    card[17] = './images/month_05_2.jpg';
    card[18] = './images/month_05_3.jpg'; 
    card[19] = './images/month_05_4.jpg';

    card[20] = './images/month_06_1.jpg'; 
    card[21] = './images/month_06_2.jpg';
    card[22] = './images/month_06_3.jpg'; 
    card[23] = './images/month_06_4.jpg';

    card[24] = './images/month_07_1.jpg'; 
    card[25] = './images/month_07_2.jpg';
    card[26] = './images/month_07_3.jpg'; 
    card[27] = './images/month_07_4.jpg';

    card[28] = './images/month_08_1.jpg'; 
    card[29] = './images/month_08_2.jpg';
    card[30] = './images/month_08_3.jpg'; 
    card[31] = './images/month_08_4.jpg';

    card[32] = './images/month_09_1.jpg'; 
    card[33] = './images/month_09_2.jpg';
    card[34] = './images/month_09_3.jpg'; 
    card[35] = './images/month_09_4.jpg';

    card[36] = './images/month_10_1.jpg'; 
    card[37] = './images/month_10_2.jpg';
    card[38] = './images/month_10_3.jpg'; 
    card[39] = './images/month_10_4.jpg';

    card[40] = './images/month_11_1.jpg'; 
    card[41] = './images/month_11_2.jpg';
    card[42] = './images/month_11_3.jpg'; 
    card[43] = './images/month_11_4.jpg';

    card[44] = './images/month_12_1.jpg'; 
    card[45] = './images/month_12_2.jpg';
    card[46] = './images/month_12_3.jpg'; 
    card[47] = './images/month_12_4.jpg';

    let arr = [];
        for(let i = 0; i < 48; i++){
            arr.push(Math.floor(Math.random()*48)); 
            for(let c = 0; c<i; c++){
                if (arr[i] === arr[c]) {
                    arr.pop();
                    i--;  
                }
            }
        }
        //배열 정해짐
        var show = 1;
    function random_card(n){
            // 결과를 표시할 element
            const cardElement = document.getElementById(cardposition[n]);
            // 현재 화면에 표시된 값
            if(show%2==1){
            let cardNumber = cardElement.innerHTML;
                cardNumber = '<img src="./images/cardBack.jpg" style="width:60px;">';
            cardElement.innerHTML = cardNumber;
            }else{
                let cardNumber = cardElement.innerHTML;
                cardNumber = '<img src="' + card[arr[n]] + '"style="width:60px;">';
                cardElement.innerHTML = cardNumber;
            }
            show++;
        
    }
    //카드 옮기기
    const draggables = document.querySelectorAll(".draggable");
    const containers = document.querySelectorAll(".container");

    draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
    });

    containers.forEach(container => {
    container.addEventListener("dragover", e => {
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        container.appendChild(draggable);
    });
    });
    
var time = 599;
function timerSet(){
   
    min = parseInt(time/60);
    sec = time%60;

    x=document.getElementById("showTime").innerHTML = min + "분" + sec + "초";
    time--;

    if(time < 0){
        clearInterval(x);
        document.getElementById("showTime").innerHTML = "TIME OVER";
        document.getElementById('colorResult').innerHTML = "TIME OVER";
        btn_group.style.display = "none";
    }
    
}
 
button_nextWord = document.querySelector(".nextWord");
button_start = document.querySelector(".btn_start"); 

btn_group.style.display = "none";
button_nextWord.style.display = "none";

function hideStartBtn(){
    button_start.style.display = "none";
    button_nextWord.style.display = "block";
    btn_group.style.display = "block";
    nextWord.style.display = "block";
}

button_start.addEventListener("click",()=>{
    var intervalId = setInterval(timerSet, 1000);
});


/*
function compareAndResult(){

    // 결과를 표시할 element
  const resultElement = document.getElementById("result");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  if(compareCard[0] == compareCard[1]) {
    number = parseInt(number) + 10;
    }else{
    number = parseInt(number) - 10;
    }
  
    switch(x){
        case 0 :
            if( 0 <= cardNum && cardNum <= 3){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 1 :
            if( 4 <= cardNum && cardNum <= 7){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 2 :
            if( 8 <= cardNum && cardNum <= 11){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 3 :
            if( 12 <= cardNum && cardNum <= 15){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 4 :
            if( 16 <= cardNum && cardNum <= 19){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 5 :
            if( 20 <= cardNum && cardNum <= 23){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 6 :
            if( 24 <= cardNum && cardNum <= 27){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 7 :
            if( 28 <= cardNum && cardNum <= 31){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 8 :
            if( 32 <= cardNum && cardNum <= 35){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 9 :
            if( 36 <= cardNum && cardNum <= 39){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 10 :
            if( 40 <= cardNum && cardNum <= 43){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;
        case 11 :
            if( 44 <= cardNum && cardNum <= 47){
                number = parseInt(number) + 10;
            }else{
                number = parseInt(number) - 10;
            }
            break;

    }

  // 더하기/빼기
  
  if(x == y) {
  number = parseInt(number) + 10;
  }else{
  number = parseInt(number) - 10;
  }
  
  // 결과 출력
  
  resultElement.innerText = number;
           
}
*/