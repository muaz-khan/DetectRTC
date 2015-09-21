DetectRTC.MediaDevices = [];

// http://dev.w3.org/2011/webrtc/editor/getusermedia.html#mediadevices
// todo: switch to enumerateDevices when landed in canary.
function CheckDeviceSupport(callback) {
    // This method is useful only for Chrome!

    if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
        navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
    }

    if (!navigator.enumerateDevices && navigator.enumerateDevices) {
        navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
    }

    if (!navigator.enumerateDevices) {
        warn('navigator.enumerateDevices is undefined.');
        // assuming that it is older chrome or chromium implementation
        if (isChrome) {
            DetectRTC.hasMicrophone = true;
            DetectRTC.hasSpeakers = true;
            DetectRTC.hasWebcam = true;
        }

        if (callback) {
            callback();
        }
        return;
    }

    DetectRTC.MediaDevices = [];
    navigator.enumerateDevices(function(devices) {
        devices.forEach(function(_device) {
            var device = {};
            for (var d in _device) {
                device[d] = _device[d];
            }

            var skip;
            DetectRTC.MediaDevices.forEach(function(d) {
                if (d.id === device.id) {
                    skip = true;
                }
            });

            if (skip) {
                return;
            }

            // if it is MediaStreamTrack.getSources
            if (device.kind === 'audio') {
                device.kind = 'audioinput';
            }

            if (device.kind === 'video') {
                device.kind = 'videoinput';
            }

            if (!device.deviceId) {
                device.deviceId = device.id;
            }

            if (!device.id) {
                device.id = device.deviceId;
            }

            if (!device.label) {
                device.label = 'Please invoke getUserMedia once.';
            }

            if (device.kind === 'audioinput' || device.kind === 'audio') {
                DetectRTC.hasMicrophone = true;
            }

            if (device.kind === 'audiooutput') {
                DetectRTC.hasSpeakers = true;
            }

            if (device.kind === 'videoinput' || device.kind === 'video') {
                DetectRTC.hasWebcam = true;
            }

            // there is no 'videoouput' in the spec.

            DetectRTC.MediaDevices.push(device);
        });

        if (callback) {
            callback();
        }
    });
}

// check for microphone/camera support!
new CheckDeviceSupport();
DetectRTC.load = CheckDeviceSupport;
