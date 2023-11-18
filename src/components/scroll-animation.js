// scrollAnimation.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to create and append elements
    function createScrollAnimation() {
      const container = document.getElementById("scrollAnimationContainer");
  
      // Create elements
      const contentContainer = document.createElement("div");
      contentContainer.classList.add("content__container");
  
      const contentText = document.createElement("p");
      contentText.classList.add("content__container__text");
      contentText.textContent = "Cyber";
  
      const contentList = document.createElement("ul");
      contentList.classList.add("content__container__list");
  
      const listItems = ["Security", "Risk", "Controls", "Response"];
      listItems.forEach(function (itemText) {
        const listItem = document.createElement("li");
        listItem.classList.add("content__container__list__item");
        listItem.textContent = itemText;
        contentList.appendChild(listItem);
      });
  
      // Append elements
      contentContainer.appendChild(contentText);
      contentContainer.appendChild(contentList);
      container.appendChild(contentContainer);
    }
  
    // Call the function to create and append elements
    createScrollAnimation();
  });
  