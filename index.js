const { Circle, Square, Triangle } = require("./lib/shapes.js");

const fs = require("fs");

let circle = new Circle();

function renderSvg() {
    return `<svg width="100" height="100">
        ${circle.render()}
    </svg>`;
}

fs.writeFile("examples/circle.svg", renderSvg(), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});


