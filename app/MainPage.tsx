import CategorySection from "@/components/categorySection/CategorySection";
import HeroSection from "@/components/heroSection/widgets/HeroSection";

export default function MainPage () {
  return (
    <main className="bg-[url(/images/bgHero.png)] bg-no-repeat bg-contain">
      <HeroSection />
      <CategorySection />
    </main>
  )
}