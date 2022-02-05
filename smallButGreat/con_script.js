
colorNum = 'global';

function random_colorName(){

    var realColor = new Array();
    // 출력할 진짜 색깔
    realColor[0] = '#DB4437'; //빨간색
    realColor[1] = '#000000'; //검은색
    realColor[2] = '#F4B400'; //노란색
    realColor[3] = '#0F9D58'; //초록색
    realColor[4] = '#4285F4'; //파란색
    realColor[5] = '#7D3C98'; //보라색
    var realColorNum = Math.floor( Math.random() * (realColor.length-1) );

    var diffColor = new Array();
    // 출력할 색깔이름
    diffColor[0] = '빨간색';
    diffColor[1] = '검은색';
    diffColor[2] = '노란색';
    diffColor[3] = '초록색';
    diffColor[4] = '파랑색';
    diffColor[5] = '보라색';
    colorNum = Math.floor( Math.random() * (diffColor.length-1) );

    // 결과를 표시할 element
    const colorElement = document.getElementById('colorResult');
    // 현재 화면에 표시된 값
    let colorNumber = colorElement.innerHTML;

        //맞추어야 할 색깔과 출력되는 색깔 이름이 같은 경우 제외해야 함
        //제대로 제외가 안되고 있음...화면에는 이전과 동일한 것으로 나타나는데 그냥 내부 함수 에서만 바뀜..ㅠㅠ
       // if( realColorNum == colorNum){
        // random_colorName();
        //}else{
          colorNumber = '<span style="color:'+ realColor[realColorNum] +'">' + diffColor[colorNum] + '</span>';
         //document.write('<span style="color:'+ realColor[realColorNum] +'; font-size:1000%; ">' + '<b>' + diffColor[colorNum] + '</b>' + '</span>');
        //}  

    // 결과 출력
    colorElement.innerHTML = colorNumber; 
}

//점수 계산
function compare(x){
    // 결과를 표시할 element
  const resultElement = document.getElementById("result");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;


  // 더하기/빼기
  if(x == colorNum) {
  number = parseInt(number) + 10;
  }else{
  number = parseInt(number) - 10;
  }

  // 결과 출력
  
  resultElement.innerText = number;
           
}
var time = 59;
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

result.style.display = "none";
scoreNow.style.display = "none";
btn_group.style.display = "none";
button_nextWord.style.display = "none";

function hideStartBtn(){
    button_start.style.display = "none";
    button_nextWord.style.display = "block";
    scoreNow.style.display = "inline-block";
    result.style.display = "inline-block";
    btn_group.style.display = "block";
    nextWord.style.display = "block";
}

button_start.addEventListener("click",()=>{
    var intervalId = setInterval(timerSet, 1000);
});


