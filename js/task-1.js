const categoriesListElements = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesListElements.length}`);

categoriesListElements.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
