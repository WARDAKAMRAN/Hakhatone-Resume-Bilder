// Grab the toggle button and the resume details section
var toggleButton = document.getElementById('toggleDetails');
var resumeDetails = document.getElementById('resumeDetails');
// Add an event listener to toggle the visibility of the resume details
toggleButton.addEventListener('click', function () {
    if (resumeDetails.classList.contains('hidden')) {
        resumeDetails.classList.remove('hidden');
        toggleButton.textContent = "Hide Details";
    }
    else {
        resumeDetails.classList.add('hidden');
        toggleButton.textContent = "Show Details";
    }
});
