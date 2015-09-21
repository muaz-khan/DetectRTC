var DetectRTC = {};

var isHTTPs = location.protocol === 'https:';
var isNodeWebkit = !!(window.process && (typeof window.process === 'object') && window.process.versions && window.process.versions['node-webkit']);

DetectRTC = {
    browser: browser,
    hasMicrophone: navigator.enumerateDevices ? false : 'unable to detect',
    hasSpeakers: navigator.enumerateDevices ? false : 'unable to detect',
    hasWebcam: navigator.enumerateDevices ? false : 'unable to detect',

    isWebRTCSupported: !!window.webkitRTCPeerConnection || !!window.mozRTCPeerConnection,
    isAudioContextSupported: (!!window.AudioContext && !!window.AudioContext.prototype.createMediaStreamSource) || (!!window.webkitAudioContext && !!window.webkitAudioContext.prototype.createMediaStreamSource),

    isScreenCapturingSupported: (isFirefox && browser.version >= 33) ||
        (isChrome && browser.version >= 26 && (isNodeWebkit ? true : location.protocol === 'https:')),

    isDesktopCapturingSupported: isHTTPs && ((isFirefox && browser.version >= 33) || (isChrome && browser.version >= 34) || isNodeWebkit || false),

    isSctpDataChannelsSupported: isFirefox || (isChrome && browser.version >= 25),
    isRtpDataChannelsSupported: isChrome && browser.version >= 31,
    isMobileDevice: !!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i),
    isWebSocketsSupported: 'WebSocket' in window && 2 === window.WebSocket.CLOSING,
    isCanvasSupportsStreamCapturing: false,
    isVideoSupportsStreamCapturing: false,
    isGetUserMediaSupported: isHTTPs && ((isFirefox && browser.version >= 38) || (isChrome && browser.version >= 45) || isNodeWebkit || false)
};

if (!isHTTPs) {
    DetectRTC.isScreenCapturingSupported = 
    DetectRTC.isDesktopCapturingSupported = 
    DetectRTC.isGetUserMediaSupported ='Requires HTTPs.';
}
