const white = '#FFFFFF';
const black = '#1f1f1f';
const orange = '#da896a';

const themeLight = {
  background: white,
  body: black,
};

const themeDark = {
  background: black,
  body: orange,
};

const theme = (mode) => (mode === 'dark' ? themeDark : themeLight);

export default theme;
