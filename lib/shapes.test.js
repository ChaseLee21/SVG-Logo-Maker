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
    test("has a color of red", () => {
        const circle = new Circle("red");
        expect(circle.color).toBe("red");
    });
    test("has a render method which returns a circle tag to be inserted in an svg file", () => {
        const circle = new Circle("red");
        const expected = `<circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.radius}" fill="${circle.color}"></circle>`;
        expect(circle.render()).toEqual(expected);
    });
});

describe("Square", () => {
    test("has a width of 100", () => {
        const square = new Square();
        expect(square.width).toBe(100);
    });
    test("has a height of 100", () => {
        const square = new Square();
        expect(square.height).toBe(100);
    });
    test("has a y of 0", () => {
        const square = new Square();
        expect(square.y).toBe(0);
    });
    test("has a x of 0", () => {
        const square = new Square();
        expect(square.x).toBe(0);
    });
    test("has a color of red", () => {
        const square = new Square("red");
        expect(square.color).toBe("red");
    });
    test("has a render method which returns a circle tag to be inserted in an svg file", () => {
        const square = new Square();
        const expected = `<rect x="${square.x}" y="${square.y}" width="${square.width}" height="${square.height}" fill="${square.color}"></rect>`;
        expect(square.render()).toEqual(expected);
    });
});

describe("Triangle", () => {
    test("has a color of red", () => {
        const triangle = new Triangle("red");
        expect(triangle.color).toBe("red");
    });
    test("has points property equal to 50,0 0,100 100,100", () => {
        const triangle = new Triangle("red");
        expect(triangle.points).toBe("50,0 0,100 100,100");
    });
    test("has a render method which returns a circle tag to be inserted in an svg file", () => {
        const triangle = new Triangle("red");
        const expected = `<polygon points="${triangle.points}" fill="${triangle.color}"></polygon>`;
        expect(triangle.render()).toEqual(expected);
    });
});