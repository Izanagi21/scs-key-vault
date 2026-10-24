import { BookOpen, KeyRound, ShieldAlert } from "lucide-react";
import { headings, problems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = { key: KeyRound, book: BookOpen, shield: ShieldAlert };
export function Problem() {
  return <section id="problem" className="section" aria-labelledby="problem-heading"><Container>
    <SectionHeading {...headings.problem} id="problem-heading" />
    <div className="grid gap-5 md:grid-cols-3">{problems.map(item => { const Icon = icons[item.icon]; return <article key={item.title} className="problem-card"><Icon size={23} className="text-violet" aria-hidden="true" /><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>
  </Container></section>;
}
