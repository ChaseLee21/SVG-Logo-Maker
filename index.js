const { Circle, Square, Triangle } = require("./lib/shapes.js");

const fs = require("fs");

const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        name: "shape",
        message: "What shape would you like to draw?",
        choices: ["circle", "square", "triangle"]
    },
    {
        type: "input",
        name: "color",
        message: "What color would you like to use?"
    },
    {
        type: "input",
        name: "text",
        validate: function (value) {
            if (value.length === 3) {
                return true;
            }
            return "Please enter three letters.";
        },
        message: "Input three letters for the logo."
    }
]).then(function (answers) {
    let shape;
    let text = answers.text;
    switch (answers.shape) {
        case "circle":
            shape = new Circle(answers.color);
            break;
        case "square":
            shape = new Square(answers.color);
            break;
        case "triangle":
            shape = new Triangle(answers.color);
            break;
    }
    fs.writeFile("examples/" + answers.shape + ".svg", renderSvg(shape, text), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
});

function renderSvg(shape, text) {
    return `<svg width="100" height="100">
    ${shape.render()}
    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black">${text}</text>
    </svg>`;
}


