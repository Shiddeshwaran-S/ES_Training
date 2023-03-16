# 1. Explain difference in flow control js and other language like python, c with example code.

<div align="justify"> 
JavaScript is a single-threaded language. Which means it cannot execute more than one line of code at a time. This is the main difference between JavaScript and other languages like Python, C, etc. These other programming languages suppourt multi-threading. Which means they can execute more than one line of code at a time. But to overcome this issue NodeJs uses asynchronous programming using even loops and callbacks. This method involves the use a package called libuv which is a C++ library. This library is used to handle async calls from the nodejs runtime and also to abstract out the actual implementation.

</div> 