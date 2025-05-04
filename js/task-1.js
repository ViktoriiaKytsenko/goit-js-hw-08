document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll("#categories > li.item");
  console.log(`Number of categories: ${categories.length}\n`);

  categories.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const elementsCount = category.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}\n`);
  });
});
