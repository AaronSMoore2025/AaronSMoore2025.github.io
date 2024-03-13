const getHouse = async() => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showHouse = async() => {
    const houses = await getHouse();
    houses.forEach((house) => {
        document.getElementById("house-section").append(getHouseSection(house));
        document.getElementById("house-section").append(getFloorPlans(house.floor_plans));
    });
};

const getHouseSection = (house) => {
    const section = document.createElement("section")
    section.id = "sectionOne";
    const interiorSection = document.createElement("section");
    const image = document.createElement("img");
    image.src = "https://portiaportia.github.io/json/images/house-plans/" + house.main_image;
    section.append(image);

    const h2 = document.createElement("h2");
    h2.innerHTML = house.name;
    interiorSection.append(h2);

    const text1 = document.createElement("p");
    text1.innerHTML = "Size: " + house.size;
    interiorSection.append(text1);

    const text2 = document.createElement("p");
    text2.innerHTML = "Bedrooms: " + house.bedrooms;
    interiorSection.append(text2);

    const text3 = document.createElement("p");
    text3.innerHTML = "Bathrooms: " + house.bathrooms;
    interiorSection.append(text3);

    const text4 = document.createElement("p");
    text4.innerHTML = "Features: " + house.features;
    interiorSection.append(text4);

    section.append(interiorSection);

    return section;
}

const getFloorPlans = (plans) => {
    const floorSection = document.createElement("section");
    //const interiorFloorSection = document.createElement("section");
    floorSection.id = "floorSection";
    //interiorFloorSection.id = "interiorFloorSection";
    plans.forEach((plan) => {
        const interiorFloorSection = document.createElement("section");
        interiorFloorSection.id = "interiorFloorSection";
        const h1 = document.createElement("h1");
        h1.innerHTML = plan.name;
        interiorFloorSection.append(h1);
        const floorImage = document.createElement("img");
        floorImage.src = "https://portiaportia.github.io/json/images/house-plans/" + plan.image;
        floorImage.id = "floorImage";
        interiorFloorSection.append(floorImage);
        floorSection.append(interiorFloorSection);
    })

    return floorSection;

}

showHouse();