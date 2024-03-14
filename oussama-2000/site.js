function search_onclick() {
  document.getElementsByClassName("searchinput")[0].style.cssText =
    "width:200px;transition:2s;";
  document.getElementsByClassName("searchinput")[0].focus();
}
function search_onblur() {
  document.getElementsByClassName("searchinput")[0].style.cssText =
    "width:0;transition:2s;";
  let searchResult = document.getElementsByClassName("search-resulte")[0];
  searchResult.style.display = "none";
}
function my_cart() {
  // location.href = "http://127.0.0.1:5500/forphp.html?";
}

function setopacitybody() {
  var elements = document.getElementsByClassName("opacity");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.cssText = "opacity:0.7;transition: opacity 0.3s ease;";
  }
}

function getopacitybody() {
  var elements = document.getElementsByClassName("opacity");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.cssText = "opacity:1;transition: opacity 0.3s ease;";
  }
}

const cartButtons = document.querySelectorAll(".cart-button");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  // function to addToCartButton animation
  let button = this;
  button.classList.add("clicked");
}

let cart = 0;
let clickedButtons = {}; // Object to keep track of clicked buttons

function in_cart(buttonId) {
  //function fo send to cart
  if (!clickedButtons[buttonId]) {
    // Check if button has been clicked before
    cart++;
    clickedButtons[buttonId] = true; // Mark button as clicked
    document.querySelectorAll(".in_cart").forEach((element) => {
      element.textContent = cart;
    });
  }
}
// This way, each button has a unique identifier,
// and the in_cart() function checks whether a button with that identifier has been clicked before.
// If not, it increases the cart count and marks the button as clicked. Subsequent clicks on the same button will have no effect on the cart count.

function search_result() {
  //function of showing result of searching
  let input = document.getElementsByClassName("searchinput")[0].value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("resulte");
  let searchResult = document.getElementsByClassName("search-resulte")[0];
  searchResult.style.display = "block";
  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

var buttonn = true;

function changeMode() {
  var buttonmode = document.getElementsByClassName("modebutton")[0];
  var elements = document.querySelectorAll("*");

  if (buttonn) {
    // If the button is in default mode
    buttonmode.innerHTML =
      "<img src='https://cdn1.iconfinder.com/data/icons/mix-ui/24/Sun_Brightness_Day_Light_Weather_Mode-512.png' width='25px'>";

    elements.forEach(function (element) {
      var style = getComputedStyle(element);
      var backgroundColor = style.backgroundColor;

      if (
        backgroundColor === "rgb(255, 255, 255)" &&
        !element.classList.contains("dontChangeColor")
      ) {
        // Check for white color and exclude elements with the "exception" class
        element.style.backgroundColor = "black"; // Change to black
        element.style.color = "white"; // Change text color to contrast

        document.querySelectorAll(".changeColor").forEach(function(element) {
          element.style.color = "white";
        });

        document.getElementsByTagName("body")[0].style.backgroundImage =
          "url(shoppingbackgrounddark.png)";
      }
    });

    buttonn = false; // Set button state to modified mode
  } else {
    // If the button is in modified mode
    buttonmode.innerHTML = ""; // Remove the sunmode image

    elements.forEach(function (element) {
      var style = getComputedStyle(element);
      var backgroundColor = style.backgroundColor;

      if (
        backgroundColor === "rgb(0, 0, 0)" &&
        !element.classList.contains("dontChangeColor")
      ) {
        // Check for black color and exclude elements with the "exception" class
        buttonmode.innerHTML =
          "<img src='https://cdn2.iconfinder.com/data/icons/ui-minimalist-0-1-1/16/UI_Web_Moon_Night_Night_Mode_Dark-512.png' alt='dark-mode' width='37px'/>";

        element.style.backgroundColor = "white"; // Revert to white
        element.style.color = "black"; // Revert text color

        document.querySelectorAll(".changeColor").forEach(function(element) {
          element.style.color = "black";
        });        
        document.getElementsByTagName("body")[0].style.cssText =
          "margin: 0;padding: 0;box-sizing: border-box;font-family: Arial, Helvetica, sans-serif;background-image: url(colorful-shopping-bags.jpg);background-repeat: no-repeat;background-attachment: fixed;background-position: center;background-size: cover;transition: opacity 0.3s ease;";
      }
    });

    buttonn = true;
  }
}

$(document).ready(function () {
  //function for slider article
  $(".slider").each(function () {
    var $slider = $(this);
    var $controls = $slider.next(".slide-controls");

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $controls.find("#prev-btn"),
      nextArrow: $controls.find("#next-btn"),
    });
  });
});
// This JavaScript code will initialize the slider for each .slider container found in the document. It finds the corresponding navigation buttons within the adjacent .slide-controls container using the next() method.
