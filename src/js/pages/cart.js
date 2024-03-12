import remToPx from "../utils/rem";

const closeBtns = document.querySelectorAll(".products__list-close");
const removeBtns = document.querySelectorAll(".products__list-rem");
const addBtns = document.querySelectorAll(".products__list-add");
const total = document.querySelector(".total");
const countDishes = document.querySelector(".banner__text-count");

closeBtns?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".products__list-item");
    card.remove();
  });
});

removeBtns?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const count = e.target
      .closest(".products__list-item")
      .querySelector(".count");

    const price = e.target
      .closest(".products__list-item")
      .querySelector(".price");

    const priceProduct = Number(
      e.target.closest(".products__list-item").dataset.price
    );

    console.log(priceProduct);
    if (Number(count.textContent) > 1) {
      count.textContent = Number(count.textContent) - 1;
      price.textContent = Number(price.textContent) - priceProduct;
    } else {
      const card = e.target.closest(".products__list-item");
      card.remove();
    }
  });
});

addBtns?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const count = e.target
      .closest(".products__list-item")
      .querySelector(".count");

    const price = e.target
      .closest(".products__list-item")
      .querySelector(".price");

    const priceProduct = Number(
      e.target.closest(".products__list-item").dataset.price
    );

    count.textContent = Number(count.textContent) + 1;
    price.textContent = Number(price.textContent) + priceProduct;
  });
});

document.addEventListener("click", () => {
  const allPrices = document.querySelectorAll(".price");
  const products = document.querySelectorAll(".products__list-item");
  countDishes.textContent = `Блюд: ${products.length}`;
  total.textContent = Array.from(allPrices).reduce(
    (accumulator, currentValue) => {
      // Ваша логика обработки элементов
      return Number(accumulator) + Number(currentValue.textContent);
    },
    0
  );
  console.log("products: ", products);
  if (products.length < 1) {
    // document.querySelector('main').style.height = remToPx(118)
    document.querySelector(".banner__text-info").textContent =
      "Товары не добавлены";
    document.querySelector(".btn.open_modal").style.display = "none";
    document.querySelector(".btn.link").style.display = "block";
  }
});
