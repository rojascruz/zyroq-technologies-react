import Hero from '../../components/sections/Hero/Hero'
import HomeShowcase from '../../components/sections/HomeShowcase/HomeShowcase'
import HomeCTA from '../../components/sections/HomeCTA/HomeCTA'

import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <Hero />

       <HomeShowcase />

      <HomeCTA />
    </main>
  )
}

export default Home