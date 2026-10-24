import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cta, site } from "@/data/site";
import { DASHBOARD_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Cta() {
  return <section id="get-started" className="section" aria-labelledby="cta-heading"><Container>
    <div className="cta-panel"><div><Image src="/logo.svg" width={42} height={42} alt={site.logoAlt} className="mb-6" /><h2 id="cta-heading">{cta.title}</h2><p>{cta.description}</p></div>
      <div className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col"><Button href={DASHBOARD_URL}>{site.dashboard}<ArrowUpRight size={18} aria-hidden="true" /></Button><Button href="#features" variant="secondary">{cta.secondary}</Button></div>
    </div>
  </Container></section>;
}
