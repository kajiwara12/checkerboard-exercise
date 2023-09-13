<<<<<<< HEAD
const container = document.createElement("div");
document.body.append(container);
container.style.width = "400px";
container.style.height = "400px";
container.style.display = "flex";
container.style.flexWrap = "wrap";

for (let i = 0; i < 64; i++) {
  // const randomRgbColor = () => {
  //   let r = Math.floor(Math.random() * 256); // Random between 0-255
  //   let g = Math.floor(Math.random() * 256); // Random between 0-255
  //   let b = Math.floor(Math.random() * 256); // Random between 0-255
  //   return "rgb(" + r + "," + g + "," + b + ")";
  // };
  const tile = document.createElement("div");
  tile.style.width = "12.5%";
  tile.style.height = "12.5%";
  tile.style.background = "red" ;
  container.append(tile);

    if (i % 2 === 1 && i < 8) {
      tile.style.background = "black";
    } else if (i % 2 === 0 && i >= 8 && i < 16) {
      tile.style.background = "black";
    } else if (i % 2 === 1 && i >= 16 && i < 24) {
      tile.style.background = "black";
    } else if (i % 2 === 0 && i >= 24 && i < 32) {
      tile.style.background = "black";
    } else if (i % 2 === 1 && i >= 32 && i < 40) {
      tile.style.background = "black";
    } else if (i % 2 === 0 && i >= 40 && i < 48) {
      tile.style.background = "black";
    } else if (i % 2 === 1 && i >= 48 && i < 56) {
      tile.style.background = "black";
    } else if (i % 2 === 0 && i >= 56 && i < 64) {
      tile.style.background = "black";
    }
}
=======
>>>>>>> parent of 73fcee5 (Made a checkerboard of red and black tiles)
