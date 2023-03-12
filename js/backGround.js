const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg", "p7.jpg", "p8.jpg"];

const randomImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${randomImages}`;

const body =document.body.appendChild(bgImage);


console.log(images);
console.log(randomImages);

console.log(bgImage);