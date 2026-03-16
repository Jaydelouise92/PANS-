import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StartHerePage from './pages/StartHerePage'
import ChildProtectionPage from './pages/ChildProtectionPage'
import CourtGuidePage from './pages/CourtGuidePage'
import RightsPage from './pages/RightsPage'
import SelfRepPage from './pages/SelfRepPage'
import MentalHealthPage from './pages/MentalHealthPage'
import ResourcesPage from './pages/ResourcesPage'
import FounderPage from './pages/FounderPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-here" element={<StartHerePage />} />
        <Route path="/child-protection" element={<ChildProtectionPage />} />
        <Route path="/court-guide" element={
          <PageLayout>
            <CourtGuidePage />
          </PageLayout>
        } />
        <Route path="/rights" element={<RightsPage />} />
        <Route path="/self-rep" element={<SelfRepPage />} />
        <Route path="/mental-health" element={<MentalHealthPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/founder" element={<FounderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
