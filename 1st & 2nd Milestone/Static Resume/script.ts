// Grab the toggle button and the resume details section
const toggleButton = document.getElementById('toggleDetails') as HTMLButtonElement;
const resumeDetails = document.getElementById('resumeDetails') as HTMLElement;

// Add an event listener to toggle the visibility of the resume details
toggleButton.addEventListener('click', () => {
  if (resumeDetails.classList.contains('hidden')) {
    resumeDetails.classList.remove('hidden');
    toggleButton.textContent = "Hide Details";
  } else {
    resumeDetails.classList.add('hidden');
    toggleButton.textContent = "Show Details";
  }
});

