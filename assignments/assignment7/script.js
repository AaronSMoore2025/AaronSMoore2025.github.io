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



const bounceBall = (event) => {
    const ball = document.getElementById("soccerBall");
    if(event.target.innerHTML.toLowerCase() == "start"){
        event.target.innerHTML = "Stop";
        console.log("were in");


            counter = 0;
            console.log("were in");

                increaseCount = setInterval(()=>{
                    counter++;
                    ball.style.marginTop = counter + "px";
        
                    if(ball.style.marginTop == "300px"){
                        clearInterval(increaseCount);
    
                        decreaseCount = setInterval(()=>{
                            counter--;
                            ball.style.marginTop = counter + "px";
                
                            if(ball.style.marginTop == "0px"){
                                clearInterval(decreaseCount);
                            }
                        }, 10);
                    }
    
                }, 10);
            

    } else {
        event.target.innerHTML = "Start";
        clearInterval(increaseCount);
    }
};

const showDetails = (event) => {
    /*
   let description = event.target.getAttribute("rel").value;
   description.innerHTML = "description";
   */
    let description = event.target.getAttribute("rel");
    if(event.target.getAttribute("rel") == "Side Plank"){
        document.getElementById("description1").innerHTML = description;
    }else if(event.target.getAttribute("rel") == "Downward Dog"){
        console.log("the ballerina");
        document.getElementById("description2").innerHTML = description;
    }else if(event.target.getAttribute("rel") == "The Ballerina"){
        document.getElementById("description3").innerHTML = description;
    }else if(event.target.getAttribute("rel") == "Hamstring Stretch"){
        document.getElementById("description4").innerHTML = description;
    }else if(event.target.getAttribute("rel") == "The Hula Hoop"){
        document.getElementById("description5").innerHTML = description;
    }else if(event.target.getAttribute("rel") == "The Ooooo"){
        document.getElementById("description6").innerHTML = description;
    }else if(event.target.getAttribute("rel") == "The Hmmmmm"){
        document.getElementById("description7").innerHTML = description;
    }else if(event.target.getAttribute("rel") == "The please don't go"){
        document.getElementById("description8").innerHTML = description;
    }
    
};

document.getElementById("button-start").onclick = bounceBall;

document.querySelectorAll("#poses li").forEach((li)=>{
    li.onclick = showDetails;
});

document.getElementById("arrowUp").onclick = toggleArrow;
document.getElementById("arrowDown").onclick = toggleArrow;
document.getElementById("exercise1Button").onclick = switchExercise1;
document.getElementById("exercise2Button").onclick = switchExercise2;
