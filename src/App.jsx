import Navbar from './component/Navbar.jsx'
import Faq from './component/Faq.jsx'
import Projects from './component/Projects.jsx'
import Footer from './component/Footer.jsx'
import Index from './component/Index.jsx'
import './App.css'
import Hiw from './component/Hiw.jsx'
import WhyWe from './component/WhyWe.jsx'

function App() {
  //Code to block DevTools
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    // alert("Something went wrong try again later");
  });

  document.addEventListener("keydown", function (event) {
    // Block F12 and Ctrl+Shift+I (commonly used to open DevTools)
    if (
      event.key === "F12" ||
      (event.ctrlKey && event.shiftKey && event.key === "I")
    ) {
      event.preventDefault();
      // alert("Something went wrong try again later");
    }
  });
  return (
    <>
      <Navbar />
      <Index />
      <Projects />
      <WhyWe />
      <Hiw />
      <Faq />
      <Footer />
    </>
  )
}

export default App
