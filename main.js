let audio = new Audio("foever.mp3"); // Load the audio globally

document.querySelector("#push").onclick = function () {
  let taskInput = document.querySelector("#newtask input").value.trim();

  if (taskInput.length == 0) {
    alert("Please Enter a Task");
  } else {
    let taskHTML = `
            <div class="task">
                <input type="checkbox" class="task-check">
                <span id="taskname">${taskInput}</span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    document.querySelector("#tasks").innerHTML += taskHTML;

    // Play sound if "Lebron" is in the input
    if (taskInput.toLowerCase().includes("lebron")) {
      audio.play();
    }

    // Attach event listeners to checkboxes
    let checkboxes = document.querySelectorAll(".task-check");
    checkboxes.forEach((checkbox) => {
      checkbox.onchange = function () {
        let taskText = this.nextElementSibling;
        taskText.classList.toggle("completed", this.checked);
      };
    });

    // Attach event listeners to delete buttons
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
      button.onclick = function () {
        let taskText = this.parentNode.querySelector("#taskname").innerText;
        this.parentNode.remove();

        // Stop audio if deleted task contained "Lebron"
        if (taskText.toLowerCase().includes("lebron")) {
          audio.pause();
          audio.currentTime = 0; // Reset audio to start
        }
      };
    });

    document.querySelector("#newtask input").value = "";
  }
};
