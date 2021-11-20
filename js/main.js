"use strict";
////////////////
//Mobile menu
const menuButton = document.querySelector(".menu-button");
const navBottom = document.querySelector(".nav__bottom");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("menu-button--open");
  if (menuButton.classList.contains("menu-button--open")) {
    navBottom.style.transform = "translateX(0)";
  } else navBottom.style.transform = "translateX(-100%)";
});

///////////////////
//Show img in gallery
const galleryContainer = document.querySelector(".gallery__imgs");
const galleryImgs = document.querySelectorAll(".gallery__imgs .g");
const imgShow = document.querySelector(".modal-content");
const modal = document.getElementById("myModal");

galleryImgs.forEach((imgBox) => {
  imgBox.addEventListener("click", function () {
    modal.style.display = "block";
    const imgChoose = imgBox.querySelector("img").src;
    imgShow.src = imgChoose;
  });
});
// Get the <span> element that closes the modal
const span = document.querySelector(".modal .close");
// When the user clicks on <span> (x), close the modal
span?.addEventListener("click", function () {
  modal.style.display = "none";
});
// Effect when user hover gallery
const hoverHandler = function (e, grayscale) {
  // e.preventDefault();
  // if (e.target.classList.contains("g")) {
  //   let link = e.target;
  //   console.log(link);
  //   galleryImgs.forEach((el) => {
  //     if (el !== link) el.style.opacity = opacity;
  //     console.log(el);
  //   });
  // }

  // const imgTarget = e.target.closest(".g");
  if (
    e.target.classList.contains("g") ||
    e.target.classList.contains("g-img") ||
    !e.target.classList.contains("full-screen")
  ) {
    let imgTarget = e.target.closest(".g");
    galleryImgs.forEach((el) => {
      let imgEl = el.querySelector(".g-img");
      if (el !== imgTarget) el.querySelector(".g-img").style.filter = grayscale;
    });
  }
};

galleryContainer?.addEventListener("mouseover", function (e) {
  hoverHandler(e, "grayscale(100%)");
});

galleryContainer?.addEventListener("mouseout", function (e) {
  hoverHandler(e, "grayscale(0%)");
});

/////////////////
// When user click project card
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  project.addEventListener("click", () =>
    alert("Sorry 🥲🥲🥲, I will update soon...")
  );
});

/////////////////
// When user click studio card
const studios = document.querySelectorAll(".studio");

studios.forEach((studio) => {
  studio.addEventListener("click", () =>
    alert("Sorry 🥲🥲🥲, I will update soon...")
  );
});

/////////////////
// When user click cafe gallery control
const cafeButtons = document.querySelectorAll(".gallery__control button");

cafeButtons.forEach((cafeButton) => {
  cafeButton.addEventListener("click", () =>
    alert("Sorry 🥲🥲🥲, I will update soon...")
  );
});

///////////
//Image lazy load
const featureImgs = document.querySelectorAll("main img");

featureImgs.forEach((featureImg) => {
  featureImg.classList.add("lazy-img");
});

featureImgs.forEach((featureImg) => {
  setTimeout(() => featureImg.classList.remove("lazy-img"), 700);
});
