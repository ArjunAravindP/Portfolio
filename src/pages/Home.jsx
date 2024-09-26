import Expertise from "../components/Expertise"
import HeroSection from "../components/HeroSection"
import OverTheYears from "../components/OverTheYears"
export default function HomePage() {
  return (
    <>
      <div className="h-screen md:snap-y snap-mandatory overflow-scroll ">
        <HeroSection />
        <Expertise />
        <OverTheYears />
      </div>
    </>
  )
}
