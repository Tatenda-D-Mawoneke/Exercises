import { assert } from "chai";
import { isArmstrong as isArmstrongNumber } from "../src";

describe("isArmstrongNumber", () => {
   it("should return true when passed 153", () => {
      const result = isArmstrongNumber(153);
      assert.equal(result, true);
   });
   it("should return false when passed 154", () => {
      const result = isArmstrongNumber(154);
      assert.equal(result, false);
   });
   it("should return true when passed 9", () => {
      const result = isArmstrongNumber(9);
      assert.equal(result, true);
   });
   it("should return false when passed 0", () => {
      const result = isArmstrongNumber(0);
      assert.equal(result, false);
   });
});
