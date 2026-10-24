export interface TeamMember { name: string; role: string; initials: string; image: string | null }
// PLACEHOLDERS: replace names, roles, initials, and image paths before publication.
// Store portraits in public/images/team and use /images/team/filename.webp.
export const team: TeamMember[] = [
  { name: "Team member 1", role: "Project lead / Full-stack developer", initials: "01", image: null },
  { name: "Team member 2", role: "IoT / Hardware developer", initials: "02", image: null },
  { name: "Team member 3", role: "Frontend / UI designer", initials: "03", image: null },
  { name: "Team member 4", role: "Research / Quality assurance", initials: "04", image: null },
];
export const adviser: TeamMember = { name: "Adviser name", role: "Capstone adviser", initials: "A", image: null };
export const teamCopy = { placeholder: "Team details coming soon", adviserNote: "Guiding the project from research to implementation." };
