const indicator = document.getElementById("indicator");

/* ========== Products Slider =========== */
const productSwiper = new Swiper(".product-swiper", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  watchOverflow: true,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
    lockClass: "no",
  },
  breakpoints: {
    900: {
      slidesPerView: 2,
    },
  },
});

/* ========== Fetch the Products =========== */

const getProducts = async () => {
  try {
    const results = await fetch("./data/products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

const ProductsWrapper = document.getElementById("products-wrapper");

window.addEventListener("DOMContentLoaded", async function () {
  let products = await getProducts();
  products = products.filter((product) => product.category === "Burger");
  displayProductItems(products);
});

/* ========== Display Products =========== */
const displayProductItems = (items) => {
  let displayProduct = items.map(
    (product) => ` 
                <div class="swiper-slide">
                  <div class="product">
                    <img src=${product.url} alt="" />
                    <div class="overlay">
                      <h4>${product.title}</h4>
                      <div class="d-flex">
                        <span class="price">$10</span>
                        <span class="rating"><i class="bx bxs-star"></i> 5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
                  `
  );

  displayProduct = displayProduct.join("");
  if (ProductsWrapper) {
    ProductsWrapper.innerHTML = displayProduct;
  }
};

/* ========== Filter Products =========== */
const filters = [...document.querySelectorAll(".filters div")];

filters.forEach((filter) => {
  filters[0].classList.add("active");
  filter.addEventListener("click", async (e) => {
    let target = e.target;
    if (!target) return;
    const id = target.getAttribute("data-filter");
    const products = await getProducts();
    filters.forEach((btn) => {
      btn.classList.remove("active");
    });
    target.classList.add("active");

    let menuCategory = products.filter((product) => {
      if (product.category === id) {
        return product;
      }
    });

    displayProductItems(menuCategory);
    productSwiper.update();
  });
});
