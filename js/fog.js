import {createNoise3D} from "https://cdn.skypack.dev/simplex-noise@4.0.0";
const noise3D = createNoise3D();
const canvas = document.getElementById('fog-overlay');
const ctx = canvas.getContext('2d');
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data;
let t = 0;

function drawPlasma(){
  for (let x = 0; x < 256; x++) {
      for (let y = 0; y < 256; y++) {
          const r = noise3D(x / 16, y / 16, t/32) * 0.5 + 0.5;
          const g = noise3D(x / 8, y / 8, t/32) * 0.5 + 0.5;
          data[(x + y * 256) * 4 + 0] = r * 255;
          data[(x + y * 256) * 4 + 1] = (r + g) * 200;
          data[(x + y * 256) * 4 + 2] = 0;
          data[(x + y * 256) * 4 + 3] = 255;
      }
  }
  t++;
  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(drawPlasma);
}

drawPlasma();