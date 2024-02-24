import Apps from "./components/Apps"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Howwork from "./components/Howwork"
import Navbar from "./components/Navbar"
import PopularItems from "./components/PopularItems"


const App = () => {
  return (
    <div className="xl:container">
      <Navbar />
      <Hero />
      <PopularItems />
      <Feature />
      <Howwork />
      <Apps />
      <Footer />
    </div>
  )
}

export default App