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

const displayImages = () => {
    let imageAttributes = [];
    imageAttributes["images/garden.jpg"] = '<p><a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
    imageAttributes["images/golden.jpg"] = '<p><a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"> Image by wirestock</a> on Freepik</p>';
    imageAttributes["images/mountain-lake.jpg"] = '<p> <a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7"> Image by vecstock</a> on Freepik </p>';
    imageAttributes["images/small-house.jpg"]  = '<p><a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>';
    imageAttributes["images/snow.jpg"] = '<p><a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>'
    


    for(let imageAttribute in imageAttributes){
        const holder = document.getElementById("image-holder");
        const image = document.createElement("img");
        const container = document.createElement("div");
        image.src = imageAttribute;
        container.append(image);
        container.innerHTML += (imageAttributes[imageAttribute]);
        container.classList.add("containerClass");
        holder.appendChild(container);
    };
};


window.onload = () => {
    displayImages();
};
setInterval(switcher, 2000);