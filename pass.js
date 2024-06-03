function generatePassword() {
    // Define characters to be used in the password
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';

    let password = '';
    const passwordLength = 12; // You can adjust the length of the generated password

    // Generate password randomly
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        /*For each loop 0-11 : math.floor = round of (3.4==4) (math.random
            () will generate number between 0 and 1 
            ex : 0.56 * 12 : 6.72 ==> math.floor(6.72) ==>7
            chars[7] will be stored in password and then it will display it) */
        password += chars[randomIndex];
    }

    // Update the input field with the generated password
    document.getElementById('password').value = password;
}
