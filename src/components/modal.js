// modal.js

function displayImageModal(element) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  if (modal && modalImage && captionText) {
    modalImage.src = element.src;
    captionText.innerHTML = element.alt;
    showModal(modal);
  }
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  hideModal(modal);
}

function showModal(modal) {
  if (modal) {
    modal.style.display = "block";
  }
}

function hideModal(modal) {
  if (modal) {
    modal.style.display = "none";
  }
}
