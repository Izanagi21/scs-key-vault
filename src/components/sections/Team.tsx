import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { headings } from "@/data/site";
import { adviser, team, teamCopy } from "@/data/team";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Team() {
  return <section id="team" className="section" aria-labelledby="team-heading"><Container>
    <SectionHeading {...headings.team} id="team-heading" />
    <p className="mb-6 text-sm text-violet">{teamCopy.placeholder}</p>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{team.map(member => <article key={member.name} className="team-card">
      <div className="team-avatar">{member.image ? <Image src={member.image} alt={member.name} fill sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw" className="object-cover" /> : <><span className="avatar-grid" aria-hidden="true" /><span aria-hidden="true" className="avatar-initials">{member.initials}</span><GraduationCap size={25} className="avatar-icon" aria-hidden="true" /></>}</div>
      <h3>{member.name}</h3><p>{member.role}</p>
    </article>)}</div>
    <div className="adviser"><span className="icon-tile"><GraduationCap size={25} aria-hidden="true" /></span><div><h3>{adviser.name}</h3><p>{adviser.role}</p></div><p className="md:ml-auto">{teamCopy.adviserNote}</p></div>
  </Container></section>;
}
