import { Fingerprint, Radio, Logs, ShieldCheck, Wifi, Monitor, LayoutDashboard, History, type LucideIcon } from "lucide-react";

export interface Feature { title: string; description: string; icon: LucideIcon }
export const features: Feature[] = [
  { title: "Your fingerprint is your access", description: "Verify enrolled users at the cabinet before releasing a specific room key.", icon: Fingerprint },
  { title: "Know what's available", description: "See live key-slot status from the admin dashboard without checking the cabinet.", icon: Radio },
  { title: "Find the record you need", description: "Search and filter timestamped access logs to trace a key handoff.", icon: Logs },
  { title: "The right level of access", description: "Role-based permissions and JWT authentication govern access to admin functions.", icon: ShieldCheck },
  { title: "Connected from the cabinet", description: "Wi-Fi and MQTT carry device events between the ESP32 and the backend.", icon: Wifi },
  { title: "Clear feedback on the spot", description: "A 20×4 I2C LCD gives users feedback at each stage of the access process.", icon: Monitor },
  { title: "One place to manage it", description: "Manage registered users, review activity, and check key availability in the web dashboard.", icon: LayoutDashboard },
  { title: "A history worth keeping", description: "Associate access events with user, key, and time for a reviewable audit trail.", icon: History },
];
