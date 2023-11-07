// modal.js
function displayImageModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
  
    modalImage.src = element.src;
    captionText.innerHTML = element.alt;
    modal.style.display = "block";
  }
  
  function closeImageModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  