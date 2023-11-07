var myVar;

function loader() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  // Elements to display
  const elementsToDisplay = [
    "home",
    "about",
    "test_animation",
    "portfolio",
    "portfolio_sect",
    "Socials",
    "contact",
    "footer",
  ];

  // Hide the loader
  const loaderElement = document.getElementById("loader");
  if (loaderElement) {
    loaderElement.style.display = "none";
  }

  // Loop through the elements and set their display to "block"
  elementsToDisplay.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = "block";
    }
  });
}

// Call the showPage function after a delay
setTimeout(showPage, 1000);



