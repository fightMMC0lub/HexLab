document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    let length = document.getElementById('length').value;
    let includeLower = document.getElementById('lowercase').checked;
    let includeUpper = document.getElementById('uppercase').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeSpecial = document.getElementById('special').checked;

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = "";
    if (includeLower) allChars += lowerChars;
    if (includeUpper) allChars += upperChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSpecial) allChars += specialChars;

    if (allChars === "") {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    document.getElementById('password').value = password;
}

// Copy Function
function copyPassword() {
    let passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
