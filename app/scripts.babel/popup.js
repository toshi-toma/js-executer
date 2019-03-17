'use strict';

const checkbox = document.querySelector('body > label > input[type="checkbox"]')
checkbox.addEventListener('change', e => {
  alert(e.target.checked);
});

const saveButton = document.querySelector('body > button');
saveButton.addEventListener('click', e => {
  alert(e);
});