const changeImg = () => {
    const img1 = document.getElementById("img1");
    img1.src = "images/200px.png";
};

const rotateImg = () => {
    const img2 = document.getElementById("img2");
    let root = document.querySelector(":root");
    let angle = document.getElementById('inpAngle').value;
    root.style.setProperty("--rotatePosition", angle + "deg");
};

const addImg = () => {
    const playground = document.getElementById("playground");
    const star = document.createElement("img");
    star.src="images/star.png";
    playground.append(star);
};

document.getElementById("button1").onclick = changeImg;
document.getElementById("button2").onclick = rotateImg;
document.getElementById("three").onclick = addImg;

