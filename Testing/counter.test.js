const { counter } = require("../counter");

describe("Counter", ()=> {
    it(`should return a map with hello => 1 and world => 1 when given "Hello world!"`, () => {
        const map = counter("Hello world!");

        expect(map.get("hello")).toEqual(1);
        expect(map.get("world")).toEqual(1);
    });
});