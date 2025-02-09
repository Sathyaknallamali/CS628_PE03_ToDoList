# CS628_PE03_ToDoList

## Input
The application accepts user input via a text box for task description entry. Upon clicking the "Add Task" button, the inputted text is recorded and appended to the task list. Each job is presented with an adjacent "Delete" button, enabling users to eliminate activities as required.

## Process
The application employs React's `useState` hook for dynamic management of the task list. Upon the addition of a task by a user, the new task is incorporated into the current state via the `setTasks` function. The `.map()` function dynamically generates all tasks. Upon a user clicking the "Delete" button, the associated job is eliminated from the list by filtering out the designated index.

## Output
The revised job list is presented on the screen in real time. Users may instantly view newly added jobs and can eliminate them with a single click. The user interface offers a streamlined and engaging method for task management.
