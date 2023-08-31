export function isArmstrong(givenNumber: number): boolean {
   if (givenNumber == 0) return false;

   let result: number = 0;

   const givenNumberAsString: string = givenNumber.toString();
   const givenNumberArray: number[] = givenNumberAsString.split("").map(Number);

   for (let index = 0; index < givenNumberArray.length; index++) {
      const currentNumber = givenNumberArray[index];
      const factor = givenNumberArray.length;
      result += Math.pow(currentNumber, factor);
   }

   return result == givenNumber;
}
