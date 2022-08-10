import * as THREE from "three"
import HALO from "vanta.halo.min.js"
import "./style.css"

const section = document.getElementsByTagName("section")[0]

HALO({
  el: "#app",
  THREE,
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0xca00d4,
  midtoneColor: 0xff0000,
  lowlightColor: 0xffed00,
  baseColor: 0x1c0036,
  blurFactor: 0.8,
  speed: 1.5,
})
