ES6 Promises

Task0 & 1 - Returns a promise

Task2 - is about appending three handlers to a function

Task3 - is about imporing  uploadPhoto and creating a user from utils.js

Task4 - is about using a particular prototype that returns a resolved promise with a particular object

Task5 - is about writing and exporting  a function named uploadPhoto that  should accept one argument fileName (string).
and also return a Promise rejecting with an Error and the string $fileName cannot be processed

Task6 - in this task, i write and export a function named handleProfileSignup that should accept three arguments firstName (string), lastName (string), and fileName (string). Thefunction should call the two other functions and when the promises are all settled it should return an array with this particular structure

Task7 - in this task, i write and export a function named loadBalancer that should accept two arguments chinaDownload (Promise) and USDownload (Promise) and the function should return the value returned by the promise that resolved the first.

Task8 - in this task, i write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number) and when the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise it should return the numerator divided by the denominator.

Task9 - in this task, i Write a function named "guardrail" that will accept one argument which is mathFunction (Function).
This function should create and return an array named queue and when the mathFunction function is executed, the value returned by the function should be appended to the queue.Also if this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue

Task10 - in this task, i Import uploadPhoto and createUser from utils.js and then write an async function named asyncUploadUser that will call these two functions and return an object with the following format
