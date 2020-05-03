function insert (num){
document.formatto.textview.value=document.formatto.textview.value+num;
}


function endCut() {
    let text=  document.formatto.textview.value;
    document.formatto.textview.value = text.slice(0,text.length-1);
}


function process() {
    let text=  document.formatto.textview.value;
    document.formatto.textview.value=eval(text);
}