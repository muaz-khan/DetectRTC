
var isCanvasSupportsStreamCapturing = false;
(function detectCanvasCaptureStream() {
    // latest Firefox nighly is supporting this "awesome" feature!
    var canvas = document.createElement('canvas');

    if (typeof canvas.captureStream === 'function') {
        isCanvasSupportsStreamCapturing = true;
    } else if (typeof canvas.mozCaptureStream === 'function') {
        isCanvasSupportsStreamCapturing = true;
    } else if (typeof canvas.webkitCaptureStream === 'function') {
        isCanvasSupportsStreamCapturing = true;
    }
})();

var isVideoSupportsStreamCapturing = false;
(function detectVideoCaptureStream() {
    var video = document.createElement('video');
    if (typeof video.captureStream === 'function') {
        isVideoSupportsStreamCapturing = true;
    } else if (typeof video.mozCaptureStream === 'function') {
        isVideoSupportsStreamCapturing = true;
    } else if (typeof video.webkitCaptureStream === 'function') {
        isVideoSupportsStreamCapturing = true;
    }
})();
