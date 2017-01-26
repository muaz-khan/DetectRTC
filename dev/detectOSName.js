var osName = 'Unknown OS';
var osVersion = 'Unknown OS Version';

function getAndroidVersion(ua) {
    ua = (ua || navigator.userAgent).toLowerCase();
    var match = ua.match(/android\s([0-9\.]*)/);
    return match ? match[1] : false;
}

var osInfo = detectDesktopOS();

if (osInfo && osInfo.osName && osInfo.osName != '-') {
    osName = osInfo.osName;
    osVersion = osInfo.osVersion;
} else if (isMobile.any()) {
    osName = isMobile.getOsName();

    if (osName == 'Android') {
        osVersion = getAndroidVersion();
    }
}
