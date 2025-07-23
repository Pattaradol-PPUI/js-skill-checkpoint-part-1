// Question #3
let userPassword = "addce";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
    if (userPassword.length < 6){
            return "Weak";
        } else if (userPassword.length >= 6 && userPassword.length <= 10){
            return "Medium";
        } else {
            return "Strong";
        }
       
}




console.log(checkPasswordStrength(userPassword)); 
// ssswnalWadqQ return "Strong"
// TechUp return "Medium"
// abcde return "Weak"