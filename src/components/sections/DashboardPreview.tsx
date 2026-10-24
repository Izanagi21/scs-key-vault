"use client";

import { useMemo, useState } from "react";
import { KeyRound, LayoutDashboard, Search, SlidersHorizontal } from "lucide-react";
import { headings, site } from "@/data/site";
import { dashboardCopy as copy, logs, metrics, slots } from "@/data/dashboard";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DashboardPreview() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(() => logs.filter(log =>
    `${log.user} ${log.room}`.toLowerCase().includes(query.trim().toLowerCase()) && (filter === "all" || log.action === filter)
  ), [query, filter]);
  return <section id="dashboard" className="section" aria-labelledby="dashboard-heading"><Container>
    <SectionHeading {...headings.dashboard} id="dashboard-heading" />
    <div className="browser-frame">
      <div className="browser-toolbar"><span className="browser-dots" aria-hidden="true"><i /><i /><i /></span><span>{copy.address}</span><span className="sample-tag">{copy.sample}</span></div>
      <div className="dashboard-shell">
        <div className="dashboard-sidebar" aria-hidden="true"><LayoutDashboard size={22} /><span className="sidebar-rule" /><KeyRound size={20} /><span className="sidebar-square" /><span className="sidebar-square" /></div>
        <div className="dashboard-content">
          <div className="dashboard-brand"><LayoutDashboard size={16} aria-hidden="true" /><span>{site.name}</span></div>
          <h3 className="text-xl font-semibold tracking-tight">{copy.title}</h3><p className="mb-6 mt-2 text-xs text-muted">{copy.description}</p>
          <div className="metric-grid">{metrics.map(metric => <div className="metric-card" key={metric.label}><p>{metric.label}</p><strong>{metric.value}</strong><span>{metric.note}</span></div>)}</div>
          <div className="mb-3 mt-7 flex flex-wrap items-center justify-between gap-2"><h4 className="text-sm font-semibold">{copy.keyTitle}</h4><div className="flex gap-3 text-[10px] text-muted"><span className="flex items-center gap-1.5"><span className="status-dot" />{copy.available}</span><span className="flex items-center gap-1.5"><span className="status-dot bg-violet" />{copy.taken}</span></div></div>
          <div className="dashboard-keys">{slots.map(slot => <div key={slot.id} className={cn("dashboard-key", slot.status === "Taken" && "taken")}><div className="flex items-center justify-between"><KeyRound size={19} aria-hidden="true" /><span>{slot.id}</span></div><p>{slot.name}</p><span className="key-status">{slot.status}</span></div>)}</div>
          <div className="log-toolbar"><h4 className="text-sm font-semibold">{copy.activityTitle}</h4><div className="log-controls"><label className="search-field"><Search size={14} aria-hidden="true" /><span className="sr-only">{copy.search}</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={copy.placeholder} /></label><label className="filter-field"><SlidersHorizontal size={13} aria-hidden="true" /><span className="sr-only">{copy.filter}</span><select value={filter} onChange={event => setFilter(event.target.value)}><option value="all">{copy.all}</option>{copy.options.map(option => <option key={option} value={option}>{option}</option>)}</select></label></div></div>
          <div className="table-scroll" tabIndex={0} role="region" aria-label={copy.activityTitle}>
            <table><caption className="sr-only">{copy.caption}</caption><thead><tr>{copy.columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead><tbody>
              {filtered.map(log => <tr key={log.id}><td>{log.user}</td><td>{log.room}</td><td><span className={cn("event-tag", log.action === "Returned" && "returned")}>{log.action}</span></td><td className="font-mono">{log.time}</td></tr>)}
              {filtered.length === 0 && <tr><td colSpan={4} className="empty-state">{copy.empty}</td></tr>}
            </tbody></table>
          </div>
          <p className="mt-3 text-[11px] text-muted" role="status" aria-live="polite">{filtered.length} {copy.result}</p>
        </div>
      </div>
    </div>
    <p className="preview-caption">{copy.caption}</p>
  </Container></section>;
}
