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
        const btn = document.getElementById("myBtn");
        btn.onclick = this.expandContract

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

        const moreSection = document.createElement("section");
        moreSection.classList.add("hidden", "more");
        moreSection.append(this.paragraph("Type : ", this.type));
        moreSection.append(this.paragraph("Growth Rate : ", this.growthRate));
        moreSection.append(this.paragraph("Life Span : ", this.lifeSpan));
        moreSection.append(this.paragraph("Habitat : ", this.habitat));
        moreSection.append(this.paragraph("images/" + this.picture, this.picture));
        columns.append(moreSection);

        return section;
    };

    expandContract(e) {
        const section = e.currentTarget.closest("section.tree-list").querySelector(".more");

        if (section.classList.contains("hidden")) {
            btn.style.display = 'block';
        } else {
            btn.style.display =  'none';
        }

        section.classList.toggle("hidden");
    };

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}:</strong> ${info}`;
        return p;
    }

};

const trees = [];
trees.push(new tree("Red Wood", "Sequoia sempervirens", "Extremely Fast", "500-1000 years", "California", "redWood.png"));
trees.push(new tree("Oak Tree", "Quercus", "slow", "100-200 years", "Everywhere", "oak.png"));
trees.push(new tree("Pine Tree", "Pinus", "fast", "70 years", "Eastern U.S. and Mountains", "pine.png"));
trees.push(new tree("Birch Tree", "Betula", "medium", "100 years", "North and South America", "birch.png"));

trees.forEach((tree) => {
    document.getElementById("tree-list").append(tree.item);
});