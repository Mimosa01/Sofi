import CategorySection from "@/components/categorySection/widgets/CategorySection";
import HeroSection from "@/components/heroSection/widgets/HeroSection";
import BackgroundGradient from "@/shared/ui/atoms/BackgroundGradient";
import { Suspense } from "react";

export default function MainPage () {
  return (
    <main className="relative">
      <BackgroundGradient 
        className="absolute top-0 left-0" 
      />
      <HeroSection />
      <Suspense>
        <CategorySection />
      </Suspense>
    </main>
  )
}