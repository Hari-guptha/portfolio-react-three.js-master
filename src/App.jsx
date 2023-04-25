import About from "./components/About"
import Artwork from "./components/Artwork"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Main } from "./components/main"
import { Navbar } from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Tech from "./components/Tech"
import Timeline from "./components/Timeline.jsx"


function App() {
  return (
    <div style={{backgroundColor:"black"}}>
    <Navbar/>
    <Main />
    <About />
    <Skills />
    <Tech />
    <Timeline />
    <Project />
    <Artwork />
    <Contact/>
    <Footer />
    </div>
  )
}

export default App
