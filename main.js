
// Check if the browser supports notifications
if ('Notification' in window) {
  // Request permission to send notifications
  Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
      alert('Notification permission granted');
    }
  });
}

// Function to display a notification
function showNotification() {
  if ('Notification' in window && Notification.permission === 'granted') {
    var options = {
      body: 'New blog post available!',
      icon: 'sbl-logo.png'
    };
    var notification = new Notification('New Blog Post', options);
    
    // Open a specific page when the user clicks on the notification (optional)
    notification.onclick = function(event) {
      event.preventDefault();
      window.open('https://ucsy-students.blog');
    };
  }
}

// Trigger the notification on a specific event (e.g., login)
function onLogin() {
  showNotification();
}

// Event listener for the login button
var loginButton = document.getElementById('enableNotifications');
loginButton.addEventListener('click', onLogin);
