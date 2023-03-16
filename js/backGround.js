const images = ["a.jpg", "b.jpg", "d.jpg"];

const randomImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("backgroundImag");
bgImage.src=`img/${randomImages}`;

const body =document.body.appendChild(bgImage);

