import Header from "./components/Header";
import Whatsapp from "./components/Whatsapp";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Whatsapp />
      <Header />
      <Home />
      <Skills />
      <ContactPage />
    </>
  );
}

export default App;
