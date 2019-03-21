'use strict';

// if defined the isExecute and jsCode, execute saved js code.
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
