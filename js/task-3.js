
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (e) => {
  const nameElem = nameInput.value.trim();
  // nameOutput.textContent = nameElem === "" ? "Anonymous" : nameElem;
  nameOutput.textContent = nameElem || "Anonymous";
});
