export { people, convertJSON };

const people = {
  name: "Gonzalo",
  last_name: "Fleming",
  age: 30,
  single: false
}

  const convertJSON = i => {
      
    try {
      let objectJSON = JSON.stringify(i);
      return objectJSON;
    }
    catch (error) {
      console.log(error.message);
    }
  }