const images = [
    'neon_cable5.jpg',
    'neon_cable4.jpg',
    'neon_cable3.jpg',
    'neon_cable2.jpg',
    'neon_cable.jpg',
    'blob.jpg',
  ];
  
  const imagePathPrefix = '/src/media/';
  
  const sections = ['portfolio', 'Socials', 'home'];
  
  const sectionThemes = {};
  
  // Randomly select an image for each section on page load
  window.addEventListener('load', () => {
    for (const section of sections) {
      sectionThemes[section] = [...images];
      const sectionElement = document.getElementById(section);
      
      if (sectionElement && sectionThemes[section]) {
        const randomIndex = Math.floor(Math.random() * sectionThemes[section].length);
        const randomBackground = sectionThemes[section][randomIndex];
        sectionElement.style.backgroundImage = `url(${imagePathPrefix}${randomBackground})`;
      }
    }
  });
  
  function changeBackgroundTheme() {
    for (const section in sectionThemes) {
      const currentThemes = sectionThemes[section];
      const sectionElement = document.getElementById(section);
  
      if (sectionElement && currentThemes) {
        const currentThemeIndex = currentThemes.indexOf(
          sectionElement.style.backgroundImage.replace(`url("${imagePathPrefix}`, "").replace('")', "")
        );
        const nextThemeIndex = (currentThemeIndex + 1) % currentThemes.length;
        const newBackground = currentThemes[nextThemeIndex];
        sectionElement.style.backgroundImage = `url(${imagePathPrefix}${newBackground})`;
      }
    }
  }
  