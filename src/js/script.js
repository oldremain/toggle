const $BTN = document.querySelector('#btn');

$BTN .addEventListener('click', () => {
  if ($BTN.checked == true) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', '');
  }
});
