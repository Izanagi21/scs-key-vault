export type KeyStatus = "Available" | "Taken";
export interface KeySlot { id: string; name: string; status: KeyStatus }
export interface AccessLog { id: number; user: string; room: string; action: "Retrieved" | "Returned"; time: string }
export const slots: KeySlot[] = [
  { id: "01", name: "Computer Lab 1", status: "Available" },
  { id: "02", name: "Computer Lab 2", status: "Taken" },
  { id: "03", name: "Room 203", status: "Available" },
  { id: "04", name: "Room 204", status: "Available" },
  { id: "05", name: "Faculty room", status: "Taken" },
  { id: "06", name: "Network lab", status: "Available" },
];
export const logs: AccessLog[] = [
  { id: 1, user: "Demo user A", room: "Computer Lab 2", action: "Retrieved", time: "09:42:08" },
  { id: 2, user: "Demo user B", room: "Room 203", action: "Returned", time: "09:38:24" },
  { id: 3, user: "Demo user C", room: "Faculty room", action: "Retrieved", time: "09:31:16" },
  { id: 4, user: "Demo user D", room: "Network lab", action: "Returned", time: "09:25:03" },
];
export const metrics: { label: string; value: string; note: string }[] = [
  { label: "Total keys", value: "06", note: "Across the cabinet" },
  { label: "Available", value: "04", note: "Ready to retrieve" },
  { label: "In use", value: "02", note: "Currently taken" },
  { label: "Access events", value: "04", note: "In this sample" },
];
export const dashboardCopy = {
  address: "scs-key-vault / overview",
  sample: "Sample data",
  title: "Cabinet overview",
  description: "Your rooms, keys, and recent activity at a glance.",
  keyTitle: "Key availability",
  activityTitle: "Recent access",
  search: "Search access logs",
  placeholder: "Search user or room…",
  filter: "Filter access events",
  all: "All events",
  options: ["Retrieved", "Returned"] as const,
  columns: ["User", "Room / laboratory", "Event", "Time"] as string[],
  empty: "No matching events. Try another search or choose All events.",
  result: "matching events",
  available: "Available",
  taken: "Taken",
  caption: "Interactive preview with illustrative data. Search and filter the access log to explore.",
};
