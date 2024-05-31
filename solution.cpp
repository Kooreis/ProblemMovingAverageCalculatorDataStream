```cpp
#include <iostream>
#include <queue>

class MovingAverage {
public:
    MovingAverage(int size) {
        this->size = size;
        sum = 0;
    }

    double next(int val) {
        if (q.size() >= size) {
            sum -= q.front();
            q.pop();
        }
        q.push(val);
        sum += val;
        return sum / q.size();
    }

private:
    int size;
    double sum;
    std::queue<int> q;
};

int main() {
    MovingAverage m(3);
    std::cout << m.next(1) << std::endl;
    std::cout << m.next(10) << std::endl;
    std::cout << m.next(3) << std::endl;
    std::cout << m.next(5) << std::endl;
    return 0;
}
```