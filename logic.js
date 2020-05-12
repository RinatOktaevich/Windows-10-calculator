function addSymbol (num){
document.formatto.textview.value=document.formatto.textview.value+num;
}


function cutValue() {
    let text=  document.formatto.textview.value;
    document.formatto.textview.value = text.slice(0,text.length-1);
}

function cleanInput(){
    document.formatto.textview.value="";
}

function process() {
    let text=  document.formatto.textview.value;
    document.formatto.textview.value=eval(text);
}