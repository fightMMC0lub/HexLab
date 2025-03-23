document.getElementById('generate').addEventListener('click', function () {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeSpecial = document.getElementById('special').checked;
    const includeNumbers = document.getElementById('numbers').checked;

    const password = generatePassword(length, includeUppercase, includeSpecial, includeNumbers);
    document.getElementById('password').value = password;
});

function generatePassword(length, includeUppercase, includeSpecial, includeNumbers) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    let characters = lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSpecial) characters += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}
