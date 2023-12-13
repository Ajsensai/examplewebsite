const headConfig = {
  title: "Anthony Bale",
  favicon: "/favicon.png",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1",
  lang: "en",
  stylesheets: [
    "https://www.w3schools.com/w3css/4/w3.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    "https://fonts.googleapis.com/css2?family=Hammersmith+One&family=IBM+Plex+Mono&family=Roboto+Mono&family=Source+Code+Pro&family=Ubuntu+Mono&display=swap",
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

  // Add security headers
  const securityHeaders = [
    { name: "X-Content-Type-Options", value: "nosniff" }, // Prevent MIME sniffing
    { name: "X-XSS-Protection", value: "1; mode=block" }, // Enable XSS protection in supported browsers
    {
      name: "Content-Security-Policy",
      value:
        "default-src 'self'; " +
        "script-src 'self' https://cdnjs.cloudflare.com https://www.w3schools.com; " +
        "style-src 'self' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com data:; " +
        "img-src 'self' data:; " +
        "connect-src 'self'; " +
        "object-src 'none'; " +
        "frame-ancestors 'none';"
    } // Example CSP allowing only certain sources for various content types
  ];

  securityHeaders.forEach((header) => {
    const securityHeader = document.createElement("meta");
    if (header.name === "Content-Security-Policy") {
      securityHeader.httpEquiv = null;
      securityHeader.name = header.name;
    } else {
      securityHeader.httpEquiv = header.name;
    }
    securityHeader.content = header.value;
    head.appendChild(securityHeader);
  });
});
