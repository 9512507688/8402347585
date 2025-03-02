function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Examples
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email")); // false