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
    });
};

const getHouseSection = (house) => {
    const section = document.createElement("section")
    const image = document.createElement("img");
    image.src = "https://portiaportia.github.io/json/images/house-plans/farm.webp";
    section.append(image);

    const h2 = document.createElement("h2");
    h2.innerHTML = house.name;
    section.append(h2);

    const text1 = document.createElement("p");
    text1.innerHTML = "Size: " + house.size;
    section.append(text1);

    const text2 = document.createElement("p");
    text2.innerHTML = "Bedrooms: " + house.bedrooms;
    section.append(text2);

    const text3 = document.createElement("p");
    text3.innerHTML = "Bathrooms: " + house.bathrooms;
    section.append(text3);

    const text4 = document.createElement("p");
    text4.innerHTML = "Featrues: " + house.features;
    section.append(text4);





    return section;
}

showHouse();