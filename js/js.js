const input = document.querySelector("#inputform");
let card = [];

inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = e.target[0].value;
  const title = e.target[1].value;
  const chas = e.target[2].value;
  const price = e.target[3].value;

  const cards = {
    url: url,
    title: title,
    chas: chas,
    price: price,
    id: card.length,
  };

  card.push(cards);

  this.reset();

  render();
});

const productlist = document.querySelector("#productlist");

function render() {
  productlist.innerHTML = "";
  card.forEach((card, index) => {
    const template = `
    <li class="myAnim col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-5">
    <div class="header_li">
      <div class="position-relative img_love">
        <img
          src="${card.url}"
          alt="${card.url}"
          width="100%"
          height="200px"
        />
        <i class="fa-solid fa-heart" style="color: #ffffff"></i>
      </div>
      <div class="header_text">
        <h4>${card.title}</h4>
        <p class="text_title">
          <i
            class="fa-solid fa-star"
            style="color: #ffd43b; cursor: pointer"
          ></i>
          4.9 (126 reviews)
        </p>
        <span class="text_span">
          <i class="fa-regular fa-clock" style="color: #ff0000"></i>
         ${card.chas}
        </span>
        <div class="d-flex justify-content-between mt-4">
          <h4 class="text_subtitle">${card.price}</h4>
          <div class="header_icon d-flex align-items-center gap-2">
            <i
              style="cursor: pointer"
              class="fa-regular fa-pen-to-square"
            ></i>
            <i
            id="trash"
              class="icon fa-solid fa-trash-can"
              style="color: #f90000; font-size: 16px; cursor: pointer"
            ></i>

            <i style="cursor: pointer" class="fa-solid fa-cart-plus"></i>
          </div>
        </div>
      </div>
    </div>
  </li>`;
    productlist.innerHTML += template;
  });
}

render();
