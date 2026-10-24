import { headings } from "@/data/site";
import { features } from "@/data/features";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";

export function Features() {
  return <section id="features" className="section" aria-labelledby="features-heading"><Container>
    <SectionHeading {...headings.features} id="features-heading" />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(feature => <FeatureCard key={feature.title} {...feature} />)}</div>
  </Container></section>;
}
