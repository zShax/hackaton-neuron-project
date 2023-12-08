let hideShowSideMenu = () => {
  var sideMenu = document.getElementById('side-menu');

  if (sideMenu.style.display === 'none') {
    sideMenu.style.display = 'block';
  } else {
    sideMenu.style.display = 'none';
  }
};

document.getElementById('side-menu-button').onclick = hideShowSideMenu;
