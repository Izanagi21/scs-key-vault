import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return <footer className="site-footer"><Container>
    <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <Image src="/images/scs-logo.jpg" width={50} height={50} alt={site.scsAlt} className="crest" />
        <Image src="/images/cct-logo.jpg" width={44} height={62} alt={site.collegeAlt} className="object-contain" />
        <div><p className="font-semibold text-ink">{site.school}</p><p className="mt-1 text-sm text-muted">{site.college}</p><p className="mt-2 font-mono text-xs text-muted">{site.project} / {site.year}</p></div>
      </div>
      <nav aria-label={site.footerNavigation} className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
        {site.footerLinks.map(link => <a className="hover:text-cyan" href={`/${link.href}`} key={link.href}>{link.label}</a>)}
      </nav>
    </div>
    <div className="footer-bottom"><p>© {site.year} {site.copyright}</p><p>{site.footerNote}</p></div>
  </Container></footer>;
}
