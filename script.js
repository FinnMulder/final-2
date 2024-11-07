script.js;
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".grachten-video");
  video.play().catch((error) => {
    console.log("Autoplay is mogelijk geblokkeerd door de browser:", error);
  });
});
