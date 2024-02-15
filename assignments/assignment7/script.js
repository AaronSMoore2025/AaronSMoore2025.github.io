const toggleArrow = () => {
    const value = document.getElementById("topLinks");
    value.classList.toggle("hide");
    
    if(document.getElementById("arrowUp").classList.contains("hide")){
        document.getElementById("arrowUp").classList.remove("hide");
        document.getElementById("arrowDown").classList.add("hide");
    }else {
        document.getElementById("arrowUp").classList.add("hide");
        document.getElementById("arrowDown").classList.remove("hide");
    }
};

const switchExercise1 = () => {
    document.getElementById("exercise1Div").classList.remove("hide");
    document.getElementById("exercise2Div").classList.add("hide");
};

const switchExercise2 = () => {
    document.getElementById("exercise2Div").classList.remove("hide");
    document.getElementById("exercise1Div").classList.add("hide");
};


/*
const bounceBall = (event) => {
    if(event.target.innerHTML.toLowerCase() == "start"){
        event.target.innerHTML = "Stop";
    } else {
        event.target.innerHTML = "Start";
        clearInterval(updateCount);
    }

    const ball = document.getElementById("soccerBall");
    counter = 0;

    const updateCount (()=>{
        counter++;
        ball.style.marginTop + "10px";

        if(ball.marginTop == "300px"){
            clearInterval(updateCount);
        }
    }, 500);

};
*/


const showDetails = (event) => {
    
    /*
    description.innerHTML = "hey how ya doin";
    (event.target.getAttribute("rel"))";
    */
    
   let description = event.target.getAttribute("rel)").value;
   descriptionP.innerHTML = description;
};


/*
document.getElementyById("exercise1Button").onclick = bounceBall;
*/
document.querySelectorAll("#poses li").forEach((li)=>{
    li.onclick = showDetails
    
});

document.getElementById("arrowUp").onclick = toggleArrow;
document.getElementById("arrowDown").onclick = toggleArrow;
document.getElementById("exercise1Button").onclick = switchExercise1;
document.getElementById("exercise2Button").onclick = switchExercise2;
