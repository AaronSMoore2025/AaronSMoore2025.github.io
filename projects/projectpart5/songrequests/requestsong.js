const getSongs = async() => {
    const url = "requestsong.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showSongs = async() => {
    const songs = await getSongs();
    songs.forEach((song) => {
        document.getElementById("songSection").append(getSongSection(song));
    });
};

const getSongSection = (song) => {
    const image = document.createElement("img");
    image.id = "image";
    const section = document.createElement("section");
    section.id = "sectionOne";
    const titleSection = document.createElement("section");
    titleSection.id = "titleSection";
    const informationSection = document.createElement("section");
    informationSection.id = "informationSection";

    const songImage = document.createElement("img");
    songImage.innerHTML = song.image;
    image.append(songImage);

    const h1 = document.createElement("h1");
    h1.innerHTML = song.name;
    titleSection.append(h1);

    const artist = document.createElement("p");
    artist.innerHTML = song.artist;
    informationSection.append(artist);

    const genre = documnet.createElemement("p");
    genre.innerHTML = song.genre;
    informationSection.append(genre);

    section.append(image);
    section.append(titleSection);
    section.append(informationSection);

    return section;
};

showSongs();