/* ===========   Question-2    =================*/   

const readline2 = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

let numbers = [];
let i=0; 
function getNumber(){
    readline2.question("Enter a number? ", num => {    
        if(num.includes("stop")){
            const sum = numbers.reduce((sum,emt) => {
                return sum += parseInt(emt);
             },0)
            console.log(`Sum = ${sum}`);
            readline2.close();
        }else{
            numbers[i] = num; 
            i++;
            getNumber();         
        }
    });
}
getNumber();