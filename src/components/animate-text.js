// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add animation class when in viewport
  function addAnimationIfVisible() {
    const elements = document.querySelectorAll(".animated-text");
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("animate");
      }
    });
  }
  
  // Add event listener to trigger animation on scroll
  window.addEventListener("scroll", addAnimationIfVisible);
  
  // Initial check when the page loads
  addAnimationIfVisible();
  