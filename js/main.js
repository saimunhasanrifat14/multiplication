const userinput = prompt("Enter your number : ")
document.getElementById("userinput").innerHTML = (userinput)
const output = document.getElementById("multiplicationResult");
const title = document.getElementById("title");

if(isNaN(+userinput)){
    title.innerHTML = "Reload the page and try again";
    output.innerHTML = "........."
    alert("You are typed a wrong input, input can be 0-9")
}else{
    for(let x = 1; x <= 10; x++){
        output.innerHTML += `${+userinput} x ${x} = ${+userinput * x} <br>`;
    }
}