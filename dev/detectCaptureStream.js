(function detectCanvasCaptureStream() {
    // latest Firefox nighly is supporting this "awesome" feature!
    var canvas = document.createElement('canvas');

    if (typeof canvas.captureStream === 'function') {
        DetectRTC.isCanvasSupportsStreamCapturing = true;
    } else if (typeof canvas.mozCaptureStream === 'function') {
        DetectRTC.isCanvasSupportsStreamCapturing = true;
    } else if (typeof canvas.webkitCaptureStream === 'function') {
        DetectRTC.isCanvasSupportsStreamCapturing = true;
    }
})();

(function detectVideoCaptureStream() {
    var video = document.createElement('video');
    if (typeof video.captureStream === 'function') {
        DetectRTC.isVideoSupportsStreamCapturing = true;
    } else if (typeof video.mozCaptureStream === 'function') {
        DetectRTC.isVideoSupportsStreamCapturing = true;
    } else if (typeof video.webkitCaptureStream === 'function') {
        DetectRTC.isVideoSupportsStreamCapturing = true;
    }
})();
