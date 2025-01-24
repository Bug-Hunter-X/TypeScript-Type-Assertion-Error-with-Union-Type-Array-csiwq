function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: (number | string)[] = [1, 2, "3", 4, "5"];
printArray(myArray); // This will work fine

const myArray2: number[] = [1, 2, 3, 4, 5];
printArray(myArray2); //This will also work fine

const myArray3: string[] = ["1", "2", "3", "4", "5"];
printArray(myArray3); // This will also work fine

//The solution is to change the type of the array parameter to any[]
const myArray4: (number | string | boolean)[] = [1, 2, "3", 4, "5", true];
printArray(myArray4); //This will work fine now
