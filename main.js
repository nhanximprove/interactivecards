const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formSection = document.getElementById("card-info");
  const completed = document.getElementById("completed");

  formSection.style.display = "none";
  completed.style.display = "flex";
});
