Here is a simple JavaScript console application that calculates the moving average over a data stream:

```javascript
class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }

    next(val) {
        if (this.queue.length === this.size) {
            this.sum -= this.queue.shift();
        }
        this.queue.push(val);
        this.sum += val;
        return this.sum / this.queue.length;
    }
}

const ma = new MovingAverage(3);
console.log(ma.next(1)); // 1
console.log(ma.next(10)); // (1 + 10) / 2
console.log(ma.next(3)); // (1 + 10 + 3) / 3
console.log(ma.next(5)); // (10 + 3 + 5) / 3
```

In this code, we define a class `MovingAverage` that maintains a queue of the last `size` numbers and the sum of these numbers. When a new number comes in, if the queue is already at `size`, we remove the oldest number from the sum. Then we add the new number to the queue and the sum, and return the new average.