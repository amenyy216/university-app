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
function StudentCard() {
  return (
    <main className="student-card">
      <img src={etudiant.image} alt={etudiant.nom} className="profile-img" />
      <h1>Fiche étudiant</h1>
      <div>
      <strong>Nom &amp; prénom :</strong> {etudiant.nom}<br />
      <strong>Email :</strong> {etudiant.email}<br />
      <strong>Téléphone :</strong> {etudiant.telephone}<br />
      <strong>Filière :</strong> {etudiant.filiere}<br />
      <strong>Année d'étude :</strong> {etudiant.annee}<br />
      <strong>Groupe :</strong> {etudiant.groupe}<br />
      <strong>Ville :</strong> {etudiant.ville}
      </div>
    </main>
     );
     }
     export default StudentCard;
