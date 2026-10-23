import './StudentCard.css';
import { useState } from "react";


function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);
  const ville = props.ville || "Non renseignée"; 
  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }
 
  function modifier() {
    const nouveauPrenom = window.prompt("Nouveau prénom :", props.prenom);
    if (nouveauPrenom && nouveauPrenom.trim() !== "") {
      props.onModifier(props.id, nouveauPrenom.trim());
    }
  }
 
  function supprimer() {
    props.onSupprimer(props.id);
  }
 
  
  return (
    <div className="card">

      {props.image && <img src={props.image} alt="Photo de l'étudiant" className='card img' />}
 
      <h1>Fiche étudiant</h1>
 
      <p>
        Nom &amp; Prénom : {props.prenom} {props.nom}
      </p>
 
      {coordonneesVisibles && (
        <>
          <p>Email : {props.email}</p>
          <p>Téléphone : {props.telephone}</p>
        </>
      )}
 
      <p>Filière : {props.filiere}</p>
      <p>Année : {props.anneeEtude}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {ville}</p>
   
      <div className="card-actions">
        <button onClick={basculerCoordonnees}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>
        <button>Contacter</button>
        <button onClick={modifier}>Modifier</button>
        <button onClick={supprimer}>Supprimer</button>
      </div>
    </div>
      );
     }
     export default StudentCard;
