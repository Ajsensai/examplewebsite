
document.addEventListener("DOMContentLoaded", function () {
    const dynamicSections = document.getElementById("dynamicSections");
  
    sectionConfig.forEach(section => {
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "w3-quarter w3-section";
  
      const sectionTitle = document.createElement("span");
      sectionTitle.className = "w3-xlarge";
      sectionTitle.innerHTML = `${section.title} <i class="fa ${section.icon}"></i>`;
  
      sectionDiv.appendChild(sectionTitle);
      sectionDiv.appendChild(document.createElement("br")); // Add a line break
  
      section.links.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.href = linkPrefix + link.path; // Update here to use link.path
        linkElement.target = "_blank";
        linkElement.className = "w3-bar-item w3-button";
        linkElement.textContent = link.name;
  
        sectionDiv.appendChild(linkElement);
      });
  
      dynamicSections.appendChild(sectionDiv);
    });
  });
  