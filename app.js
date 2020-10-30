const front = document.querySelector(".front");
const front1 = document.querySelector(".front1");
const front2 = document.querySelector(".front2");
const card = document.querySelector(".card");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const back = document.querySelector(".back");
const back1 = document.querySelector(".back1");
const back2 = document.querySelector(".back2");
const img = document.querySelector("img");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const refresh = document.querySelector(".refresh");
let imgOptions = [
  "magician",
  "highpriestess",
  "theempress",
  "emperor",
  "strength",
  "thefool",
  "thehermit",
  "thelovers",
  "hierophant",
  "wheeloffortune",
  "thehangedman",
  "justice",
  "death",
  "temperance",
  "thedevil",
  "thetower",
  "thestar",
  "themoon",
  "thesun",
  "judgement",
  "theworld",
  "aceofcups",
  "twoofcups",
  "threeofcups",
  "fourofcups",
  "fiveofcups",
  "sixofcups",
  "sevenofcups",
  "eightofcups",
  "nineofcups",
  "tenofcups",
  "pageofcups",
  "knightofcups",
  "queenofcups",
  "kingofcups",
  "aceofswords",
  "twoofswords",
  "threeofswords",
  "fourofswords",
  "fiveofswords",
  "sixofswords",
  "sevenofswords",
  "eightofswords",
  "nineofswords",
  "tenofswords",
  "pageofswords",
  "knightofswords",
  "queenofswords",
  "kingofswords",
  "aceofpentacles",
  "twoofpentacles",
  "threeofpentacles",
  "fourofpentacles",
  "fiveofpentacles",
  "sixofpentacles",
  "sevenofpentacles",
  "eightofpentacles",
  "nineofpentacles",
  "tenofpentacles",
  "pageofpentacles",
  "knightofpentacles",
  "queenofpentacles",
  "kingofpentacles",
  "aceofwands",
  "twoofwands",
  "threeofwands",
  "fourofwands",
  "fiveofwands",
  "sixofwands",
  "sevenofwands",
  "eightofwands",
  "nineofwands",
  "tenofwands",
  "pageofwands",
  "knightofwands",
  "queenofwands",
  "kingofwands",
];
// update images first image
const cardNumber = Math.floor(Math.random() * 77);
const computerChoice = imgOptions[cardNumber];
img.src = `./images/${computerChoice}.jpg`;

// filter first image from array
const newArray = imgOptions.filter((el) => el !== computerChoice);

// update second image
const cardNumber1 = Math.floor(Math.random() * 74);
const computerChoice1 = newArray[cardNumber1];
img1.src = `./images/${computerChoice1}.jpg`;

const newArray1 = newArray.filter((el) => el !== computerChoice1);

const cardNumber2 = Math.floor(Math.random() * 73);
const computerChoice2 = newArray1[cardNumber2];
img2.src = `./images/${computerChoice2}.jpg`;

card.addEventListener("click", () => {
  front.classList.toggle("rotatef");
  back.classList.toggle("rotateb");
  img.classList.toggle("image");
});

card1.addEventListener("click", () => {
  front1.classList.toggle("rotatef");
  back1.classList.toggle("rotateb");
  img1.classList.toggle("image");
});

card2.addEventListener("click", () => {
  front2.classList.toggle("rotatef");
  back2.classList.toggle("rotateb");
  img2.classList.toggle("image");
});

//refresh page to reload card
refresh.addEventListener("click", () => {
  location.reload();
});
