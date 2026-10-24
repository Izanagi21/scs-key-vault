import { headings } from "@/data/site";
import { steps } from "@/data/steps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return <section id="how-it-works" className="section section-tinted" aria-labelledby="process-heading"><Container>
    <SectionHeading {...headings.process} id="process-heading" />
    <ol className="steps">{steps.map(({ number, title, description, icon: Icon }) => <li key={number}>
      <div className="step-top"><span className="step-icon"><Icon size={25} aria-hidden="true" /></span><span className="step-number" aria-hidden="true">{number}</span></div><h3>{title}</h3><p>{description}</p>
    </li>)}</ol>
  </Container></section>;
}
