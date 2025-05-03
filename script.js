// Vulnerable JavaScript code for demonstration

// Vulnerable to XSS - unsanitized input display
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchQuery').value;
    // Vulnerable - Direct DOM insertion without sanitization
    document.getElementById('results').innerHTML = 'Results for: ' + query;
    
    // Simulate an AJAX call
    setTimeout(() => {
        // More XSS vulnerability - data from "server" inserted into DOM
        document.getElementById('results').innerHTML += '<div>Result found: <span>' + query + '</span></div>';
    }, 500);
});

// Vulnerable to localStorage misuse - storing sensitive data
function storeUserCredentials(username, password) {
    // Bad practice - storing plaintext credentials
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

// Vulnerable to eval usage
function processUserInput(input) {
    // Extremely dangerous - evaluating user input
    return eval(input);
}

// DOM-based XSS vulnerability through URL parameters
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('welcome')) {
        const welcomeMessage = urlParams.get('welcome');
        // Dangerous - directly inserting URL parameter into the page
        document.getElementById('results').innerHTML = welcomeMessage;
    }
}; 