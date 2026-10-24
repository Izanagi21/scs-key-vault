export interface HardwareComponent { name: string; detail: string; label: string }
export const hardware: HardwareComponent[] = [
  { name: "ESP32 controller", detail: "Coordinates the sensor, display, lock, and network connection.", label: "Controller" },
  { name: "Fingerprint sensor", detail: "Reads enrolled fingerprints using the Adafruit fingerprint library.", label: "Identity" },
  { name: "20×4 I2C LCD", detail: "Shows access prompts and feedback at the cabinet.", label: "Feedback" },
  { name: "Solenoid / key-slot lock", detail: "Releases the authorized slot through a suitable driver circuit.", label: "Access" },
];
export const hardwareCopy = {
  diagram: "System block diagram: fingerprint sensor connects to ESP32; ESP32 controls LCD and key-slot lock, and communicates over Wi-Fi and MQTT with the backend, which updates the dashboard over Socket.IO.",
  input: "Fingerprint sensor",
  controller: "ESP32",
  display: "20×4 LCD",
  lock: "Key-slot lock",
  transport: "Wi-Fi / MQTT",
  backend: "NestJS backend",
  realtime: "Socket.IO",
  dashboard: "Web dashboard",
  note: "Conceptual architecture. Lock power and driver circuitry are omitted for clarity.",
};
