'use strict';

// isExecut checkbox
const checkbox = document.querySelector('body > label > input[type="checkbox"]');
chrome.storage.local.get(['isExecute'], result => {
  checkbox.checked = result.isExecute;
});
checkbox.addEventListener('change', e => {
  const isExecute = e.target.checked;
  chrome.storage.local.set({isExecute}, () => {});
});

// textarea for js code and save button
const textarea = document.querySelector('body > textarea');
const saveButton = document.querySelector('body > button');
chrome.storage.local.get(['jsCode'], result => {
  textarea.value = result.jsCode;
});
saveButton.addEventListener('click', () => {
  chrome.storage.local.set({ 'jsCode': textarea.value }, () => {});
});