const axios = require("axios");
const { ENDPOINT, INTERVAL } = require("./consts");

if (!ENDPOINT) {
  console.error("please define an environment variable named 'ENDPOINT'");
  process.exit();
}

console.log(`ENDPOINT=${ENDPOINT}`);
console.log("starting chinese torture...");

function poke() {
  axios.get(ENDPOINT).then(() => console.log("poked"));
}

setInterval(poke, INTERVAL);
