const numLoop = () => {
    const numList = document.getElementById("num-list");
    numList.innerHTML = "";
    const errorP = document.getElementById("error-nums");
    errorP.innerHTML = "";

    //get starting and ending numbers
    let startNum = document.getElementById("txt-start-num").value;
    let endNum = document.getElementById("txt-end-num").value;

    console.log('Looping from ${startNum} to ${endNum}.');

    if(isNaN(startNum) || isNaN(endNum) || startNum.trim() == "" || endNum.trim() == ""){
        errorP.innerHTML = "You must enter number(s)";
        return;
    }

    startNum = parseInt(startNum);
    endNum = parseInt(endNum);

    if(startNum >= endNum){
        errorP.innerHTML = "Ending number must be larger than starting number";
        return;
    }


    //create an li for each number
    //and append it to the list
    for(let i=0; i < 10; i++){
        const li = document.createElement("li");
        //allow you to insert variables inside
        li.innerHTML = i;
        numList.append(li);
    }
};

const startStopCount = (event) => {

    console.log("counting");
    if(event.target.innerHTML.toLowerCase() == "start"){
        event.target.innerHTML = "Stop";
    } else {
        event.target.innerHTML = "Start";
        clearInterval(updateCount);
    }

    const countP = document.getElementById("count-p");
    let counter = 0;

    const updateCount = setInterval(()=>{
        counter++;
        countP.innerHTML = counter;
        if (counter >= 10) {
            clearInterval(updateCount);
        }
    }, 1000);
    //for an assignment we have to make the script edit a css variable

};

const showDetails = (event) => {
    console.log(event.target.innerHTML);
}
document.getElementById("btn-loop-nums").onclick = numLoop;
document.getElementById("btn-count").onclick = startStopCount;
document.querySelectorAll("#toys li").forEach((li)=>{
    li.onclick = showDetails;
});