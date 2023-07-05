TypeScript Practice

This repository contains TypeScript practice exercises and their solutions. Each question focuses on different TypeScript concepts and helps you improve your skills in TypeScript development.

Task 1: Student Information

- Created the `Student` interface with `firstName`, `lastName`, and `location` fields.
- Defined two `student` objects with different information.
- Printed the student information to the console.

Task 2: Employee Types

- Created the `Employee` interface with `name`, `salary`, and `designation` fields.
- Implemented the `createEmployee` function that returns a `Teacher` or `Director` instance based on the salary input.
- Tested the `createEmployee` function with different salary values.

Task 3: Director and Teacher Interfaces

- Created the `DirectorInterface` interface with `workFromHome`, `getCoffeeBreak`, and `workDirectorTasks` methods.
- Created the `TeacherInterface` interface with `workFromHome`, `getCoffeeBreak`, and `workTeacherTasks` methods.
- Implemented the `Director` class that implements the `DirectorInterface`.
- Implemented the `Teacher` class that implements the `TeacherInterface`.
- Created the `createEmployee` function that returns a `Director` or `Teacher` instance based on the salary input.
- Tested the `createEmployee` function with different salary values.
- Implemented the `isDirector` function as a type predicate to check if an employee is a `Director`.
- Implemented the `executeWork` function to call the appropriate task based on the employee type.

Task 4: Database CRUD Operations

- Created the `RowID` type and `RowElement` interface in the `interface.ts` file.
- Imported the `RowID` and `RowElement` types in the `crud.d.ts` ambient file.
- Implemented the `insertRow`, `deleteRow`, and `updateRow` functions in the `crud.js` file.
- Created the `main.ts` file and added triple-slash directives to include the dependencies from `crud.d.ts`.
- Imported the `RowID` type and `RowElement` interface in the `main.ts` file.
- Imported the CRUD functions from `crud.js` and assigned them to the `CRUD` object.
- Created a `row` object with the type `RowElement` and assigned values to its fields.
- Assigned the return value of `insertRow` to the `newRowID` constant.
- Created the `updatedRow` object with the type `RowElement` and updated the `age` field.
- Called the `updateRow` and `deleteRow` functions with the appropriate arguments.

Task 5: Subject and Teacher Interfaces

- Created the `Teacher` interface in the `Teacher.ts` file within the `Subjects` namespace.
- Created the `Subject` class in the `Subject.ts` file within the `Subjects` namespace.
- Added the `teacher` attribute to the `Subject` class, implementing the `Teacher` interface.
- Created the `Cpp` class in the `Cpp.ts` file within the `Subjects` namespace.
- Used declaration merging to add the `experienceTeachingC` attribute to the `Teacher` interface.
- Implemented the `getRequirements` and `getAvailableTeacher` methods in the `Cpp` class.
- Created the `React` class in the `React.ts` file within the `Subjects` namespace.
- Added the `experienceTeachingReact` attribute to the `Teacher` interface.
- Implemented the `getRequirements` and `getAvailableTeacher` methods in the `React` class.
- Created the `Java` class in the `Java.ts`
