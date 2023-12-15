// new-loading.js

document.addEventListener("DOMContentLoaded", function () {
    // Create a new div for the new loader wrapper
    const newLoaderWrapper = document.createElement("div");
    newLoaderWrapper.id = "new-loader-wrapper";
  
    // Create a div for the new loader content
    const newLoaderContent = document.createElement("div");
    newLoaderContent.id = "new-loader";
  
    // Append the new loader content to the new loader wrapper
    newLoaderWrapper.appendChild(newLoaderContent);
  
    // Append the new loader wrapper to the body
    document.body.appendChild(newLoaderWrapper);
  
    // Function to show the new loading animation
    function showNewLoading() {
      newLoaderWrapper.style.display = "flex"; // Show the new loader wrapper
    }
  
    // Function to hide the new loading animation
    function hideNewLoading() {
      newLoaderWrapper.style.display = "none"; // Hide the new loader wrapper
    }
  
    // Example: Show the new loading animation for 3 seconds (3000 milliseconds)
    showNewLoading();
    setTimeout(hideNewLoading, 3000);
  });
  