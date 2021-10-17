//VARIABLE DECLARATIONS
//Grabbing the generate button, the copy button, and the two output fields.
let generateBtn = document.getElementById('generate-btn');
let copyBtn = document.getElementById('copy-btn');
let outputColor = document.getElementById('output-color');
let outputCode = document.getElementById('output-code');

//This string provides access to all possible characters present in a hexidecimal code.
let hexString = '0123456789abcdef';

//FUNCTION DECLARATIONS
//This function begins a string 'hexCode' with a #. It then populates six random characters from the hexString variable (declared above)
let randomColor = () => {
    let hexCode = '#';
    for (i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
};

//This function generates a gradient by getting two randomly generated colors and combining them at a random angle.
let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    outputColor.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
    outputCode.value = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
};

//This function allows you to copy the gradient code
copyBtn.addEventListener('click', () => {
    outputCode.select();
    document.execCommand('copy');
});

//Activates the Generate Gradiant button and instantiates a random gradiant on page load.
generateBtn.addEventListener('click', generateGrad);
window.onload = generateGrad;
