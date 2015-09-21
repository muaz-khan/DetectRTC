// DetectRTC.browser.name || DetectRTC.browser.version || DetectRTC.browser.fullVersion
DetectRTC.browser = getBrowserInfo();

// DetectRTC.isChrome || DetectRTC.isFirefox || DetectRTC.isEdge
DetectRTC.browser['is' + DetectRTC.browser.name] = true;
