// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
// "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
//  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
//  "]",",","|",":",";","<",">",".","?",
// "/"];

//we defined this so the web page generates both uppercase, lowercase,numbers and symbols in the password generated
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z",];

const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z",
 ];

const numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9",];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?","/"];

let passBtn1 = document.getElementById("pass-btn1")
let passBtn2 = document.getElementById("pass-btn2")
let geneEl = document.getElementById("gene")
let recomEl = document.getElementById("recommendation1")
let recomEl2 = document.getElementById("recommendation2")
let passwordInput = document.getElementById("password-input")


//first to create a random number. (characters) is a new input not the array commented out
function randomNum(characters){
    let randomNumber = Math.floor(Math.random() * characters.length)
    return characters[randomNumber]
}

//next we generated a random password from the array using the random number already created
function generatedRandomPAssword(){
        let password = ""
        let passwordLength = 15
                                                            // incase we have 15 thats not divisble by 4 then math.ceil takes the decimal created  for(let i = 0; i < Math.ceil(passwordLength/4); i++)
        for(let i = 0; i < Math.ceil(passwordLength/4); i++){
            password += randomNum(uppercase)
            password += randomNum(lowercase)
            password += randomNum(numbers)
            password += randomNum(symbols)
        }
         return password
    }

// next; we added an event listener to the generate password button
geneEl.addEventListener("click", function(){
    const generatedPasswordOne = generatedRandomPAssword()
    passBtn1.textContent = generatedPasswordOne;

    const generatedPasswordTwo = generatedRandomPAssword()
    passBtn2.textContent = generatedPasswordTwo;

    recomEl.textContent = ("Here is a random password : " + generatedPasswordOne)
    recomEl2.textContent = ("Here is a random password : " + generatedPasswordTwo)
})

//next; we want the button where the password is being displayed to allow us copy the generated password
//on click and either mannually past on the password input section or automatically gets pasted.
passBtn1.addEventListener("click", function(){
      passwordInput.value = passBtn1.textContent   //  this paste the text to the input box automatically
      copyContent(passBtn1.textContent) // this copies to clipboard 
})
passBtn2.addEventListener("click", function(){
    passwordInput.value = passBtn2.textContent
    copyContent(passBtn2.textContent)
})

// the async function is what enables us copy to clipboard.
async function copyContent(text) {
    try {
      await navigator.clipboard.writeText(text);
      alert('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }







