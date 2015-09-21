var DetectRTC = {};

// ----------
// DetectRTC.browser.name || DetectRTC.browser.version || DetectRTC.browser.fullVersion
DetectRTC.browser = getBrowserInfo();

// DetectRTC.isChrome || DetectRTC.isFirefox || DetectRTC.isEdge
DetectRTC.browser['is' + DetectRTC.browser.name] = true;

var isHTTPs = location.protocol === 'https:';
var isNodeWebkit = !!(window.process && (typeof window.process === 'object') && window.process.versions && window.process.versions['node-webkit']);

// --------- Detect if system supports WebRTC 1.0 or WebRTC 1.1.
var isWebRTCSupported = false;
['webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function(item) {
	if(item in window) {
		isWebRTCSupported = true;
	}
});
DetectRTC.isWebRTCSupported = isWebRTCSupported;

// --------- Detect if system supports screen capturing API
var isScreenCapturingSupported = false;
if(DetectRTC.browser.isChrome && DetectRTC.browser.version  >= 35) {
	isScreenCapturingSupported = true;
}
else if(DetectRTC.browser.isFirefox && DetectRTC.browser.version >= 34) {
	isScreenCapturingSupported = true;
}

if(!isHTTPs) {
	isScreenCapturingSupported = false;
}
DetectRTC.isScreenCapturingSupported = isScreenCapturingSupported;

// --------- Detect if WebAudio API are supported
var webAudio = {};
['AudioContext', 'webkitAudioContext', 'mozAudioContext', 'msAudioContext'].forEach(function(item) {
	if(item in window) {
		webAudio.isSupported = true;

		if('createMediaStreamSource' in window[item].prototype) {
			webAudio.isCreateMediaStreamSourceSupported = true;
		}
	}
});
DetectRTC.isAudioContextSupported = webAudio.isSupported;
DetectRTC.isCreateMediaStreamSourceSupported = webAudio.isCreateMediaStreamSourceSupported;

// ---------- Detect if SCTP/RTP channels are supported.

DetectRTC.isRtpDataChannelsSupported = DetectRTC.browser.isChrome && DetectRTC.browser.version > 31;
var isSCTPSupportd = false;
if(DetectRTC.browser.isFirefox && DetectRTC.browser.version > 28) {
	isSCTPSupportd = true;
}
else if(DetectRTC.browser.isChrome && DetectRTC.browser.version > 25) {
	isSCTPSupportd = true;
}
else if(DetectRTC.browser.isOpera && DetectRTC.browser.version >= 11) {
	isSCTPSupportd = true;
}
DetectRTC.isSctpDataChannelsSupported = isSCTPSupportd;

// ---------

DetectRTC.isMobileDevice = isMobileDevice; // "isMobileDevice" boolean is defined in "getBrowserInfo.js"

// ------

DetectRTC.isWebSocketsSupported = 'WebSocket' in window && 2 === window.WebSocket.CLOSING;
if(DetectRTC.isWebSocketsSupported) {
	var websocket = new WebSocket('wss://test.com:443/');
	websocket.onopen = function() {
		DetectRTC.isWebSocketsBlocked = false;
	};
	websocket.onerror = function() {
		DetectRTC.isWebSocketsBlocked = true;
	};
}

// ------
var isGetUserMediaSupported = false;
if(navigator.getUserMedia) {
	isGetUserMediaSupported = true;
}
else if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
	isGetUserMediaSupported = true;
}
if(DetectRTC.browser.isChrome && DetectRTC.browser.version >= 47 && !isHTTPs) {
	DetectRTC.isGetUserMediaSupported = 'Requires HTTPs';
}
DetectRTC.isGetUserMediaSupported = false;

// -----------
DetectRTC.osName = osName; // "osName" is defined in "detectOSName.js"

// ----------
DetectRTC.isCanvasSupportsStreamCapturing = isCanvasSupportsStreamCapturing;
DetectRTC.isVideoSupportsStreamCapturing = isVideoSupportsStreamCapturing;

// ------
DetectRTC.DetectLocalIPAddress = DetectLocalIPAddress;

// -------
DetectRTC.load = CheckDeviceSupport;

DetectRTC.MediaDevices = MediaDevices;
DetectRTC.hasMicrophone = MediaDevices;
DetectRTC.hasSpeakers = MediaDevices;
DetectRTC.hasWebcam = MediaDevices;

// ------
var isSetSinkIdSupported = false;
if('setSinkId' in document.createElement('video')) {
	isSetSinkIdSupported = true;
}
DetectRTC.isSetSinkIdSupported = isSetSinkIdSupported;

// -----
var isRTPSenderReplaceTracksSupported = false;
if(DetectRTC.browser.isFirefox/*&& DetectRTC.browser.version > 39*/) {
	/*global mozRTCPeerConnection:true */
	if('getSenders' in mozRTCPeerConnection.prototype) {
		isRTPSenderReplaceTracksSupported = true;
	}
}
else if(DetectRTC.browser.isChrome) {
	/*global webkitRTCPeerConnection:true */
	if('getSenders' in webkitRTCPeerConnection.prototype) {
		isRTPSenderReplaceTracksSupported = true;
	}
}
DetectRTC.isRTPSenderReplaceTracksSupported = isRTPSenderReplaceTracksSupported;

//-------
DetectRTC.isORTCSupported = typeof RTCIceGatherer !== 'undefined';
