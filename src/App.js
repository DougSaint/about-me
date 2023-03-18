import Footer from "./components/Footer";
import Header from "./components/Header";
import Whatsapp from "./components/Whatsapp";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import 'aos/dist/aos.css';

import AOS from 'aos'
import { useEffect } from 'react';


function App() {

  const fetchApi = async () => {
    const result = await fetch('https://api.github.com/users/DougSaint/repos');
    const data = await result.json();
    console.log(data[13])
  }
  fetchApi();

  useEffect(()=> {
    AOS.init();
  }, [])


  return (
    <>
      <Whatsapp />
      <Header />
      <Home />
      
      <Projects />
      <Skills />
      <ContactPage />
      <Footer/>
    </>
  );

}
export default App;
