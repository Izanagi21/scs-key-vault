import { site } from "@/data/site";

export const SITE_NAME = site.name;
export const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL?.trim() || "#";
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")).replace(/\/$/, "");
