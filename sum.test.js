import sum from "./sum.js";

describe("test fro write sum function", ()=>{
    test("sum of 2 and 3 should be 5", ()=>{
        expect(sum(2, 3)).toBe(5);
    });

    test("sum of -5 and -5 should be -10", ()=>{
        expect(sum(-5, -5)).toBe(-10);
    });


})


