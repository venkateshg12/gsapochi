import About from "./components/About"
import Eyes from "./components/Eyes"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import Featured from "./components/Featured";
import Design from "./components/Design"
import Footer from "./components/Footer"
import LocomotiveScroll from "locomotive-scroll"

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <div>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Design />
        <Footer />
      </div>
    </div>
  )
}

export default App
