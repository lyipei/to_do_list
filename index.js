
// wait unit the entire HTML ddocument has been loaded
document.addEventListener("DOMContentLoaded", () => {
    //Get reference to elements from the HTML
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const categorySelect = document.getElementById("category");
    //Display the current date at the top of page
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("currentDate").textContent = today.toLocaleDateString(undefined, options);

    //When the "add" buton is clicked
    addBtn.addEventListener("click", () => {
        //Get the task text and category
        const taskText = taskInput.value.trim();
        const category = categorySelect.value;


        //Prevent adding an empty task
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        //Create a <li> element for the task 
        const li = document.createElement("li");
        
        //Create a span to display the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
    

        //Create a "complete" button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "☐";
        completeBtn.classList.add("complete-btn");
        //Create a "delete" button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete-btn");

        //Button actions (when user clicks the "complete" button)
        completeBtn.addEventListener("click", () => {
            if (completeBtn.textContent === "☐") { 
                //Change symbol to checked box
                completeBtn.textContent = "☑"; 
                //Fade out completed task
                li.style.opacity = "0.5"; 
            }
            else {
                //Revert to unchecked box
                completeBtn.textContent = "☐";
                //Restore normal visibility
                li.style.opacity = "1";
            }
        });
        // Remove the task when user click "delete" button
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        // Add buttons to task item
        li.appendChild(completeBtn);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // Append to correct list
        const listId = category.toLowerCase() + "-list";
        const list = document.getElementById(listId);
        if (list) {
            list.appendChild(li);
        }
        

        // Clear input
        taskInput.value = "";
    });
});
