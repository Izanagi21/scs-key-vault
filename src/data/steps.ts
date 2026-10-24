import { Fingerprint, UserCheck, KeyRound, Radio, type LucideIcon } from "lucide-react";

export interface Step { number: string; title: string; description: string; icon: LucideIcon }
export const steps: Step[] = [
  { number: "01", title: "Scan your fingerprint", description: "Place your enrolled finger on the cabinet's fingerprint sensor.", icon: Fingerprint },
  { number: "02", title: "Verify your identity", description: "The system checks your identity and authorization for the key.", icon: UserCheck },
  { number: "03", title: "Retrieve the key", description: "The assigned key slot unlocks and the LCD confirms access.", icon: KeyRound },
  { number: "04", title: "Keep a clear record", description: "The access event is logged and appears on the dashboard in real time.", icon: Radio },
];
