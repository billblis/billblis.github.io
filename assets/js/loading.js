// loading.js

document.addEventListener("DOMContentLoaded", function () {
    // Create a new div for the loading container
    const loadingContainer = document.createElement("div");
    loadingContainer.classList.add("loading-container");
  
    // Create a div for the loading content
    const loadingContent = document.createElement("div");
    loadingContent.classList.add("loading-content");
  
    // Append the loading content to the loading container
    loadingContainer.appendChild(loadingContent);
  
    // Append the loading container to the body
    document.body.appendChild(loadingContainer);
  
    // Function to show the loading animation
    function showLoading() {
      loadingContainer.style.display = "flex"; // Show the loading container
    }
  
    // Function to hide the loading animation
    function hideLoading() {
      loadingContainer.style.display = "none"; // Hide the loading container
    }
  
    // Example: Show the loading animation for 3 seconds (3000 milliseconds)
    showLoading();
    setTimeout(hideLoading, 3000);
  });
  