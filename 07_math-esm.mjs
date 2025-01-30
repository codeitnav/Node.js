const add = (a,b) => {
    return a+b;
};

/* METHOD 1
export default add; */

/* METHOD 2
export default (a,b) => {
    return a+b;
}*/

const subtract = (a,b) => {
    return a-b;
}

// METHOD 3 - for multiple func
export default {
    add, 
    subtract,
};

