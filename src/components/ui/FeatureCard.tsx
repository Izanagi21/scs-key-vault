import type { Feature } from "@/data/features";

export function FeatureCard({ title, description, icon: Icon }: Feature) {
  return <article className="feature-card">
    <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
    <h3>{title}</h3><p>{description}</p>
  </article>;
}
