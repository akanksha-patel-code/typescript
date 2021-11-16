import React from 'react'

export const a = () => {

  // Type annotations 
  let x: number = 6;

  // Type inference
  let myNumber = 123;

  // Type aliases
  type Age = number;
  const age: Age = 82;

  // Typing Arrays

  let arr: number[];
  let arr1: Array<number> = [];

  let point: [number, number] = [7, 5];
  let point1 = [7, 5];

  // Function types 

  const func = (num: number) => String(num);

  function f1(): void { return undefined }
  function f2(): void { }
  // function f3(): void { return 'abc' }

  function stringify123(callback?: (num: number) => string) {
    if (callback === undefined) {
      callback = String;
    }
    return callback(123);
  }

  function createPoint(x = 0, y = 0): [number, number] {
    return [x, y];
  }

  function createPoint1(x: number = 0, y: number = 0): [number, number] {
    return [x, y];
  }

  function joinNumbers(...nums: number[]): string {
    return nums.join('-');
  }

  // Union types

  function getScore(numberOrString: number | string): number {
    if (typeof numberOrString === 'string'
      && /^\*{1,5}$/.test(numberOrString)) {
      return numberOrString.length;
    } else if (typeof numberOrString === 'number'
      && numberOrString >= 1 && numberOrString <= 5) {
      return numberOrString
    } else {
      throw new Error('Illegal value: ' + JSON.stringify(numberOrString));
    }
  }

  // By default, undefined and null are not included in types

  let maybeNumber: null | number = null;
  maybeNumber = 123;

  // let maybeNumber1: number = null;
  // maybeNumber1 = 123;

  // Making omissions explicit 
  function stringify1231(
    callback: null | ((num: number) => string)) {
    const num = 123;
    if (callback) { // (A)
      return callback(123); // (B)
    }
    return String(num);
  }

  // Optional vs. default value vs. undefined|T

  //function f1(x?: number) { return x }
  //function f2(x = 456) { return x }
  function f3(x: undefined | number) { return x }

  // Typing objects

  interface Point {
    x: number;
    y: number;
    distance(other: Point): number;
  }

  function pointToString(pt: Point) {
    return `(${pt.x}, ${pt.y})`;
  }

  function pointToString1(pt: { x: number, y: number }) {
    return `(${pt.x}, ${pt.y})`;
  }

  interface Person {
    name: string;
    company?: string;
  }

  const john: Person = {
    name: 'John',
  };
  const jane: Person = {
    name: 'Jane',
    company: 'Massive Dynamic',
  };

  // Type variables and generic types 
  const valueFactory = (x: number) => x; // definition
  const myValue = valueFactory(123); // use

  type TypeFactory<X> = X; // definition
  type MyType = TypeFactory<string>; // use

  // Factory for types
  interface ValueContainer<Value> {
    value: Value;
  }
  // Creating one type
  type StringContainer = ValueContainer<string>;

  // Example: Maps
  const myMap: Map<boolean,string> = new Map([
    [false, 'no'],
    [true, 'yes'],
  ]);


  return (
    <div>

      {/* {stringify1231(); } */}


    </div>
  )
}
