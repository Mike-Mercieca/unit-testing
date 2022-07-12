const each = require('jest-each').default;
const { getLargest, getSmallest} = require("../numberFunctions");


describe("getLargest", () => {
    
    test("getLargest is a function", () => {
        expect(typeof getLargest).toBe("function");
    })
    
    describe("It handles normal inputs successfully", () => {

        each([
            [[1, 2, 3], 3],
            [[9, 8, 7], 9],
            [[12, 26, 19], 26]
        ]).test("%s -> %s", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected);
        })
       
    })
});


describe("getSmallest", () => {
    
    test("getSmallest is a function", () => {
        expect(typeof getSmallest).toBe("function");
    })
    
    describe("It handles normal inputs succesfully", () => {

        each([
            [[1, 2, 3], 1],
            [[4, 5, 6], 4],
            [[56, 74, 34], 34]
        ]).test("%s -> %s", (arr,expected) => {
            expect(getSmallest(...arr)).toEqual(expected);
        })
    })
})


describe("It reports invalid inputs correctly", () => {

        test("It throws and error if one of three inputs is undefined", () => {
            expect(() => {
                getLargest(1,2)
            }).toThrow("Error: all inputs must have a value")
        })
})

describe("It reports invalid inputs correctly", () => {

    test("It throws and error if one of three inputs is undefined", () => {
        expect(() => {
            getSmallest(1,2)
        }).toThrow("Error: all inputs must have a value")
    })
})    