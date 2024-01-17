const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle", () => {
    test("has a radius of 50", () => {
        const circle = new Circle();
        expect(circle.radius).toBe(50);
    });
    test("has a cx of 50", () => {
        const circle = new Circle();
        expect(circle.cx).toBe(50);
    });
    test("has a cy of 50", () => {
        const circle = new Circle();
        expect(circle.cx).toBe(50);
    });
    test("has a cy of 50", () => {
        const circle = new Circle("red");
        expect(circle.color).toBe("red");
    });
    test("has a render method which returns a circle tag to be inserted in an svg file", () => {
        const circle = new Circle("red");
        expect(circle.render()).toReturn(`<circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.radius}" fill="${circle.color}"></circle>`);
    });
});