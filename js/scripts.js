// constants for query selector
const docHtml = document.querySelector("html");
const myStudentId = document.querySelector("#myStudentId");
const custNum = document.querySelector("#customNumber");
const custColor = document.querySelector(".custColor");
const randColor = document.querySelector(".randColor");
const imageSelect = document.querySelector("#imageSelect");
const images = document.querySelector("#images");

var imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", ];
var chosenImage;
var color; //chosen or random color number

// function to change bg color from user input and add student id
function changeCustomColor() {

    myStudentId.textContent = "200524341";

    color = custNum.value;
    colorSelector(color);
}

// function to change bg color from random no.
function changeRandomColor() {
    color = Math.floor(Math.random() * 107) - 7;
    colorSelector(color);
}

// changes background color depending on the received value
function colorSelector(color) {
    if (color < 0 || color >= 100) {
        docHtml.style.backgroundColor = "red";
    }
    else if (color >= 0 && color < 20) {
        docHtml.style.backgroundColor = "green";
    }
    else if (color >= 20 && color < 40) {
        docHtml.style.backgroundColor = "blue";
    }
    else if (color >= 40 && color < 60) {
        docHtml.style.backgroundColor = "orange";
    }
    else if (color >= 60 && color < 80) {
        docHtml.style.backgroundColor = "purple";
    }
    else if (color >= 80 && color < 100) {
        docHtml.style.backgroundColor = "yellow";
    }
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array

    // adds options to the select element
    if (imageSelect.length < 2 ) {
        for (let i = 1; i < imgArray.length + 1; i++) {
            var option = document.createElement("option");
            option.textContent = "img" + i + ".jpg";
            imageSelect.appendChild(option);
        }
    }
}

// function to change image
function changeImage() {

    // deletes "Please choose..." option when any of the images is chosen for the first time
    if (imageSelect[0].textContent === "Please choose...") {
        imageSelect.remove(imageSelect[0]);
    }

    // changes image
    chosenImage = imageSelect.value;
    images.setAttribute("src", "img/" + chosenImage);

}

// event listeners for on click event of buttons and select
custColor.addEventListener("click", changeCustomColor);
randColor.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);

// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);