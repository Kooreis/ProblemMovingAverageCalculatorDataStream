# Question: How do you implement a moving average calculator over a data stream? JavaScript Summary

The JavaScript code provided is a solution to the problem of implementing a moving average calculator over a data stream. The code defines a class called 'MovingAverage' which has a constructor that initializes the size of the moving average, a queue to hold the data stream, and a variable to hold the sum of the numbers in the queue. The class also has a method called 'next' which takes a value as an argument. This method checks if the length of the queue is equal to the size, and if so, it subtracts the oldest number from the sum and removes it from the queue. The method then adds the new value to the queue and the sum. Finally, it calculates the average by dividing the sum by the length of the queue. This way, the 'MovingAverage' class can calculate the moving average of a data stream as new data comes in.

---

# TypeScript Differences

The TypeScript version of the solution is very similar to the JavaScript version. The logic of the solution is the same in both versions. However, there are a few differences due to TypeScript's static typing and object-oriented features:

1. Type Annotations: In TypeScript, we can specify the type of variables, function parameters, and function return values. In the TypeScript version, the `size` parameter in the constructor and the `val` parameter in the `next` method are both annotated as `number`. The `next` method is also annotated to return a `number`.

2. Access Modifiers: TypeScript supports access modifiers (`public`, `private`, and `protected`). In the TypeScript version, the `window`, `size`, and `sum` properties are all marked as `private`, meaning they can't be accessed outside of the `MovingAverage` class.

3. Type Assertion: TypeScript requires us to handle potential `undefined` values when we know they won't occur. In the TypeScript version, when we call `this.window.shift()`, TypeScript would normally warn us that the result might be `undefined`. However, we know that we only call `shift` when the window is full, so we use a type assertion (`as number`) to tell TypeScript that the result will definitely be a number.

Overall, the TypeScript version provides better type safety and encapsulation, which can help prevent bugs and make the code easier to understand and maintain.

---

# C++ Differences

The C++ version of the solution solves the problem in a similar way to the JavaScript version. Both versions define a class `MovingAverage` that maintains a queue of the last `size` numbers and the sum of these numbers. When a new number comes in, if the queue is already at `size`, the oldest number is removed from the sum. Then the new number is added to the queue and the sum, and the new average is returned.

However, there are some differences due to the language features and methods used in each version:

1. In the C++ version, the `queue` is a private member of the `MovingAverage` class and is of type `std::queue<int>`. In the JavaScript version, the `queue` is an array.

2. In the C++ version, the `queue`'s `pop` method is used to remove the oldest number from the queue. In the JavaScript version, the `shift` method is used to remove the oldest number from the array.

3. In the C++ version, the `queue`'s `push` method is used to add the new number to the queue. In the JavaScript version, the `push` method is used to add the new number to the array.

4. In the C++ version, the `queue`'s `size` method is used to get the current size of the queue. In the JavaScript version, the `length` property is used to get the current size of the array.

5. The C++ version includes a `main` function to test the `MovingAverage` class, while the JavaScript version does not have a similar function. Instead, it directly creates an instance of the `MovingAverage` class and calls its `next` method.

6. The C++ version uses `std::cout` to print the results, while the JavaScript version uses `console.log`.

7. The C++ version uses explicit type declarations for variables, while JavaScript uses dynamic typing.

---
