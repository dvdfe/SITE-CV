import { useEffect, useState } from "react";
import axios from "axios";

import Banner from "./components/Banner";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Hobbies from "./components/Hobbies";
import Presentation from "./components/Presentation";
import Studies from "./components/Studies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    axios
      .get("./assets/data/mock.json")
      .then((response) => {
        console.log("la reponse est", response.data);
        setDeveloper(response.data.developer);
      })
      .catch((error) => {
        console.error(
          "une erreur est survenue lors de l'obtention des données",
          error
        );
      });
  }, []);

  if (!developer) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Chargement de la page...
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Banner />
      <Presentation developer={developer} />
      <Experiences />
      <Studies />
      <Hobbies developer={developer} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
