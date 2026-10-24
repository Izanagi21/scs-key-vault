import { Cpu, Fingerprint, Monitor, LockKeyhole, Server, LayoutDashboard, ArrowDown, ArrowRight } from "lucide-react";
import { headings } from "@/data/site";
import { hardware, hardwareCopy as copy } from "@/data/hardware";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Hardware() {
  return <section id="hardware" className="section section-tinted" aria-labelledby="hardware-heading"><Container>
    <SectionHeading {...headings.hardware} id="hardware-heading" />
    <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <dl className="hardware-list">{hardware.map(item => <div key={item.name}><dt><span>{item.name}</span><span className="hardware-label">{item.label}</span></dt><dd>{item.detail}</dd></div>)}</dl>
      <figure className="hardware-figure"><div className="architecture" role="img" aria-label={copy.diagram}>
        <div className="diagram-node"><Fingerprint size={23} aria-hidden="true" />{copy.input}</div><ArrowDown className="diagram-arrow" aria-hidden="true" />
        <div className="diagram-core"><Cpu size={31} aria-hidden="true" /><span>{copy.controller}</span></div>
        <div className="diagram-branches"><div><ArrowDown className="diagram-arrow" aria-hidden="true" /><span className="diagram-node"><Monitor size={19} aria-hidden="true" />{copy.display}</span></div><div><ArrowDown className="diagram-arrow" aria-hidden="true" /><span className="diagram-node"><LockKeyhole size={19} aria-hidden="true" />{copy.lock}</span></div></div>
        <div className="diagram-transport"><ArrowDown size={16} aria-hidden="true" />{copy.transport}</div>
        <div className="diagram-node"><Server size={20} aria-hidden="true" />{copy.backend}</div>
        <div className="diagram-transport"><ArrowDown size={16} aria-hidden="true" />{copy.realtime}</div>
        <div className="diagram-node diagram-dashboard"><LayoutDashboard size={20} aria-hidden="true" />{copy.dashboard}<ArrowRight size={15} aria-hidden="true" /></div>
      </div><figcaption>{copy.note}</figcaption></figure>
    </div>
  </Container></section>;
}
