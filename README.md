# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections within HTTP request handlers.  The `bug.js` file showcases a scenario where an asynchronous operation throws an error, but the error isn't properly handled, potentially leading to unexpected behavior or crashes.

The `bugSolution.js` file provides a corrected version that demonstrates how to properly handle promise rejections using a `try...catch` block or `.catch()` within the asynchronous operation or at the top-level of your application.