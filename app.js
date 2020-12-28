document.getElementById('submit').addEventListener('submit', fizzBuzz);

function fizzBuzz(){
    for(let i = 1; n <= 100; n++) {
        let output = "";
        if (i % 3 == 0) output += "Fizz";
        if (i % 5 == 0) output += "Buzz";
        console.log(output || i);
    }
}