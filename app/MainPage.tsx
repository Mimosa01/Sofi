import CategorySection from "@/components/categorySection/CategorySection";
import HeroSection from "@/components/heroSection/widgets/HeroSection";
import BackgroundGradient from "@/shared/ui/atoms/BackgroundGradient";

export default function MainPage () {
  return (
    <main className="relative">
      <BackgroundGradient 
        className="absolute top-0 left-0" 
      />
      <HeroSection />
      <CategorySection />
    </main>
  )
}