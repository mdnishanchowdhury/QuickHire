import CategoryGrid from "../../componets/home/CategoryGrid"
import FeaturedJobs from "../../componets/home/FeaturedJobs"
import Hero from "../../componets/home/HeroSection"
import JobBoard from "../../componets/home/JobBoard"
import LogoSection from "../../componets/home/LogoSection"
import StartHiringSection from "../../componets/home/StartHiringSection"

function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF] font-sans overflow-hidden relative">
      <Hero />

      <LogoSection />
      <CategoryGrid />
      <StartHiringSection />
      <FeaturedJobs />
      <JobBoard/>
    </div>
  )
}

export default Home