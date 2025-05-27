
"use client";
import { GenkitContext } from "@genkit-ai/next/genkit";
import type { ReactNode } from "react";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <GenkitContext>{children}</GenkitContext>;
}
