import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton/WhatsAppButton'

import Home from './pages/Home/Home'
import ServicesPage from './pages/Services/ServicesPage'
import SolutionsPage from './pages/Solutions/SolutionsPage'
import ContactPage from './pages/Contact/ContactPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<ServicesPage />}
        />

        <Route
          path="/solutions"
          element={<SolutionsPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>

      <Footer />

      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App