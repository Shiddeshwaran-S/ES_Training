# 2. Explain nodejs event loop.

![image](https://user-images.githubusercontent.com/127477266/225576187-f7527ac4-f5c8-48d5-b4ff-db920120a770.png)

<div align="justify">
    The event loop is a queue of callbacks. Whenever an asynchronous function completes, the callback is added to the queue. The event loop keeps checking the queue and executes the callbacks in the queue one by one. This is how NodeJS handles asynchronous calls. The event loop is a single-threaded process. It is a part of the NodeJS runtime. It is implemented using libuv. The event loop contains 5 different queues. These queues are as follows:
    
    1. Timers Queue
    2. I/O Queue
    3. Check Queue
    4. Close Queue
    5. microtask Queue (nextTick Queue and Promises Queue)
    
The event loop works in the following way:
                    
Except the microtask Queue, all the other queues are processed in a FIFO manner. The event loop starts by checking the timers queue. If there are any callbacks in the timers queue, they are executed. Then the I/O queue is checked. If there are any callbacks in the I/O queue, they are executed. Then the check queue is checked. If there are any callbacks in the check queue, they are executed. Then the close queue is checked. If there are any callbacks in the close queue, they are executed. But Microtask Queue is processed differently. The microtask queue is processed after each phase of the event loop. So, the microtask queue is processed after the timers queue, I/O queue, check queue and close queue.
</div>
