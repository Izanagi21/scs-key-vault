"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Fingerprint, KeyRound, Radio, RotateCcw, ScanLine, ShieldCheck, Terminal, Wifi } from "lucide-react";
import { hero, site } from "@/data/site";
import { DASHBOARD_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const timers = [700, 1700, 3200].map((time, index) => setTimeout(() => setPhase(index + 1), time));
    return () => timers.forEach(clearTimeout);
  }, [reduced, run]);
  const finished = phase === 3;
  const scan = () => {
    if (finished) { setPhase(0); return; }
    if (reduced) setPhase(3);
    else { setPhase(1); setRun(value => value + 1); }
  };
  const BadgeIcons = [Wifi, Fingerprint, Radio];
  return <section className="hero-section" aria-labelledby="hero-heading">
    <Container>
      <div className="hero-layout">
        <Reveal className="hero-copy">
          <p className="hero-label"><span className="status-dot" />{hero.label}</p>
          <h1 id="hero-heading">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={DASHBOARD_URL}>{site.dashboard}<ArrowUpRight size={18} aria-hidden="true" /></Button>
            <Button href="#how-it-works" variant="secondary">{site.how}<ScanLine size={17} aria-hidden="true" /></Button>
          </div>
          <ul className="hero-badges">{hero.badges.map((badge, index) => { const Icon = BadgeIcons[index]; return <li key={badge}><Icon size={14} aria-hidden="true" />{badge}</li>; })}</ul>
        </Reveal>
        <div className="device-stage">
          <div className="device-orbit" aria-hidden="true" />
          <div className="device-panel">
            <div className="device-topline"><span className="flex items-center gap-2"><ShieldCheck size={17} aria-hidden="true" />{hero.cabinet}</span><Wifi size={16} className="text-mint" aria-hidden="true" /></div>
            <div className="lcd-screen"><span className="text-[10px] text-mint/80">{hero.demo}</span><p>{hero.states[phase]}</p><span className="lcd-cursor" aria-hidden="true">▰ ▰ ▰ ▰</span></div>
            <div className="device-body">
              <div className="sensor-column"><div className={cn("fingerprint-scanner", phase === 1 && "is-scanning", finished && "is-verified")} role="img" aria-label={hero.readerLabel}>
                <span className="scanner-corner corner-tl" /><span className="scanner-corner corner-tr" /><span className="scanner-corner corner-bl" /><span className="scanner-corner corner-br" />
                <Fingerprint className="fingerprint-icon" strokeWidth={0.8} aria-hidden="true" />
                {phase === 1 && <span className="scan-beam" aria-hidden="true" />}
              </div><span className="device-caption">{hero.module}</span></div>
              <div className="key-slots" role="group" aria-label={hero.keyLabel}>
                {hero.slots.map((slot, index) => { const taken = index === 1 || (index === 2 && finished); return <div key={slot} className={cn("key-slot", taken && "is-taken")}><span className="slot-id">{slot}</span><KeyRound aria-hidden="true" size={24} strokeWidth={1.4} /><span className="slot-state">{taken ? hero.taken : hero.available}</span></div>; })}
              </div>
            </div>
            <div className="device-event" role="status" aria-live="polite"><Terminal size={15} aria-hidden="true" /><span>{hero.logs[phase]}</span></div>
            <div className="device-base"><span className="screw" /><span>{hero.protocol}</span><span className="screw" /></div>
          </div>
          <div className="demo-controls"><button type="button" onClick={scan} disabled={phase === 1 || phase === 2} className="demo-button"><RotateCcw size={13} aria-hidden="true" />{finished ? hero.reset : phase > 0 ? hero.busy : hero.replay}</button><p>{hero.demoNote}</p></div>
        </div>
      </div>
      <div className="hero-footnote"><span className="small-rule" /><span>{hero.note}</span><span className="small-rule" /></div>
    </Container>
  </section>;
}
