dark = false;


function switchTheme() {
    if (!dark) {
    document.body.className="white-theme";
    document.getElementById("pito").style.backgroundColor = "#b9c0c9";
    document.getElementById("dark-light-switch").style.backgroundImage = "url('icons/dark_mode_icon.svg')";
    document.getElementById("dark-light-switch").style.backgroundSize = "cover";
    dark=true;
    }
    else {
        document.body.className="dark-theme";
        document.getElementById("pito").style.backgroundColor = "#385170";
        document.getElementById("dark-light-switch").style.backgroundImage = "url('icons/light_mode_icon.svg')";
        document.getElementById("dark-light-switch").style.backgroundSize = "cover";
        dark = false;
    }
}