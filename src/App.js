import About from "./components/about/About";

import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import {useState, useEffect} from "react";
import Programs from "./components/programs/Programs";

import Flotas from "./components/flotas/Flotas";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


function App() {

  const [scrollHeight, setScrollHeight] = useState()

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeight(position)
  }

  useEffect( () =>{
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  return (
   <div>
     <Navbar isScrolling={scrollHeight}/>
     <Hero/>
     <About/>
     <Programs/>
     <Flotas/> 
     <Contact/>
     <Footer/>
   
     
    </div>
  )
}

export default App;
