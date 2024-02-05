const changeImg = () => {
    const img1 = document.getElementById("img1");
    img1.src = "images/200px.png";
};

const rotateImg = () => {
    const img2 = document.getElementById("img2");
    rotateImg();
};

document.getElementById("button1").onclick = changeImg;
document.getElementById("button2").onclick = rotateImg;

