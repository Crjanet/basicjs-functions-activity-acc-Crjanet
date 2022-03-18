// Unit Tests ------------------------------------------------------------------------
// Do not modify these tests.  They will automatically run in the console and test your code.

import {
    getNumberFive,
    add,
    multiply,
    concatenate,
    areaOfTriangle,
    greet,
    sum,
} from "./code.js";

function kenzieAssert(paramObject) {
    let actual = paramObject.actual;
    let expected = paramObject.expected;
    if (actual === expected) {
        console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
    } else {
        console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`, {
			test: paramObject.failureMessage,
			expected: expected,
			actual: actual,
		});
    }
}

console.group("Unit Tests - getNumberFive");
{
    kenzieAssert({
        actual: getNumberFive(),
        expected: 5,
        testNumber: 1,
        testFunction: "getNumberFive",
        failureMessage: "getNumberFive should return the number 5",
    });
}
console.groupEnd();

console.group("Unit Tests - add");
{
    kenzieAssert({
        actual: add(2, 4),
        expected: 6,
        testNumber: 1,
        testFunction: "add",
        failureMessage: "Adding 2 and 4 returns 6",
    });
    kenzieAssert({
        actual: add(5, 8),
        expected: 13,
        testNumber: 2,
        testFunction: "add",
        failureMessage: "Adding 5 and 8 returns 13",
    });
}
console.groupEnd();

console.group("Unit Tests - multiply");
{
    kenzieAssert({
        actual: multiply(4, 5, 6),
        expected: 120,
        testNumber: 1,
        testFunction: "multiply",
        failureMessage: "The product of 4, 5, and 6 is 120",
    });
    kenzieAssert({
        actual: multiply(2, -3, 9),
        expected: -54,
        testNumber: 2,
        testFunction: "multiply",
        failureMessage: "The product of 2, -3 and 9 is -54",
    });
}
console.groupEnd();

console.group("Unit Tests - concatenate");
{
    kenzieAssert({
        actual: concatenate("This is a ", "string!"),
        expected: "This is a string!",
        testNumber: 1,
        testFunction: "concatenate",
        failureMessage: `Concatenating two strings forms a sentence, and this test returns, "This is a string!"`,
    });
    kenzieAssert({
        actual: concatenate("", "New text!"),
        expected: "New text!",
        testNumber: 2,
        testFunction: "concatenate",
        failureMessage: `The initial string can be empty and it still works, and this test returns, "New text!"`,
    });
}
console.groupEnd();

console.group("Unit Tests - areaOfTriangle");
{
    kenzieAssert({
        actual: areaOfTriangle(12, 6),
        expected: "The total area of the triangle is 36",
        testNumber: 1,
        testFunction: "areaOfTriangle",
        failureMessage: `With a base of 12 and height of 6, this test returns, "The total area of the triangle is 36"`,
    });
    kenzieAssert({
        actual: areaOfTriangle(20, 10),
        expected: "The total area of the triangle is 100",
        testNumber: 2,
        testFunction: "areaOfTriangle",
        failureMessage: `With a base of 20 and height of 10, this test returns, "The total area of the triangle is 100"`,
    });
    kenzieAssert({
        actual: areaOfTriangle(12, 12),
        expected: "The total area of the triangle is 72",
        testNumber: 3,
        testFunction: "areaOfTriangle",
        failureMessage: `With a base of 12 and height of 12, this test returns, "The total area of the triangle is 72"`,
    });
}
console.groupEnd();

console.group("Unit Tests - greet");

{

  kenzieAssert({

    actual: greet("Alex"),

    expected: "Hello, Alex",

    testNumber: 1,

    testFunction: "greet",

    failureMessage:

      "With an input of 'Alex' you should be returning a string that reads 'Hello, Alex'",

  });

  kenzieAssert({

    actual: greet("Dina!"),

    expected: "Hello, Dina!",

    testNumber: 2,

    testFunction: "greet",

    failureMessage:

      "With an input of 'Dina!' you should be returning a string that reads 'Hello, Dina!'",

  });

}

console.groupEnd();



console.group("Unit Tests - sum");

{

  kenzieAssert({

    actual: sum(10, 5) === add(5, 10),

    expected: true,

    testNumber: 1,

    testFunction: "sum",

    failureMessage:

      "If the sum and add functions are receiving the same input then the results should be strictly equal.",

  });

  kenzieAssert({

    actual: sum(-3, 5) === add(-3, 5),

    expected: true,

    testNumber: 2,

    testFunction: "sum",

    failureMessage:

      "If the sum and add functions are receiving the same input then the results should be strictly equal.",

  });

  kenzieAssert({

    actual: sum(10, 10) === add(10, 11),

    expected: false,

    testNumber: 3,

    testFunction: "sum",

    failureMessage:

      "If the sum and add functions are receiving different input then evaluating the equality of the two results should return false.",

  });

}

console.groupEnd();