

import { Header } from './components/Header'
import { Hero } from './pages/Hero'
import { Service } from './pages/ServicesPage'
import { Jobs } from './pages/Jobs';
import { Footer } from './components/Footer';
import { Work } from './pages/Work';
import { About } from './pages/About';
function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Service />
      <Work />
      <Jobs />
      <Footer />
    </main>
  )
}

export default App
