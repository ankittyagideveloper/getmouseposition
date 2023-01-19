// const callMe = () => {
//   console.log(counter);
//   counter++;
// };

// const debounceFn = (val, interval) => {
//   let id;
//   return function () {
//     if (id) {
//       clearTimeout(id);
//     }
//     id = setTimeout(() => {
//       val();
//     }, interval);
//   };
// };
// let counter = 0;
// const fetchData = debounceFn(callMe(), 1000);

// let counter = 0;
// const apiCall = () => {
//   console.log("Fetching data...", counter++);
// };

// const debounceFn = (fn, delay) => {
//   let id;
//   return function () {
//     if (id) {
//       clearTimeout(id);
//     }
//     id = setTimeout(() => {
//       fn();
//     }, delay);
//     console.log(id, "id");
//   };
// };

// const fetchData = debounceFn(apiCall, 300);
let heading = document.createElement("h2");
let root = document.getElementById("root");
root.appendChild(heading);
const mousePosition = (e) => {
  heading.innerHTML = `${e.x} ${e.y}`;
  return `${e.x} ${e.y}`;
};

const debouncefn = (fn, delay) => {
  let id;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(id);
    id = setTimeout(() => fn.apply(context, args), delay);
  };
};

document.addEventListener("mousemove", debouncefn(mousePosition, 300));
