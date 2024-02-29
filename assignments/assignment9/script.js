class tree {
    constructor(treeName, type, growthRate, lifeSpan, habitat, picture){
        this.treeName = treeName;
        this.type = type;
        this.growthRate = growthRate;
        this.lifeSpan = lifeSpan;
        this.habitat = habitat;
        this.picture = picture;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("tree");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.treeName;
        section.append(h3);

        const columns = document.createElement("section");
        columns.classList.add("columns");
        section.append(columns);
        
        const imageSection = document.createElement("section");
        columns.append(imageSection);
        const image = document.createElement("img");
        image.src = "images/" + this.picture;
        imageSection.append(image);

        /*
        const moreSection = document.createElement("section");
        moreSection.classList.add("hidden", "more");
        moreSection.append(this.paragraph("Type : ", this.type));
        moreSection.append(this.paragraph("Growth Rate : ", this.growthRate));
        moreSection.append(this.paragraph("Life Span : ", this.lifeSpan));
        moreSection.append(this.paragraph("Habitat : ", this.habitat));
        moreSection.append(this.paragraph("images/" + this.picture, this.picture));
        columns.append(moreSection);
        */

        section.onclick = (e) => {
            console.log("hi");
            document.getElementById("dialog").style.display = "block";
            const details = document.getElementById("dialog-details");
            const imageDetails = document.getElementById("dialog-image");
            details.innerHTML = "";
            imageDetails.innerHTML = "";
            const header3 = document.createElement("h3");
            const paragraph = document.createElement("p");
            const paragraph1 = document.createElement('p');
            const paragraph2 = document.createElement('p');
            const paragraph3 = document.createElement('p');
            const myImage = document.createElement("img");

            myImage.innerHTML = "images/" + this.picture;
            imageDetails.append(myImage);
            h3.innerHTML = this.treeName;
            details.append(h3);
            paragraph.innerHTML = "Tree Family: " + this.type;
            details.append(paragraph);
            paragraph1.innerHTML = "Growth Rate: " + this.growthRate;
            details.append(paragraph1);
            paragraph2.innerHTML = "Life Span: " + this.lifeSpan;
            details.append(paragraph2);
            paragraph3.innerHTML = "Habitat: " + this.habitat;
            details.append(paragraph3);
            
            
        }

        document.getElementById("dialog-close").onclick = () => {
            document.getElementById("dialog").style.display = "none";
        };
        return section;
    };

};

const trees = [];
trees.push(new tree("Red Wood", "Sequoia sempervirens", "Extremely Fast", "500-1000 years", "California", "redWood.png"));
trees.push(new tree("Oak Tree", "Quercus", "slow", "100-200 years", "Everywhere", "oak.png"));
trees.push(new tree("Pine Tree", "Pinus", "fast", "70 years", "Eastern U.S. and Mountains", "pine.png"));
trees.push(new tree("Birch Tree", "Betula", "medium", "100 years", "North and South America", "birch.png"));

trees.forEach((tree) => {
    document.getElementById("tree-list").append(tree.item);
});