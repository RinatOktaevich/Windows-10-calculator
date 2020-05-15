(function () {
    //Bunch of code...
    applyTheme();
})();





function toggleSideMenu() {
    let element = document.getElementById("sideMenu");

    if (element.style.width === "0px") {
        element.style.width = '52%';
    } else {
        element.style.width = '0px';
    }
}


function applyTheme(theme) {
    let elements = document.getElementsByClassName("colorAble");
    let lastTheme = Cookies.get('theme') == undefined ? 'dark' : Cookies.get('theme');
    for (let index = 0; index < elements.length; index++) {
        const classList = elements[index].classList;
        if (theme == undefined) {
            classList.add(`${lastTheme}_theme`);
        } else {
            classList.replace(`${lastTheme}_theme`, `${theme}_theme`);
        }
    }

    if (theme != undefined) {
        Cookies.set('theme', theme);
    } else {
        Cookies.set('theme', lastTheme);
    }
}

function lightTheme_btn_onclick() {
    applyTheme('light');
    toggleSideMenu();
    Cookies.set('theme', 'light');
}

function darkTheme_btn_onclick() {
    applyTheme('dark');
    toggleSideMenu();
    Cookies.set('theme', 'dark');
}


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