import type { Heading } from "@/data/site";
import { cn } from "@/lib/utils";

export function SectionHeading({ title, description, id, className }: Heading & { id?: string; className?: string }) {
  return <div className={cn("section-heading", className)}>
    <h2 id={id}>{title}</h2>
    <p>{description}</p>
  </div>;
}
