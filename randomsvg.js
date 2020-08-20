if (window.matchMedia("(min-width: 800px)").matches) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
  document.write(
    '<div id="mysvg"><img alt="hacker" src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code' +
      getRandomInt(1, 8) +
      '.svg"></div>'
  );
}
