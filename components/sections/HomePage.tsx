"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WeeklyArrivalsSection } from "@/components/sections/WeeklyArrivalsSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <HeroSection />
        <WeeklyArrivalsSection />
        <CategoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
