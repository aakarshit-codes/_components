const form = document.querySelector("footer form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for subscribing!");
});
