
const pictureSwitch = () => {
    const value = document.getElementById("exercise1Input").value;
    if (value == "b") {
        document.getElementById("exercise1Image").src="images/read.jpg";
    }else if(value == "c") {
        document.getElementById("exercise1Image").src="images/clown.jpg";
    }else if(value == "p") {
        document.getElementById("exercise1Image").src="images/birthday.jpg";
    }else if(value == "r"){
        document.getElementById("exercise1Image").src="images/rain.jpg";
    }else if(value == "s"){
        document.getElementById("exercise1Image").src="images/shovel.jpg";
    }else if(value == "w"){
        document.getElementById("exercise1Image").src="images/work.jpg";
    }

};

const pictureSlide = () => {
    const image = document.getElementById("exercise2Image");
    const input = document.getElementById("exercise2Input").value;
    if(input == 0){
        image.src="images/yoga1.jpg";
    } else if(input == 1){
        image.src="images/yoga2.jpg";
    } else if(input == 2) {
        image.src="images/yoga3.jpg";
    } else if(input == 3) {
        image.src="images/yoga4.jpg";
    } else if(input == 4) {
        image.src="images/yoga5.jpg";
    } else if(input == 5){
        image.src="images/yoga6.jpg";
    } else if(input == 6){
        image.src="images/yoga7.jpg";
    } else if(input == 7){
        image.src="images/yoga8.jpg";
    }
};

/*
const toggleHamburger = () => {
    document.getElementById("main-nav1").classList.toggle("hide");
};
*/

const toggleArrow = () => {
    const value = document.getElementById("nav-items");
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

document.getElementById("exercise1Input").oninput = pictureSwitch;
document.getElementById("exercise2Input").oninput = pictureSlide;
document.getElementById("arrowUp").onclick = toggleArrow;
document.getElementById("arrowDown").onclick = toggleArrow;
document.getElementById("exercise1Button").onclick = switchExercise1;
document.getElementById("exercise2Button").onclick = switchExercise2;
