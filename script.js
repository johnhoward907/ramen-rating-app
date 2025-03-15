function displayRamens(ramens) {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; // Clear existing content

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add("ramen-image");

        img.addEventListener("click", () => handleClick(ramen));

        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating || "N/A";
    document.getElementById("ramen-comment").textContent = ramen.comment || "No comment";
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("new-name").value;
        const restaurant = document.getElementById("new-restaurant").value;
        const image = document.getElementById("new-image").value;
        const rating = document.getElementById("new-rating").value;
        const comment = document.getElementById("new-comment").value;

        const newRamen = { name, restaurant, image, rating, comment };

        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.classList.add("ramen-image");
        img.addEventListener("click", () => handleClick(newRamen));

        document.getElementById("ramen-menu").appendChild(img);
        form.reset();
    });
}

function main() {
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg" }
    ];

    displayRamens(ramens);
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);