const headConfig = {
    title: "Anthony Bale",
    favicon: "/favicon.png",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    stylesheets: [
      "https://www.w3schools.com/w3css/4/w3.css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      "https://fonts.googleapis.com/css?family=Cousine|Ubuntu&effect=neon|outline|emboss|shadow-multiple",
      "https://fonts.googleapis.com/css?family=Dekko",
      "/src/components/styles.css" // Include the local CSS file
    ]
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get the head element
    const head = document.querySelector("head");
  
    // Set the document title
    document.title = headConfig.title;
  
    // Create and append a link element for the favicon
    const faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.type = "image/x-icon";
    faviconLink.href = headConfig.favicon;
    head.appendChild(faviconLink);
  
    // Create and append meta elements for charset and viewport
    const charsetMeta = document.createElement("meta");
    charsetMeta.charset = headConfig.charset;
    head.appendChild(charsetMeta);
  
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = headConfig.viewport;
    head.appendChild(viewportMeta);
  
    // Create and append link elements for stylesheets
    headConfig.stylesheets.forEach((href) => {
      const stylesheetLink = document.createElement("link");
      stylesheetLink.rel = "stylesheet";
      stylesheetLink.href = href;
      head.appendChild(stylesheetLink);
    });
  });
  