import { Code2, Server, Database, Cpu } from "lucide-react";
import { headings } from "@/data/site";
import { techstack, techNote } from "@/data/techstack";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Code2, Server, Database, Cpu];
export function TechStack() {
  return <section id="tech" className="section section-tinted" aria-labelledby="tech-heading"><Container>
    <SectionHeading {...headings.tech} id="tech-heading" />
    <div className="tech-grid">{techstack.map((group, index) => { const Icon = icons[index]; return <article key={group.name}><Icon size={25} className="mb-5 text-cyan" aria-hidden="true" /><h3>{group.name}</h3><p>{group.description}</p><ul>{group.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul></article>; })}</div>
    <p className="mt-9 max-w-3xl text-xs leading-relaxed text-muted">{techNote}</p>
  </Container></section>;
}
