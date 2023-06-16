 const sum = require("./index");

  describe("Testing the sum Function",()=> {
      test("Adding 2 positive no.", ()=> {
        expect(sum(1,2)).toBe(3)
      })
      test("Adding 2 decimal  no.", ()=> {
        expect(sum(1.5,2.3)).toBe(3.8)
      })
      test("Adding 2 numbers as strings and output as an integer no.", ()=> {
        expect(sum()).toBe("No arguemnets provided")
      })
      test("Call the sum function wihtout any arguement", ()=> {
        expect(sum(1)).toBe("Need one more arguement")
      })
      test("Adding more than 2 arguements", ()=> {
        expect(sum(1,2,3)).toBe(6)
      })
  })
