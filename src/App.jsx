import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"


const App = () => {
  return (
    <BrowserRouter>
   <NavBar />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      
    </Routes>
  
    </BrowserRouter>
  )
}

export default App