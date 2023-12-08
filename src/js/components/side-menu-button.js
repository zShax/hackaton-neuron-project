import { map } from '../index';

let hideShowSideMenu = () => {
  let sideButton = document.getElementById('side-menu-button');
  var sideMenu = document.getElementById('side-menu');

  if (sideMenu.style.display === 'block') {
    sideMenu.style.display = 'none';
    sideButton.style.left = '0%';
  } else {
    sideMenu.style.display = 'block';
    sideButton.style.left = '57%';
  }
};

document.getElementById('side-menu-button').onclick = hideShowSideMenu;
