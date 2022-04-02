dark = false;
original_logo_class_name = "";

//Calls the function when the page loads to set the white theme and save the class name.
window.onload =  function callSwitch() {
        //First we store the original name before the switch.
        storeOriginalColour();

        switchTheme();        
}


function storeOriginalColour() {
    original_logo_class_name = document.getElementById("hd").className;
    console.log(original_logo_class_name);
}

//Sets a class name to the original plus whats passed in the "addition" argument.
function setClassName(classToChange, originalClassName, addition) {
    classToChange.className = originalClassName;
    classToChange.className = classToChange.className + " " + addition;
}

//Changes the color theme of the page.
function switchTheme() {
    if (!dark) {
        document.body.className="dark-theme";
        setClassName(document.getElementById("hd"), original_logo_class_name, "dark-logo");
        document.getElementById("dark-light-switch").style.backgroundImage = "url('icons/dark_mode_icon.svg')";
        dark = true;
    }
    else {
        document.body.className="white-theme";
        setClassName(document.getElementById("hd"), original_logo_class_name, "white-logo");
        document.getElementById("dark-light-switch").style.backgroundImage = "url('icons/light_mode_icon.svg')";
        dark = false;
    }
}