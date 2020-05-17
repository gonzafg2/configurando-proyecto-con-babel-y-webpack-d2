// import '../../assets/css/styles.css'
import "../../ejemplo/scss/style.scss";

// import thereAreTeenagers from "./check.js";

import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

import { objectThree } from "./three";

let d2_1 = document.getElementById("d2-1");
let d2_2 = document.getElementById("d2-2");
let d2_3 = document.getElementById("d2-3");

d2_1.innerText = objectThree.status;
d2_2.innerText = objectThree.one;
d2_3.innerText = objectThree.three;