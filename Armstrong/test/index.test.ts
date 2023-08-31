import { assert } from "chai";
import { isArmstrong } from "../src";

describe("isArmstrong", () => {
   it("should return true when passed 153", () => {
      const result = isArmstrong(153);
      assert.equal(result, true);
   });
   it("should return false when passed 154", () => {
      const result = isArmstrong(154);
      assert.equal(result, false);
   });
   it("should return true when passed 9", () => {
      const result = isArmstrong(9);
      assert.equal(result, true);
   });
   it("should return false when passed 0", () => {
      const result = isArmstrong(0);
      assert.equal(result, false);
   });
});
