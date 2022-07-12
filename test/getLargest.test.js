const each =require('jest-each');
const getLargest = require("../getLargest");


describe("getLargest", () => {
    
    test("getLargest is a function", () => {
        expect(typeof getLargest).toBe("function");
    })
    
    describe("It handles normal inputs successfully", () => {

        each([
            [[1, 2, 3], 3],
            [[9, 8, 7], 9],
            [[12, 26, 19], 26]
        ]).test("", (arr, expected) => {
            expect(getLargest(arr).toEqual(expected));
        })
       
    })
});