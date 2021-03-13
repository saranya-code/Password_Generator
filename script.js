// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generatePassword()
{

    var passwordLength = prompt("Enter the value of the length 8 - 128 characters");

    if(passwordLength !== null && passwordLength >=8 && passwordLength <= 128){
      
      //Comfirm box for lowercase ,uppercase, specialcharacter and numeric

      var lowerCase = confirm("Do you want to choose lowercase letters ?");
      var upperCase = confirm("Do you want to choose Uppercase letters ?");
      var specialCharacter = confirm("Do you want to choose Special characters ? ");
      var numeric = confirm("Do you want to choose numeric ?");


    
      
      var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      //var lower = "abcdefghijklmnopqrstuvwxyz";
      var numbers = "0123456789";
      var special ='"!@#$%^&*()_+{}|:"<>?';
      var upperArray = upper.split("");      // ['A','B','C','D']
      var lowerArray = upper.toLowerCase().split("");     // ['a','b','c']
      var numericArray = numbers.split("");   // ['1','2','3']
      var specialArray = special.split("");
      var password = "";
      var characterType = [];
      var remainingChar;


      if(lowerCase == true){
        var lowerIndex = Math.floor(Math.random()* lowerArray.length);  //Eg:lowerIndex=3
        var l = lowerArray[lowerIndex];      //Eg: l= lowerArray[3]
        password += l;                       // Eg : password += 'D'
        characterType =characterType.concat(lowerArray);  // remaining character list
        // password = password.concat(l);
        // console.log(password)
      }

      if(upperCase == true){
        var upperIndex = Math.floor(Math.random()* upperArray.length);
        var u = upperArray[upperIndex];
        password += u;
        characterType =characterType.concat(upperArray); 
        //  console.log(password)
      }

      if(specialCharacter == true){
          var specialIndex = Math.floor(Math.random()* specialArray.length);
          var s = specialArray[specialIndex];
          password += s;
          characterType =characterType.concat(specialArray); 
          // console.log(password)
        } 

      if(numeric == true){
          var numericIndex = Math.floor(Math.random()* numericArray.length);
          var n = numericArray[numericIndex];
          password += n;
          characterType =characterType.concat(numericArray); 
          // console.log(password)
        } 
        

        remainingChar = passwordLength - password.length; //loop for remaining characters to reach length
        for ( var i=0; i < remainingChar; i++)
        {
          var randomIndex = Math.floor(Math.random()* characterType.length);
          var r = characterType[randomIndex];
          password +=r;
        }
        console.log(password) //  
        
        return password;
    }
    else{
      alert("Enter the value of the length 8 - 128 characters");
      return;
    }
}

  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


