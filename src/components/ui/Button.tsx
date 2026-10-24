import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"a"> & { variant?: "primary" | "secondary" };
export function Button({ variant = "primary", className, ...props }: Props) {
  return <a className={cn("button", variant === "primary" ? "button-primary" : "button-secondary", className)} {...props} />;
}
