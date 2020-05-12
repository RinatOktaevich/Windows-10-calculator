function addSymbol(num) {
    document.formatto.textview.value = document.formatto.textview.value + num;
}


function cutValue() {
    let text = document.formatto.textview.value;
    document.formatto.textview.value = text.slice(0, text.length - 1);
}

function cleanInput() {
    document.formatto.textview.value = "";
}

function process() {
    let text = document.formatto.textview.value;
    document.formatto.textview.value = eval(text);
}


function toggleSideMenu() {

    let element = document.getElementById("sideMenu");


    if (element.style.width === "0px") {
        element.style.width = '52%';
    } else {
        element.style.width = '0px';
    }

}