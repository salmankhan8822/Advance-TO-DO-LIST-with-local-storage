Advanced To-Do List App
-----
A dynamic and interactive To-Do List application built using HTML, CSS, and JavaScript.
This project allows users to:
 Add new tasks
 Mark tasks as completed
 Edit pending tasks
 Delete tasks
 Filter tasks (All / Completed / Pending)
 Save tasks using Local Storage
-----
 Features
1️⃣ Add Task
Users can add new tasks using the input field.
Prevents empty input.
Automatically clears input after adding.
-----
2️⃣ Mark as Completed
Each task includes a checkbox.
When checked → task gets completed class.
When unchecked → task returns to normal.
Automatically saved in Local Storage.
-----
3️⃣ Edit Task
Only pending tasks can be edited.
Completed tasks cannot be edited.
Clicking edit:
Puts task text back into input field
Removes old task
Saves updated task
-----
4️⃣ Delete Task
Removes task from list and updates Local Storage instantly.
-----
5️⃣ Filter Tasks
Button	Action
All	Shows all tasks
Completed	Shows only completed tasks
Pending	Shows only pending tasks
-----
6️⃣ Local Storage Support 
Tasks are saved in browser storage.
Even after page refresh:
Tasks remain saved
Completed state remains saved
localStorage.setItem("tasks", JSON.stringify(tasks));
Tasks are loaded automatically on page load:
document.addEventListener("DOMContentLoaded", loadTasks);
-----
 Concepts Used
DOM Manipulation
Event Listeners
Dynamic Element Creation
JavaScript Arrays & Objects
forEach() Method
Conditional Statements
Local Storage API
Filtering Logic
Checkbox Handling
-----
 Project Structure
project-folder
│── index.html
│── style.css
│── script.js
│── README.md
-----
🔄 How It Works (Step-by-Step)
User types task.
Clicks "Add".
createTaskElement() creates dynamic <li>.
Task added to DOM.
saveTasks() stores tasks in Local Storage.
On page reload → loadTasks() restores tasks.
Filter buttons change display style based on checkbox state.
 Example Task Object
{
  text: "Complete JavaScript project",
  completed: false
}
-----
 Learning Outcome
This project helps you understand:
How real To-Do apps work
State management using Local Storage
Creating reusable functions
Handling user interaction
Building logic step-by-step
-----
 Future Improvements
Add due dates
Add drag & drop
Add task counter
Add dark mode
Add priority levels
Convert to React Version
-----
👨‍💻 Author
Built as a practice project to strengthen JavaScript fundamentals before moving to React.


You are now building intermediate-level JavaScript projects 👏
This is no longer beginner work.
