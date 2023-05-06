const countDate = new Date().setHours(new Date().getHours() + 216);
let previous;

setInterval(() => {
  const currentDate = new Date().getTime();
  const timeDiffrence = Math.floor((countDate - currentDate) / 1000);
  if (timeDiffrence !== previous) {
    flipAllCards(timeDiffrence);
  }
  previous = timeDiffrence;
}, 250);

const flipAllCards = (time) => {
  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time / 3600) % 24);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);

  const dayCard = document.querySelector(".days >.flip__card ");
  const hoursCard = document.querySelector(".hours >.flip__card ");
  const minutesCard = document.querySelector(".minutes >.flip__card ");
  const secondsCard = document.querySelector(".seconds >.flip__card ");

  flipCard(dayCard, days);
  flipCard(hoursCard, hours);
  flipCard(minutesCard, minutes);
  flipCard(secondsCard, seconds);
};

const flipCard = (card, time) => {
  time = String(time).padStart(2, "0");
  const currentValue = card.querySelector(".top").innerText;
  if (time == currentValue) return;
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  topFlip.classList.add("top");
  topFlip.innerText = currentValue;

  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  bottomFlip.classList.add("bottom");
  bottomFlip.innerText = time;

  const topHalf = card.querySelector(".top");
  const bottomHalf = card.querySelector(".bottom");
  topFlip.addEventListener("animationend", () => {
    topHalf.innerText = time;
  });
  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationstart", () => {
    bottomHalf.innerText = time;
    bottomFlip.remove();
  });

  card.appendChild(topFlip);
  card.appendChild(bottomFlip);
};
