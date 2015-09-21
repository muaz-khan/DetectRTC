# [DetectRTC.js](https://github.com/muaz-khan/DetectRTC) Development Branch

> Development branch is not-functional yet.

# Proposed NEW API

```javascript
DetectRTC.isSetSinkIdSupported
DetectRTC.isRemoteStreamProcessingSupported
DetectRTC.isRTPSenderReplaceTracksSupported
DetectRTC.isOutputDevicesEnumerationSupported
DetectRTC.isMediaDevicesNewSyntaxSupported
DetectRTC.browser.googSupportedFlags.googDAEEchoCancellation
DetecRTC.browser.googSupportedFlags.echoCancellation
DetectRTC.isMediaHintsSupportsNewSyntax
```

# Rules to Contribute

```
git clone --depth=50 --branch=development git://github.com/muaz-khan/DetectRTC.git muaz-khan/DetectRTC

# install all dependencies
npm install

# install grunt for code style verifications
npm install grunt-cli
npm install grunt

# verify your changes
npm test  # or "grunt"

# Success? Make a pull request!
```

# License

[DetectRTC.js](https://github.com/muaz-khan/DetectRTC) is released under [MIT licence](https://www.webrtc-experiment.com/licence/) . Copyright (c) [Muaz Khan](http://www.MuazKhan.com/).
