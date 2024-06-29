import AboutUsSection from '@/components/AboutUsSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import FaQSection from '@/components/FaQSection'
import HeroSection from '@/components/HeroSection'
import NewsSection from '@/components/NewsSection'
import TestimonialSection from '@/components/TestimonialSection'

const HomePage = () => {
  return (
    <div className='space-y-10'  >
        <HeroSection />
        <TestimonialSection />
        <AboutUsSection />
        <ExpertiseSection />
        <NewsSection />
        <FaQSection />
    </div>
  )
}

export default HomePage