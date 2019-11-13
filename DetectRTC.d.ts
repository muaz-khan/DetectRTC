interface Device {
  deviceId: string;
  groupId: string;
  id: string;
  isCustomLabel?: boolean;
  kind: string;
  label: string;
}

namespace DetectRTC {
  export function load(callback: () => void): void;
  export const version: string;
  export const osName: string;
  export const osVersion: string;

  export const hasWebcam: boolean;
  export const hasMicrophone: boolean; // (has microphone device!)
  export const hasSpeakers: boolean; // (has speakers!)

  export const isApplyConstraintsSupported: boolean;
  export const isAudioContextSupported: boolean;
  export const isCanvasSupportsStreamCapturing: boolean;
  export const isCreateMediaStreamSourceSupported: boolean;
  export const isGetUserMediaSupported: boolean;
  export const isMobileDevice: boolean;
  export const isMultiMonitorScreenCapturingSupported: boolean;
  export const isORTCSupported: boolean;
  export const isPromisesSupported: boolean;
  export const isRTPSenderReplaceTracksSupported: boolean;
  export const isRemoteStreamProcessingSupported: boolean;
  export const isRtpDataChannelsSupported: boolean;
  export const isScreenCapturingSupported: boolean; // Chrome, Firefox, Opera, Edge and Android
  export const isSctpDataChannelsSupported: boolean;
  export const isSetSinkIdSupported: boolean;
  export const isVideoSupportsStreamCapturing: boolean;
  export const isWebRTCSupported: boolean;
  export const isWebSocketsBlocked: boolean;
  export const isWebSocketsSupported: boolean;

  export const isWebsiteHasMicrophonePermissions: boolean; // getUserMedia allowed for HTTPs domain in Chrome?
  export const isWebsiteHasWebcamPermissions: boolean; // getUserMedia allowed for HTTPs domain in Chrome?

  export const isDesktopCapturingSupported: boolean;

  export function checkWebSocketsSupport(callback: () => void);

  export const audioInputDevices: Device[]; // microphones
  export const audioOutputDevices: Device[]; // speakers
  export const videoInputDevices: Device[]; // cameras

  export const displayAspectRatio: string;
  export const displayResolution: string;

  export const browser: {
    name: "Edge" | "Chrome" | "Firefox" | string;
    version: string | number;
    fullVersion: string;
    isChrome?: boolean;
    isFirefox?: boolean;
    isOpera?: boolean;
    isIE?: boolean;
    isSafari?: boolean;
    isEdge?: boolean;

    isPrivateBrowsing?: boolean; // incognito or private modes
  };

  export function DetectLocalIPAddress(
    callback: (localIpAddress: string) => void
  );

  export const MediaDevices: Device[];
  export const MediaStream: string[];
  export const MediaStreamTrack: string[];
  export const RTCPeerConnection: string[];
}
export = DetectRTC;
