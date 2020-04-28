export function allProducts () {

    const nextProduct = `
    <div class="row">
        <div class="tile col-6 col-md-3">
          <img class="tile__photo" src="https://via.placeholder.com/309x390" alt="">
          <div class="tile__description">
            <p>product</p>
            <p class="tile__price">$ 144</p>
          </div>
        </div>
        <div class="tile col-6 col-md-3">
          <img class="tile__photo" src="https://via.placeholder.com/309x390" alt="">
          <div class="tile__description">
            <p>product</p>
            <p class="tile__price">$ 144</p>
          </div>
        </div>
        <div class="tile col-6 col-md-3">
          <img class="tile__photo" src="https://via.placeholder.com/309x390" alt="">
          <div class="tile__description">
            <p>product</p>
            <p class="tile__price">$ 144</p>
          </div>
        </div>
        <div class="tile col-6 col-md-3">
          <img class="tile__photo" src="https://via.placeholder.com/309x390" alt="">
          <div class="tile__description">
            <p>product</p>
            <p class="tile__price">$ 144</p>
          </div>
        </div>
      </div>`;

    const allProductsButton = document.querySelector('.button--products');
    const allProductsSection = document.querySelector('.exposition__items-container');

    allProductsButton.addEventListener("click", () => {
        allProductsButton.style.display = 'none';
        allProductsSection.innerHTML += nextProduct;
    });
}