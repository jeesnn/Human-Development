// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());

document.addEventListener("DOMContentLoaded", () => {
    const rootDiv = document.getElementById("root");
    // ReactDOM.render(<h1>React is working</h1>, rootDiv);
    rootDiv.innerHTML = "works"
});
