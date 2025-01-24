# TypeScript Type Assertion Error with Union Type Array

This repository demonstrates a common TypeScript error related to type assertions when dealing with arrays of union types.  The error arises from an insufficiently comprehensive union type within the function's parameter, leading to unexpected behavior.

## Bug Description

A function designed to print an array of any type encounters an error when passed an array with a union type that contains more types than the function initially accounts for. The error specifically arises from a type assertion that is not inclusive enough.

## Bug Reproduction

1. Clone this repository.
2. Navigate to the `bug.ts` file.
3. Run `tsc bug.ts` then `node bug.js`.

## Solution

The solution involves refining the function's parameter type to accurately reflect the potential types within the input array, thus eliminating the type assertion error and unexpected behavior.