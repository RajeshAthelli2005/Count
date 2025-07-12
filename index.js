const decreasebt = document.getElementById("decreasebt")
const increasebt = document.getElementById("increasebt")
const resetbt = document.getElementById("resetbt")
let count = 0;

increasebt.onclick = function(){
    count++;
    countlabel.textContent = count;

}
decreasebt.onclick = function(){
    count--;
    countlabel.textContent = count;
    
}
resetbt.onclick = function(){
    count=0;
    countlabel.textContent = count;
    
}
