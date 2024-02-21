document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu-icon");
  var dropDown = document.getElementById("options-column");
  var hamburgerIcon = document.getElementById("hamburger");
  var closeIcon = document.getElementById("close");

  function toggleFunction() {
    if (dropDown.style.display == "block") {
      dropDown.style.display = "none";
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      dropDown.style.display = "block";
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  }

  if (menuIcon && dropDown && hamburgerIcon && closeIcon) {
    menuIcon.addEventListener("click", toggleFunction);
  } else {
    console.error("One or more elements not found.");
  }
});
