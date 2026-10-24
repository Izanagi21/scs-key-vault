import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Hardware } from "@/components/sections/Hardware";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { TechStack } from "@/components/sections/TechStack";
import { Team } from "@/components/sections/Team";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return <main id="main-content"><Hero /><Problem /><HowItWorks /><Features /><Hardware /><DashboardPreview /><TechStack /><Team /><Faq /><Cta /></main>;
}
