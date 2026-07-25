document.addEventListener("DOMContentLoaded", function () {
  // Footer copyright year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Close the mobile navbar after clicking a link
  var navLinks = document.querySelectorAll("#navMenu .nav-link:not(.dropdown-toggle)");
  var navMenu = document.getElementById("navMenu");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("show")) {
        var collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });
});
