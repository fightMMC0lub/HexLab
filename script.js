// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate');
    
    // Listen for click event on Generate button
    generateButton.addEventListener('click', function () {
        // Get values from the form
        const length = parseInt(document.getElementById('length').value);
        const includeLowercase = document.getElementById('lowercase').checked;
        const includeUppercase = document.getElementById('uppercase').checked;
        const includeNumbers = document.getElementById('numbers').checked;
        const includeSpecial = document.getElementById('special').checked;

        // Generate the password
        const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
        
        // Output the password to the input field
        document.getElementById('password').value = password;
    });

    // Function to generate password based on user choices
    function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

        // Initialize the character set
        let characters = '';

        // Append selected character types to the character set
        if (includeLowercase) characters += lowercaseChars;
        if (includeUppercase) characters += uppercaseChars;
        if (includeNumbers) characters += numberChars;
        if (includeSpecial) characters += specialChars;

        // Handle case where no characters are selected
        if (characters === '') {
            alert('Please select at least one character type!');
            return '';
        }

        // Generate a random password
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        return password;
    }
});
