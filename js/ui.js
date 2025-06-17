const elements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("#buttons input"),
  detailContainer: document.querySelector("#outlet"),
};

console.log("detailContainer:", elements.detailContainer);



const renderCards = (data) => {
  const cardsHtml = data
    .map(
      (item) => ` 
      <a href='/detail.html?id=${item.id}'
      <div id="card" class="d-flex flex-column text-decoration-none flex-md-row text-dark gap-3">
        <img class="rounded img-fluid shadow"
          src="${item.img}"/>
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}₺</p>
          </div>
          <p class="lead">
           ${item.desc}.
          </p>
        </div>
      </a>
      `
     
    )
    .join("");

  elements.menuList.innerHTML = cardsHtml;
};





const renderDetailPage = (product,outlet) => {
  console.log(product);

 outlet.innerHTML = `
    <div class="container my-5 d-flex flex-column gap-4 px-5">
      <div class="d-flex justify-content-between fs-6 gap-2">
        <a href="/">
          <img width="30px" src="images/home.png" alt="Anasayfa">
        </a>
        <p>Anasayfa / ${product.category} / ${product.title}</p>
      </div>

      <h1 class="text-center my-4">${product.title}</h1>

      <img style="max-height:400px" class="card-img-top rounded product-image"
        src="${product.img}" alt="${product.title}" />

      <h4 class="mt-3">
        Ürünün Kategorisi: <span class="text-success">${product.category}</span>
      </h4>

      <h4 class="mt-3">
        Ürünün Fiyatı: <span class="text-success">${(product.price * 30).toFixed(2)}₺</span>
      </h4>

      <p class="lead">${product.desc}</p>
       <div class="text-center mt-4">
        <a href="/" class="btn btn-outline-success">Ana Sayfaya Dön</a>
      </div>
    </div>
   `;
 
};


export { renderCards, elements, renderDetailPage};
