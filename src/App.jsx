

import { Header } from './components/Header'
import { Hero } from './pages/Hero'
import { Service } from './pages/ServicesPage'
import { Jobs } from './pages/Jobs';
import { Footer } from './components/Footer';
function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Service />
      <Jobs />
      <Footer />
    </main>
  )
}

export default App
