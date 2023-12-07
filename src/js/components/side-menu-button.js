let hideShowSideMenu = () => {
    let sideButton = document.getElementById("side-menu-button");
    var sideMenu = document.getElementById("side-menu");

    if (sideMenu.style.display === "none") {
        sideMenu.style.display = "block";
        sideButton.style.left = "58%";
    } else {
        sideMenu.style.display = "none";
        sideButton.style.left = "0%";
    }
}

// let signup = event => {
//     console.log(event.currentTarget);
// };
document.getElementById("side-menu-button").onclick = hideShowSideMenu;
