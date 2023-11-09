function openProjectPage(projectURL) {
    window.location.href = projectURL;
}

// JavaScript for dark mode toggle
const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", toggleDarkMode);

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector(".sticky-header");
    
    // Update the isDarkMode variable
    isDarkMode = body.classList.toggle("dark-mode");
    
    // Update the header's dark mode class
    header.classList.toggle("dark-mode");

    // Update the image based on the new dark mode state
    toggleModeImage();

    // Store the dark mode state in localStorage
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Check if dark mode is enabled
let isDarkMode = localStorage.getItem("darkMode") === "enabled";

// Apply dark mode class to the body and header if dark mode is enabled
if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.querySelector(".sticky-header").classList.add("dark-mode");
}

// Get the image element
const modeImage = document.getElementById("modeImage");

// Function to switch between light and dark mode images
function toggleModeImage() {
    if (isDarkMode) {
        modeImage.src = "sun.png";
    } else {
        modeImage.src = "moon.png";
    }
}

// Initial call to set the correct image
toggleModeImage();


// Initial call to set the correct image
toggleModeImage();

window.addEventListener('scroll', function () {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
