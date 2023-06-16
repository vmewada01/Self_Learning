const Percentage = require("./index");

describe("Calculating the Percentage Function",()=> {
    test("Testing income below 250,000", ()=> {
        expect(Percentage(20000)).toBe("Below 250000 no Tax")
      })
   
      test("Testing income between 250,000  and  500000", ()=> {
        expect(Percentage(280000)).toBe("10% of the amount earned")
      })

      test("Testing income between 500,000 and 1000000", ()=> {
        expect(Percentage(580000)).toBe("20% of the amount earned")
      })
      test("Testing income between  greater than 1000000", ()=> {
        expect(Percentage(11000000)).toBe("30% of the amount earned")
      })

    //   test("Testing income between  less than 50000", ()=> {
    //     expect(Percentage(200000)).toBe("50% of the saving amount can be deducted")
    //   })

})
