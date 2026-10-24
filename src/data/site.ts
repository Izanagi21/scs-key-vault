export interface NavLink { label: string; href: string }
export interface Heading { title: string; description: string }
export const navigation: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Hardware", href: "#hardware" },
  { label: "Tech", href: "#tech" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];
export const site = {
  name: "SCS Key Vault",
  title: "SCS Key Vault – Smart Fingerprint Key Holder System",
  description: "A fingerprint. The right key. A clear record. Explore the smart key cabinet capstone project of the School of Computer Studies, City College of Tagaytay.",
  school: "School of Computer Studies",
  college: "City College of Tagaytay",
  year: "2026",
  project: "A capstone project by SCS",
  keywords: ["SCS Key Vault", "smart key cabinet", "fingerprint", "ESP32", "IoT", "City College of Tagaytay", "capstone"],
  dashboard: "Open Dashboard",
  how: "See how it works",
  skip: "Skip to content",
  home: "SCS Key Vault City College of Tagaytay home",
  menuOpen: "Open navigation",
  menuClose: "Close navigation",
  navigation: "Main navigation",
  footerNavigation: "Footer navigation",
  logoAlt: "SCS Key Vault symbol",
  scsAlt: "School of Computer Studies crest",
  collegeAlt: "City College of Tagaytay crest",
  ogAlt: "SCS Key Vault — fingerprint access and accountable key management",
  copyright: "SCS Key Vault. All rights reserved.",
  footerNote: "Built for the rooms where learning happens.",
  footerLinks: [{ label: "How it works", href: "#how-it-works" }, { label: "Meet the team", href: "#team" }, { label: "Back to top", href: "#top" }] satisfies NavLink[],
};
export const headings: Record<string, Heading> = {
  problem: { title: "A better way to keep track of every key.", description: "Shared rooms need shared accountability. A paper logbook can only tell you so much." },
  process: { title: "One fingerprint. Four simple steps.", description: "From the cabinet to the dashboard, every handoff has a clear record." },
  features: { title: "Small cabinet. Smarter control.", description: "The essentials for managing laboratory and room keys, connected in one system." },
  hardware: { title: "Real hardware. One connected system.", description: "An ESP32 brings identity, physical access, and live communication together at the cabinet." },
  dashboard: { title: "Every key has a story. See it live.", description: "The admin dashboard brings key availability, access activity, and user management into one place." },
  tech: { title: "Built to work together.", description: "A connected stack, from a fingerprint at the cabinet to an update in the browser." },
  team: { title: "Built by students. Made for SCS.", description: "A capstone project from the School of Computer Studies, City College of Tagaytay." },
  faq: { title: "A few things you might be wondering.", description: "The device, the dashboard, and what to expect from this project." },
};
export const hero = {
  label: "Smarter access starts here",
  title: "The right key.\nThe right hands.",
  description: "Your fingerprint opens the way. SCS Key Vault connects secure key access with a real-time record, so every room key stays accounted for.",
  badges: ["IoT connected", "Biometric access", "Real-time visibility"] as string[],
  note: "Designed for SCS classrooms and laboratories",
  cabinet: "SCS / Key Vault",
  demo: "Interactive device demo",
  module: "Fingerprint module",
  readerLabel: "Fingerprint reader with simulated scan animation",
  keyLabel: "Room key slots",
  available: "Available",
  taken: "Taken",
  slots: ["01", "02", "03", "04", "05", "06"] as string[],
  states: ["Ready to scan", "Reading fingerprint…", "Identity verified", "Slot 03 unlocked"] as string[],
  logs: ["Awaiting fingerprint", "Matching enrolled identity", "Access authorized · Room 203", "Access recorded · Room 203"] as string[],
  replay: "Simulate fingerprint scan",
  reset: "Reset demo",
  busy: "Scanning…",
  demoNote: "Illustrative simulation. No fingerprint data is collected.",
  protocol: "ESP32 / Wi-Fi + MQTT",
};
export interface ProblemItem { title: string; description: string; icon: "key" | "book" | "shield" }
export const problems: ProblemItem[] = [
  { title: "Keys without a clear owner", description: "A missing or unreturned key can delay the next class. See which key was taken and by whom.", icon: "key" },
  { title: "Logbooks with missing details", description: "Handwritten entries are easy to miss and hard to search. Keep a timestamped access history instead.", icon: "book" },
  { title: "Access without verification", description: "A shared key can pass from hand to hand. Verify an enrolled user's identity before the assigned slot unlocks.", icon: "shield" },
];
export const cta = {
  title: "Better access.\nClearer accountability.",
  description: "A smarter way to manage the keys your campus depends on.",
  secondary: "Explore the system",
};
export const notFound = {
  code: "404",
  title: "This door leads nowhere.",
  description: "The page you are looking for may have moved. Head back to the Key Vault overview.",
  action: "Back to home",
};
