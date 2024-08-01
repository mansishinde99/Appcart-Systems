function loadContent(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

window.onload = function () {
  loadContent("nav-placeholder", "nav.html");
  loadContent("footer-placeholder", "footer.html");
};