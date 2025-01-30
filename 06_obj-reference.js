const obj1 = {
    name : "Bruce Wayne",
}

let obj2 = obj1;
/*
obj2.name = "Clark Kent";
console.log(obj1); */
// { name: 'Clark Kent' } 

// this is bec when we assign one obj to another, they point to the same location in memory
// so changing one would automatically change the other

// however after the inital assignment, if we assign a new object instead of modifying the properties on existing obj,
// it would break the reference
// hence, obj1 will log its original prop
obj2 = {
    name : "Clark Kent"
}
console.log(obj1);

// reason : obj1 is "module.exports" while obj2 is just "exports"
