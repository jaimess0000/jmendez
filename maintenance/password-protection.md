# Password Protection Documentation

## Overview
The website implements password protection for accessing different portfolio pages. Different passwords redirect to different pages when entered in the login form on the main page.

## Implementation Details

### Location
- Password verification is implemented in `index.html`
- Protected content is in:
  - `ai.html` (accessed with password: "ai")
  - `comp.html` (accessed with password: "comp")

### How it Works
1. User enters password in the login form on the main page
2. JavaScript validates the password
3. If matches "ai": Redirects to ai.html
4. If matches "comp": Redirects to comp.html
5. If incorrect: Shows error message

### Maintenance Notes
- The password verification is done client-side for simplicity
- Error message is shown via the existing error-message div
- Passwords are set directly in the JavaScript code
- Consider implementing server-side validation for stronger security in production

## Code Structure
```javascript
// Password verification happens on form submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    switch(password) {
        case 'ai':
            window.location.href = 'ai.html';
            break;
        case 'comp':
            window.location.href = 'comp.html';
            break;
        default:
            // Show error message
    }
});