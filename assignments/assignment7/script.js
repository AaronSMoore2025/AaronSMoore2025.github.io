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