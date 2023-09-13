let outputscreen=document.getElementById('output-screen');

function display(num) {
outputscreen.value += num;
}

function cal() {
    try{
    outputscreen.value = eval(outputscreen.value)
    }
catch(err) {
alert("invalid")
}
}

function cle() {
    outputscreen.value = "";
}
function del() {
    outputscreen.value = outputscreen.value.slice(0,-1)
}

