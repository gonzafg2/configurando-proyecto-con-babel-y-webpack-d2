const people = {
  name: "Gonzalo",
  last_name: "Fleming",
  age: 30,
  single: false
}

try {
  const convertJSON = i => { 
    let objectJSON = JSON.stringify(i);
    return objectJSON;
  }
  console.log(convertJSON(people));
  
} catch (error) {
  console.log(error.message);
}
