import { oneArray, multiplyAndFilter } from "./one";

import { people, convertJSON } from "./two";

export { objectThree };

const objectThree = {
  "status": "OK",
  "one": multiplyAndFilter(oneArray),
  "three": convertJSON(people),
}

console.log(objectThree.status);
console.log(objectThree.one);
console.log(objectThree.three);