"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/data/site";
import { DASHBOARD_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      let current = "";
      for (const link of [...navigation].sort((a, b) => {
        const left = document.querySelector(a.href)?.getBoundingClientRect().top ?? 0;
        const right = document.querySelector(b.href)?.getBoundingClientRect().top ?? 0;
        return left - right;
      })) {
        if ((document.querySelector(link.href)?.getBoundingClientRect().top ?? Infinity) <= 180) current = link.href;
      }
      setActive(current);
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (media.matches) setOpen(false); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
    };
  }, []);
  return <header className="site-header">
    <Container className="flex min-h-20 items-center justify-between gap-5">
      <Link href="/#top" title={site.home} className="brand" onClick={() => setOpen(false)}>
        <Image src="/images/scs-logo.jpg" width={39} height={39} alt={site.scsAlt} priority className="crest" />
        <span className="brand-divider" aria-hidden="true" />
        <span>{site.name} <span className="brand-subtitle">{site.college}</span></span>
      </Link>
      <nav aria-label={site.navigation} className="hidden items-center gap-5 lg:flex">
        {navigation.map(link => <a key={link.href} href={`/${link.href}`} className={cn("nav-link", active === link.href && "is-active")} aria-current={active === link.href ? "location" : undefined}>{link.label}</a>)}
      </nav>
      <Button href={DASHBOARD_URL} className="hidden min-h-10 px-4 text-xs lg:inline-flex">{site.dashboard}<ArrowUpRight size={15} aria-hidden="true" /></Button>
      <button ref={toggle} type="button" className="menu-toggle lg:hidden" aria-label={open ? site.menuClose : site.menuOpen} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </Container>
    <nav id="mobile-navigation" aria-label={site.navigation} hidden={!open} className="mobile-navigation lg:hidden">
      <Container className="grid gap-1 pb-6">
        {navigation.map(link => <a key={link.href} href={`/${link.href}`} className={cn("nav-link px-3 py-3", active === link.href && "is-active")} aria-current={active === link.href ? "location" : undefined} onClick={() => setOpen(false)}>{link.label}</a>)}
        <Button href={DASHBOARD_URL} onClick={() => setOpen(false)} className="mt-3">{site.dashboard}<ArrowUpRight size={16} aria-hidden="true" /></Button>
      </Container>
    </nav>
  </header>;
}
