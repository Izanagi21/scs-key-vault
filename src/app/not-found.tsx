import { LockKeyhole } from "lucide-react";
import { notFound } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return <main id="main-content"><Container className="flex min-h-[65vh] flex-col items-start justify-center py-24">
    <LockKeyhole size={42} className="mb-8 text-cyan" aria-hidden="true" /><p className="mb-3 font-mono text-violet">{notFound.code}</p><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{notFound.title}</h1><p className="my-6 max-w-xl leading-relaxed text-muted">{notFound.description}</p><Button href="/">{notFound.action}</Button>
  </Container></main>;
}
