'use strict';

window.onload = function() {
  chrome.storage.local.get(['isExecute'], ({ isExecute }) => {
    if (!isExecute) {
      return;
    }
    chrome.storage.local.get(['jsCode'], ({ jsCode }) => {
      if(jsCode) {
        eval(jsCode);
      }
    });
  });
};