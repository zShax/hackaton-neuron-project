function openSettings() {
  // Hide menu to avoid clutter
  const sideMenu = document.getElementById('side-menu');
  sideMenu.classList.toggle('hidden');

  const profileSettings = document.getElementById('profileSettings');
  profileSettings.classList.toggle('hidden');
}

document.getElementById('openSettings').addEventListener('click', openSettings);
