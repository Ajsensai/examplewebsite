document.addEventListener("DOMContentLoaded", function () {
    // Function to hide the loader when the content is loaded
    function hideLoader() {
      const loader = document.querySelector(".loader");
      loader.style.display = "none";
    }
  
    // Function to simulate a delay
    function simulateDelayedLoad() {
      // Delay for 3 seconds (adjust as needed)
      setTimeout(function () {
        // After the delay, hide the loader
        hideLoader();
  
        // Add any other initialization or actions you want to perform after the delay
      }, 3000); // 3000 milliseconds (3 seconds)
    }
  
    // Call the function to simulate the delayed load
    simulateDelayedLoad();
  });
  