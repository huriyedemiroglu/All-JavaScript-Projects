let display = document.querySelector("#displayScreen");

let startBtn = document.querySelector("#start");
let pauseBtn = document.querySelector("#pause");
let resetBtn = document.querySelector("#reset");
let [minute,second,centisecond] = [0,0,0]

let currentInterval = null;

startBtn.addEventListener("click",() =>{
    if (currentInterval !==null){
        clearInterval(currentInterval);
    }
    currentInterval = setInterval(timer,10);
});

pauseBtn.addEventListener("click",() =>{
   clearInterval(currentInterval);

});

resetBtn.addEventListener("click",()=>{
    clearInterval(currentInterval);
    [minute,second,centisecond] = [0,0,0];
    display.innerHTML = "00:00:00";
});

function timer(){
    centisecond +=1;
    if(centisecond ==100){
        centisecond = 0;
        second ++;
        if(second ==60){
            second =0;
            minute ++;
        }
    }

    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let cs = centisecond < 10 ? "0" + centisecond : centisecond;

    display.innerHTML = `${m}:${s}:${cs}`;

}