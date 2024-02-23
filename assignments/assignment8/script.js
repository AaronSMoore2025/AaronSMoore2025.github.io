const switcher = () => {
    console.log("were in");
    const currentImage = document.querySelector("#affirmations :not(.hide)");
    let nextImage = currentImage.nextElementSibling;

    if(nextImage == null){
        nextImage = document.querySelector("#affirmations :first-child");
    }

    currentImage.classList.add("hide");
    nextImage.classList.remove("hide");
};

/*
$associatveArray = array(
    "images/garden.jpg" => 
    "images.golden.jpg" =>
    "images/mountain-lake.jpg" =>
    "small-house.jpg" =>
    "snow.jpg" =>
)
*/
setInterval(switcher, 2000);