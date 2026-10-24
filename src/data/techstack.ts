export interface TechGroup { name: string; description: string; technologies: string[] }
export const techstack: TechGroup[] = [
  { name: "Frontend", description: "The admin experience", technologies: ["React", "TypeScript", "Tailwind CSS", "Socket.IO client"] },
  { name: "Backend", description: "Access and live events", technologies: ["NestJS", "REST API", "Socket.IO", "JWT", "Role-based access"] },
  { name: "Database", description: "Structured, searchable records", technologies: ["PostgreSQL", "Prisma ORM"] },
  { name: "IoT", description: "The connected cabinet", technologies: ["ESP32", "Adafruit Fingerprint", "20×4 I2C LCD", "Wi-Fi", "MQTT"] },
];
export const techNote = "This landing page is built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. The stack above describes the full Key Vault system.";
