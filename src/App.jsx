import { useState } from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./Components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

import AmaniImage from "./assets/student1.jpg";
import AyleenImage from "./assets/student2.jpg";
import AwebImage from "./assets/student3.jpg";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Amani",
      nom: "Bahri",
      groupe: "GLSI 2",
      ville: "*****",
      email: "a***ib***i***@gmail.com",
      telephone: "********",
      filiere: "Génie Logiciel",
      anneeEtude: "2026/2027",
      image: AmaniImage,
    },
    {
      id: 2,
      prenom: "Ayleen",
      nom: "Bouzidi",
      groupe: "IOT 2",
      ville: "Sousse",
      email: "ayleenbouzidi***@gmail.com",
      telephone: "********",
      filiere: "Internet of things",
      anneeEtude: "2026/2027",
      image: AyleenImage,
    },
    {
      id: 3,
      prenom: "Aweb",
      nom: "Dahmani",
      groupe: "GLSI 2",
      ville: "Monastir",
      email: "Awebdahmani***@gmail.com",
      telephone: "********",
      filiere: "Génie Logiciel",
      anneeEtude: "2026/2027",
      image: AwebImage,
    },
  ]);

  const [filtre, setFiltre] = useState("");

  function ajouterEtudiant() {
    const id = Date.now();
    const nouvelEtudiant = {
      id,
      prenom: "Yassine",
      nom: "Ben Salem",
      groupe: "GLSI 2",
      ville: "Sfax",
      email: `yassine.bensalem.${id}@gmail.com`,
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel",
      anneeEtude: "2026/2027",
      image: AmaniImage,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
  }

  function modifierPrenom(id, nouveauPrenom) {
    setEtudiants(
      etudiants.map((e) => (e.id === id ? { ...e, prenom: nouveauPrenom } : e))
    );
  }
     function ajouteretudiant() {
    props.onSupprimer(props.id);
  }
 

  const etudiantsFiltres = etudiants.filter((e) =>
    e.filiere.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Navbar />

      <div className="actions">
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
      </div>

      <div className="filtre">
        <input
          type="text"
          placeholder="Filtrer par filière..."
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
        />
      </div>

      <div className="container">
        {etudiantsFiltres.length === 0 && <p>Aucun étudiant trouvé.</p>}

        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            id={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierPrenom}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
