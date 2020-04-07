window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#a2a09f",
    "#60d394",
    "#0e5c8f",
    "#e4b90b",
    "#9e2cc4",
    "#8c1f43"
  ];


  //lets get going with the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });


  //Create a Function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function () {
      visual.removeChild(this);
    });
  };
});