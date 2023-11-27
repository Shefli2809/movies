const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const yayBtn = document.querySelector(".yay-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you in 5!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  yesBtn.style.display = "none"
  noBtn.style.display = "none"
  yayBtn.style.display = "block"
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yayBtn.addEventListener("click", () => {
  gif.src = "https://media.giphy.com/media/r1KxZq1Q3MxtXn9IE8/giphy.gif";
});