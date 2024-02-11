
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



const toggleHamburger = () => {
    document.getElementById("main-nav1").classList.toggle("hide");
};

document.getElementById("exercise1Input").oninput = pictureSwitch;
document.getElementById("hamburger").onclick = toggleHamburger;
