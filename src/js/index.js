function updateDateTime() {
    const now = new Date();
    
    // Formatting options for a clean look
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    
    const dateTimeString = now.toLocaleString('en-US', options);
    
    // Injecting the string into an HTML element with id="display-now"
    document.getElementById('display-now').textContent = dateTimeString;
}

// Run the function every second to keep the clock live
setInterval(updateDateTime, 1000);

// Call it immediately so there is no 1-second delay on page load
updateDateTime();