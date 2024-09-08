
// Loader functionality: Hide after 2 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("header").classList.add("header-show");
  }, 2000); // 2-second delay
});

// Menu toggle functionality
function toggleMenu() {
  var header = document.getElementById("header");
  header.classList.toggle("menu-open");
  var menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
}

// Close the menu when clicking outside
document.addEventListener("click", function (event) {
  var header = document.getElementById("header");
  if (!header.contains(event.target) && header.classList.contains("menu-open")) {
    header.classList.remove("menu-open");
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.add("bx-menu");
    menuIcon.classList.remove("bx-x");
  }
});

// Ensure navbar is reset on resize
window.addEventListener("resize", function () {
  var header = document.getElementById("header");
  if (window.innerWidth > 830 && header.classList.contains("menu-open")) {
    header.classList.remove("menu-open");
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.add("bx-menu");
    menuIcon.classList.remove("bx-x");
  }
});

// Chat Button Scroll Behavior
let chatButton = document.getElementById("chatButton");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    chatButton.classList.add("hidden");
    chatButton.classList.remove("visible");
  } else {
    // Scrolling up
    chatButton.classList.remove("hidden");
    chatButton.classList.add("visible");
  }

  lastScrollTop = scrollTop;
});

// Redirect to WhatsApp when clicking the chat button
chatButton.addEventListener("click", function () {
  window.open("https://wa.me/919745745513", "_blank");
});
