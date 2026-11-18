
import { useState } from "react";
import "./App.css";

import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import StudentCard from "./Components/StudentCard.jsx";
import Footer from "./Components/Footer.jsx";
import StudentForm from "./Components/StudentForm.jsx";

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

  const [afficherFormulaire, setAfficherFormulaire] = useState(false);

  const etudiantsFiltres = etudiants.filter((e) =>
    e.filiere.toLowerCase().includes(filtre.toLowerCase())
  );

  // Ajouter un étudiant reçu depuis StudentForm
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    };

    setEtudiants([...etudiants, etudiantAvecId]);
    setAfficherFormulaire(false);
  }

  // Supprimer un étudiant
  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
  }

  // Modifier le prénom
  function modifierPrenom(id, nouveauPrenom) {
    setEtudiants(
      etudiants.map((e) =>
        e.id === id ? { ...e, prenom: nouveauPrenom } : e
      )
    );
  }

  return (
    <div className="content">
      <Header />
      <Navbar />

      <div className="actions">
        <button
          onClick={() => setAfficherFormulaire(!afficherFormulaire)}
        >
          {afficherFormulaire
            ? "Fermer le formulaire"
            : "+ Ajouter un étudiant"}
        </button>
      </div>

      {afficherFormulaire && (
        <StudentForm onAjouterEtudiant={ajouterEtudiant} />
      )}

      <div className="filtre">
        <input
          type="text"
          placeholder="Filtrer par filière..."
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
        />
      </div>

      <div className="container">
        {etudiantsFiltres.length === 0 && (
          <p>Aucun étudiant trouvé.</p>
        )}

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
