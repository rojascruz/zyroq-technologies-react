import Services from '../../components/sections/Services/Services'
import Process from '../../components/sections/Process/Process'
import CompactCTA from '../../components/sections/CompactCTA/CompactCTA'

import './ServicesPage.css'

function ServicesPage() {
  return (
    <main className="services-page">
      <div className="page-header-spacer" />

      <Services />

      <Process />

      <CompactCTA variant="services" />
    </main>
  )
}

export default ServicesPage