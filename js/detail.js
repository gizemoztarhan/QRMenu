import fetchMenu from "./api.js";
import { elements, renderDetailPage} from "./ui.js";

const params = new URLSearchParams(window.location.search);

const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {

  const data = await fetchMenu("../db.json");

  const product = data.find((item) => item.id === id);

if (!product) {
  elements.detailContainer.innerHTML = ""; 

} else {
  renderDetailPage(product, elements.detailContainer);
}

});
