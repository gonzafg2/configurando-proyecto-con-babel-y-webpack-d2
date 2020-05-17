let oneArray = [1, 4, 23, -4, "one", 6, 0, 1.1, 3.1415];

// function multiplyAndFilter(entry) {
//   let multiply = [];
//   for (let i in entry) {
//     multiply[i] = entry[i] * 4;
//   }
//   let result = multiply.filter(filtro => filtro >= 8);
//   return result;
// }

// const multiplyAndFilter = (entry) => {
//   let multiply = [];
//   for (let i in entry) {
//     multiply[i] = entry[i] * 4;
//   }
//   let result = multiply.filter((filtro) => filtro >= 8);
//   return result;
// }

// const multiplyAndFilter = entry => {
//   let multiply = entry.map(e => e * 4);
//   let result = multiply.filter(f => f >= 8);
//   return result;
// }

const multiplyAndFilter = i => {let result = i.map(e => e * 4).filter(f => f >= 8); return result;}

console.log(multiplyAndFilter(oneArray));
