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

const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
};

document.getElementById("exercise2Input").oninput = pictureSlide;