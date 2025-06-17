import fetchMenu from "./api.js";
import { elements, renderCards } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();

  renderCards(data);

  elements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;

      if (selected === "all") {
        renderCards(data);
      } else {
        const filtred = data.filter((item) => item.category == selected);
        
        renderCards(filtred);
      }
    });
  });
});

