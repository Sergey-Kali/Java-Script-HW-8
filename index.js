const mainImage = document.querySelector(".main-image");

function scaleMainImage() {
  mainImage.classList.toggle("main-image__scale");
}

mainImage.addEventListener("click", scaleMainImage);

const navSpan = document.querySelectorAll(".nav-span");

function pressTheKeyToNavigate(e) {
  [...navSpan].forEach((element) => {
    if (e.code[e.code.length - 1] === element.textContent) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

document.addEventListener("keydown", pressTheKeyToNavigate);
