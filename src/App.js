import Header from "./components/Header";
import Whatsapp from "./components/Whatsapp";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {

  const fetchApi = async () => {
    const result = await fetch('https://api.github.com/users/DougSaint/repos');
    const data = await result.json();
    console.log(data[13])
  }

  fetchApi();

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
