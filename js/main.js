import * as THREE from "three"
import HALO from "vanta.halo.min.js"
import "./style.css"

VANTA.HALO({
  el: "#vantajs",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  size: 1.20,
  amplitudeFactor: 6.90,
  baseColor: 0x75,
});