// Hamburger JS

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

//Carousel JS

document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carouselitem");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carouselbutton"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carouselnav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carouselbutton");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("item-isactive")
        );
        buttons.forEach((button) =>
          button.classList.remove("button-isactive")
        );
  
        items[i].classList.add("item-isactive");
        button.classList.add("button-isactive");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("item-isactive");
    buttons[0].classList.add("button-isactive");
  });