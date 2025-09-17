/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randoms(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newFreelance() {
  return {
    name: choice(NAMES),
    occupation: choice(OCCUPATIONS),
    rate: randoms(PRICE_RANGE.min, PRICE_RANGE.max),
  };
}
const freelancers = Array.from({ length: NUM_FREELANCERS }, newFreelance);
function average(list) {
  const total = list.reduce((sum, f) => sum + f.rate, 0);
  return (total / list.length).toFixed(2);
}
const averageRate = average(freelancers);
function row(freelancer) {
  return `
    <tr>
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.rate}</td>
    </tr>
  `;
}
function table(list) {
  return `
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>OCCUPATION</th>
          <th>RATE</th>
        </tr>
      </thead>
      <tbody>
        ${list.map(row).join("")}
      </tbody>
    </table>
  `;
}
function AverageRate(avg) {
  return avg;
}
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    ${AverageRate(averageRate)}
    ${table(freelancers)}
  `;
}
render();