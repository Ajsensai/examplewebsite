const images = [
  'background_2.jpg',
];

const fonts = [
  'IBM Plex Mono, monospace',
  // 'Roboto Mono, monospace',
  // 'Source Code Pro, monospace',
  // 'Ubuntu Mono, monospace',
];

const imagePathPrefix = '/src/media/';
const sections = ['portfolio', 'Socials', 'home'];

const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

const getRandomElement = (array) => array[getRandomIndex(array)];

const sectionThemes = {};

const setRandomBackgroundAndFont = (section) => {
  const sectionElement = document.getElementById(section);

  if (sectionElement && sectionThemes[section]) {
    // Set random background image
    const randomBackground = getRandomElement(sectionThemes[section].images);
    sectionElement.style.backgroundImage = `url(${imagePathPrefix}${randomBackground})`;

    // Set random font with fade transition
    const randomFont = getRandomElement(sectionThemes[section].fonts);
    document.body.style.transition = 'font 1s ease-out'; // Add a 1s transition for the font
    document.body.style.fontFamily = randomFont;
  }
};

window.addEventListener('load', () => {
  for (const section of sections) {
    sectionThemes[section] = {
      images: [...images],
      fonts: [...fonts],
    };

    setRandomBackgroundAndFont(section);
  }
});

function changeBackgroundTheme() {
  for (const section in sectionThemes) {
    const currentThemes = sectionThemes[section];
    const sectionElement = document.getElementById(section);

    if (sectionElement && currentThemes) {
      // Change background image
      const currentImage = sectionElement.style.backgroundImage.replace(`url("${imagePathPrefix}`, "").replace('")', "");
      const nextImage = getRandomElement(currentThemes.images);
      sectionElement.style.backgroundImage = `url(${imagePathPrefix}${nextImage})`;

      // Change font with fade transition
      const currentFont = document.body.style.fontFamily;
      const nextFont = getRandomElement(currentThemes.fonts);
      document.body.style.transition = 'font 1s ease-out'; // Add a 1s transition for the font
      document.body.style.fontFamily = nextFont;
    }
  }
}
