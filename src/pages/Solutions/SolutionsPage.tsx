import Solutions from '../../components/sections/Solutions/Solutions'
import CompactCTA from '../../components/sections/CompactCTA/CompactCTA'

import './SolutionsPage.css'

function SolutionsPage() {
  return (
    <main className="solutions-page">
      <div className="page-header-spacer" />

      <Solutions />

      <CompactCTA variant="solutions" />
    </main>
  )
}

export default SolutionsPage