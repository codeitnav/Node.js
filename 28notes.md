# Framework 
A framework simply extracts the loewr lovele code allowing you to focus on the requiremwnts than the code itself.
e.g.: anugular, react, vue are all framework/libraries that help you build user interfaces without having to reply on the loewr level DOM API in Js.

--> There are frameworks to build web or mobile applications without having to reply on the HTTP module in node.js
--> e.g.: express, next, hapi, koa, sails
--> They build on top of the HTTP module making it easier for you to implement all the features. 

# Node.js Runtime
1. provides the environment to run js code outside the browser
2. it contains:
(a) external dependencies: V8, libuv, zlib, crypto, etc
(b) C/C++ features: file system access, networking
(c) JS library

# libuv
1. WHAT? - a cross pplatform open source library written in C lang
2. WHY? - handles asynchronous non-blocking operations in Node.js
3. HOW? - using (a)Thread pool (b)Event loop

# Event loop
- It is a C program and is a part of libuv
- A design pattern that orchestrates or co-ordinates the execution of sunchornous and asynchornous codein Node.js
- it consists of 6 queues:
1. Microtask Queues
2. Timer Queue
3. I/O Queue
4. I/O Polling
5. Check Queue
6. Close Queue

# questions:
1. Whenever an async task completes in libuv, at what point does Node decide to run the associated callback function on the call stack?
ANS> Callback func are executed only when the call stack is empty. The normal flow of execution fill not be interrupted to run a callback func.

2. What about the async methods like setTimeout and setInterval which also delay the exceution of a callback function?
ANS> setTimeout and setInterval callbacks are given first priority.

3. If two async tasks such as setTimeout and readFile complete at the same time, how does Node decide which callback function to run first on the call stack?
ANS> Timer callbacks are executed before I/O callbacks even if both are ready at the exact same time.