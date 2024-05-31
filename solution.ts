Here is a TypeScript solution for the problem:

```typescript
class MovingAverage {
    private window: number[];
    private size: number;
    private sum: number;

    constructor(size: number) {
        this.window = [];
        this.size = size;
        this.sum = 0;
    }

    next(val: number): number {
        if (this.window.length === this.size) {
            this.sum -= this.window.shift() as number;
        }
        this.window.push(val);
        this.sum += val;
        return this.sum / this.window.length;
    }
}

let m = new MovingAverage(3);
console.log(m.next(1)); // 1
console.log(m.next(10)); // (1 + 10) / 2
console.log(m.next(3)); // (1 + 10 + 3) / 3
console.log(m.next(5)); // (10 + 3 + 5) / 3
```

This solution uses a class `MovingAverage` to encapsulate the moving average calculation. The `next` method is used to add a new value to the data stream and calculate the new moving average. The class maintains a sliding window of the most recent `size` values, and keeps track of their sum for efficient calculation of the average. When a new value is added and the window is already full, the oldest value is removed from the window and the sum before the new value is added.