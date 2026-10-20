function isValidPassword(password,username) {
    if (password.length < 8 || password.includes(" ") || password.includes(username)) 
        {
            return false;
        } 
        else 
        {
            return true;
        }

}

console.log(isValidPassword("hello123","indu"));
console.log(isValidPassword("indu12345" , "indu"))