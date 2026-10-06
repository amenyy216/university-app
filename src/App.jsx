import './App.css'
import profileImg from './assets/Profileph.jpg' // L'import de l'image est ici
const etudiant = {
  nom: 'Amani Bahri',
  groupe: 'GLSI 2',
  ville: 'Mahdia',
  email: 'amenibahri***@gmail.com',
  telephone: '********',
  filiere: 'Génie Logiciel',
  annee: '2026/2027',
  image: profileImg
}

function App() {
  return (
    <main className="student-card">
      <img src={etudiant.image} alt={etudiant.nom} className="profile-img" />
      <h1>Fiche étudiant</h1>
      <p><strong>Nom &amp; prénom :</strong> {etudiant.nom}</p>
      <p><strong>Email :</strong> {etudiant.email}</p>
      <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
      <p><strong>Filière :</strong> {etudiant.filiere}</p>
      <p><strong>Année d'étude :</strong> {etudiant.annee}</p>
      <p><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p><strong>Ville :</strong> {etudiant.ville}</p>

      <a className="contact-button" href={`mailto:${etudiant.email}`}>
        Contacter
      </a>
    </main>
  )
}

export default App
