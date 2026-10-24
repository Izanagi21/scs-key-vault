import { Plus } from "lucide-react";
import { headings } from "@/data/site";
import { faq } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return <section id="faq" className="section section-tinted" aria-labelledby="faq-heading"><Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
    <SectionHeading {...headings.faq} id="faq-heading" />
    <div className="faq-list">{faq.map(item => <details key={item.question}><summary><span>{item.question}</span><Plus size={19} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
  </Container></section>;
}
