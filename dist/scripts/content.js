"use strict";window.onload=function(){chrome.storage.local.get(["isExecute"],function(_ref){var isExecute=_ref.isExecute;isExecute&&chrome.storage.local.get(["jsCode"],function(_ref2){var jsCode=_ref2.jsCode;jsCode&&eval(jsCode)})})};
//# sourceMappingURL=content.js.map
