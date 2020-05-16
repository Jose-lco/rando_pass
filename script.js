// Assignment Code
let generateBtn = document.querySelector("#generate");
//Write password to the #password input
let passwordText = document.querySelector("#password");
 //Add event listener to generate button
 generateBtn.addEventListener("click", function writePassword(){


let length = parseInt(prompt("How long would you like the password to be(can only be between 8-128)?"));
  if(length < 8 ){
    alert("Try again its less than 8");
    parseInt(prompt("How long would you like the password to be(can only be between 8-128)?"));
  }
  if(length > 128){
    alert("Try again its more than 128");
    parseInt(prompt("How long would you like the password to be(can only be between 8-128)?"));
  }
  let confirmUpper = confirm("Do you want to include uppercase?");
  let confirmLower = confirm("Do you want to include lowercase?");
  let confirmNum = confirm("Do you want to include numbers?");
  let confirmSym = confirm("Do you want to include symbols?"); 
// Generate the random characters for the password
  let randomLowercase = function(){
  return(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
  };
   let randomUppercase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  let randomNumbers = function(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };
  let randomSymbols = function(){
   let symbols = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  return Math.floor(Math.random() * symbols.length)
  };
    let randomFunc = {
    upper : randomUppercase,
   lower : randomLowercase,
   numbers : randomNumbers,
   sym : randomSymbols};

  passwordText.innerText= generatePassword(confirmUpper, confirmLower, confirmNum, confirmSym, length); 

  function generatePassword(upper, lower, numbers, sym, length){
    let generatedPassword = "";
    const typesCount = upper + lower + numbers + sym;
    const typesArr = [{upper},{lower},{numbers},{sym}].filter(item => Object.values(item)[0]);
    if(typesCount === 0){
      return "";
    }
  for(i = 0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];
    generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
});

