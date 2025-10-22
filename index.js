document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const categorySelect = document.getElementById("category");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("currentDate").textContent = today.toLocaleDateString(undefined, options);

    addBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        const category = categorySelect.value;

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const li = document.createElement("li");
        

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
    

        // Create buttons
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "☐";
        completeBtn.classList.add("complete-btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete-btn");

        // Button actions
        completeBtn.addEventListener("click", () => {
            if (completeBtn.textContent === "☐") {
                completeBtn.textContent = "☑";
                li.style.opacity = "0.5";
            }
            else {
                completeBtn.textContent = "☐";
                li.style.opacity = "1";
            }
        });

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
