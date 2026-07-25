document.addEventListener("DOMContentLoaded", function () {
  // Footer copyright year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Topbar device-preview buttons: resize #siteViewport to simulate
  // desktop / tablet / mobile widths, like the Colorlib preview bar.
  var viewport = document.getElementById("siteViewport");
  var desktopBtn = document.getElementById("viewDesktop");
  var tabletBtn = document.getElementById("viewTablet");
  var mobileBtn = document.getElementById("viewMobile");
  var deviceBtns = [desktopBtn, tabletBtn, mobileBtn];

  function setDeviceView(mode, activeBtn) {
    if (!viewport) return;
    viewport.classList.remove("view-tablet", "view-mobile");
    if (mode === "tablet") viewport.classList.add("view-tablet");
    if (mode === "mobile") viewport.classList.add("view-mobile");
    deviceBtns.forEach(function (b) {
      if (b) b.classList.remove("active");
    });
    if (activeBtn) activeBtn.classList.add("active");
  }

  if (desktopBtn) desktopBtn.addEventListener("click", function () { setDeviceView("desktop", desktopBtn); });
  if (tabletBtn) tabletBtn.addEventListener("click", function () { setDeviceView("tablet", tabletBtn); });
  if (mobileBtn) mobileBtn.addEventListener("click", function () { setDeviceView("mobile", mobileBtn); });

  // Topbar favorites button: toggle a liked/unliked state
  var favBtn = document.getElementById("favBtn");
  if (favBtn) {
    favBtn.addEventListener("click", function () {
      var icon = favBtn.querySelector("i");
      var isFav = favBtn.classList.toggle("active");
      icon.classList.toggle("bi-heart", !isFav);
      icon.classList.toggle("bi-heart-fill", isFav);
      favBtn.setAttribute("aria-label", isFav ? "Remove from favorites" : "Add to favorites");
    });
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
