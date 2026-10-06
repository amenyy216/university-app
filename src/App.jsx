import './App.css'

const etudiant = {
  nom: 'Amani Bahri',
  groupe: 'GLSI 2',
  ville: 'Mahdia',
  email: 'amanibahri@gmail.com',
}

function App() {
  return (
    <main className="student-card">
      <h1>Fiche étudiant</h1>
      <p><strong>Nom &amp; prénom :</strong> {etudiant.nom}</p>
      <p><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p><strong>Ville :</strong> {etudiant.ville}</p>
      <a className="contact-button" href={`mailto:${etudiant.email}`}>
        Contacter
      </a>
    </main>
  )
}

export default App
