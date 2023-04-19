import About from "./components/About"
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
    </div>
  )
}

export default App
