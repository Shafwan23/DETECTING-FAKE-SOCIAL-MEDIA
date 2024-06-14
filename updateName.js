// Function to read the content of info.txt
function readInfoTxt(callback) {
  fetch("info.txt")
    .then((response) => response.text())
    .then((data) => {
      // Split the content of info.txt by newline to get username
      const username = data.trim(); // Remove leading/trailing whitespace
      callback(username);
    })
    .catch((error) => {
      console.error("Error reading info.txt:", error);
      callback(null); // Call the callback with null if there's an error
    });
}

// Function to update the name in index.html
function updateNameInIndex(name) {
  const indexUsername = document.querySelector(".profile-user-name").innerText;
  const editBtn = document.querySelector(".profile-edit-btn");
  if (indexUsername === name) {
    editBtn.innerText = "Edit Profile✅";
  } else {
    editBtn.innerText = "Edit Profile❎";
  }
}

// Main function to compare and update name in index.html
function compareAndUpdateName() {
  readInfoTxt((username) => {
    if (username) {
      updateNameInIndex(username);
    } else {
      console.error("Failed to read username from info.txt");
    }
  });
}

// Call the main function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", compareAndUpdateName);
