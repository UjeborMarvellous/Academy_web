import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Break from './Break'
// import { Routes, Route } from "react-router-dom"
import Setup from "./Setup"
// import About from "./About"
// import Contact from "./Contact"

function Root() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Break></Break>
      <Routes>
        <Route path="/Setup" element={ <Setup /> } />
        
        {/* <Route path="about" element={ <About/> } /> */}
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  )
}
export default Root;