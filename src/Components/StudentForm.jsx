import { useState } from "react";
import "./StudentForm.css";

function StudentForm({
    onAjouterEtudiant,
    etudiantAModifier,
    onModifierEtudiant,
}) {
    // États initialisés avec les anciennes valeurs (mode modification) ou vides (mode ajout)
    const [nom, setNom] = useState(etudiantAModifier?.nom || "");
    const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
    const [email, setEmail] = useState(etudiantAModifier?.email || "");
    const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
    const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
    const [anneeEtude, setAnneeEtude] = useState(etudiantAModifier?.anneeEtude || "");
    const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
    const [ville, setVille] = useState(etudiantAModifier?.ville || "");
    const [image, setImage] = useState(etudiantAModifier?.image || "");

    // État des erreurs de validation
    const [erreurs, setErreurs] = useState({});

    // Vérifie les champs et retourne true s'il n'y a aucune erreur
    function validerFormulaire() {
        const nouvellesErreurs = {};

        if (!nom.trim()) {
            nouvellesErreurs.nom = "Le nom est obligatoire";
        }
        if (!prenom.trim()) {
            nouvellesErreurs.prenom = "Le prénom est obligatoire";
        }

        if (!email.trim()) {
            nouvellesErreurs.email = "L'email est obligatoire";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            nouvellesErreurs.email = "L'email n'est pas valide";
        }

        if (!telephone.trim()) {
            nouvellesErreurs.telephone = "Le téléphone est obligatoire";
        } else if (!/^\+?\d{8,15}$/.test(telephone.replace(/\s/g, ""))) {
            nouvellesErreurs.telephone = "Numéro invalide (8 à 15 chiffres)";
        }

        if (!filiere) {
            nouvellesErreurs.filiere = "Veuillez choisir une filière";
        }
        if (!anneeEtude) {
            nouvellesErreurs.anneeEtude = "Veuillez choisir une année";
        }
        if (!groupe.trim()) {
            nouvellesErreurs.groupe = "Le groupe est obligatoire";
        }
        if (!ville.trim()) {
            nouvellesErreurs.ville = "La ville est obligatoire";
        }

        setErreurs(nouvellesErreurs);
        return Object.keys(nouvellesErreurs).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        // 1. Valider avant tout
        if (!validerFormulaire()) {
            return;
        }

        // 2. Construire l'objet étudiant
        const nouvelEtudiant = {
            nom: nom.trim(),
            prenom: prenom.trim(),
            email: email.trim(),
            telephone: telephone.trim(),
            filiere,
            anneeEtude,
            groupe: groupe.trim(),
            ville: ville.trim(),
            image,
        };

        // 3. Ajouter ou modifier
        if (etudiantAModifier) {
            onModifierEtudiant({ ...etudiantAModifier, ...nouvelEtudiant });
        } else {
            onAjouterEtudiant(nouvelEtudiant);
        }

        // 4. Réinitialiser le formulaire
        setNom("");
        setPrenom("");
        setEmail("");
        setTelephone("");
        setFiliere("");
        setAnneeEtude("");
        setGroupe("");
        setVille("");
        setImage("");
        setErreurs({});
    }

    return (
        <div className="student-form-container">
            <h2>
                {etudiantAModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}
            </h2>

            <form onSubmit={handleSubmit} noValidate>

                <div className="form-group">
                    <label htmlFor="nom">Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Votre nom"
                        required
                    />
                    {erreurs.nom && <p className="error-msg">{erreurs.nom}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="prenom">Prénom :</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Votre prénom"
                        required
                    />
                    {erreurs.prenom && <p className="error-msg">{erreurs.prenom}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemple@email.com"
                        required
                    />
                    {erreurs.email && <p className="error-msg">{erreurs.email}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="telephone">Téléphone :</label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder="Ex : +216 99 999 999"
                        required
                    />
                    {erreurs.telephone && <p className="error-msg">{erreurs.telephone}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="filiere">Filière :</label>
                    <select
                        id="filiere"
                        name="filiere"
                        value={filiere}
                        onChange={(e) => setFiliere(e.target.value)}
                        required
                    >
                        <option value="">Choisir une filière</option>
                        <option value="GLSI">GLSI</option>
                        <option value="RSI">RSI</option>
                        <option value="DSI">DSI</option>
                    </select>
                    {erreurs.filiere && <p className="error-msg">{erreurs.filiere}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="anneeEtude">Année d'étude :</label>
                    <select
                        id="anneeEtude"
                        name="anneeEtude"
                        value={anneeEtude}
                        onChange={(e) => setAnneeEtude(e.target.value)}
                        required
                    >
                        <option value="">Choisir une année</option>
                        <option value="1ère année">1ère année</option>
                        <option value="2ème année">2ème année</option>
                        <option value="3ème année">3ème année</option>
                    </select>
                    {erreurs.anneeEtude && <p className="error-msg">{erreurs.anneeEtude}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="groupe">Groupe :</label>
                    <input
                        type="text"
                        id="groupe"
                        name="groupe"
                        value={groupe}
                        onChange={(e) => setGroupe(e.target.value)}
                        placeholder="Exemple : GLSI 2"
                        required
                    />
                    {erreurs.groupe && <p className="error-msg">{erreurs.groupe}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="ville">Ville :</label>
                    <input
                        type="text"
                        id="ville"
                        name="ville"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                        placeholder="Votre ville"
                        required
                    />
                    {erreurs.ville && <p className="error-msg">{erreurs.ville}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="image">Photo :</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={(e) => {
                            const fichier = e.target.files[0];
                            if (fichier) {
                                setImage(URL.createObjectURL(fichier));
                            }
                        }}
                    />
                </div>

                {image && (
                    <img
                        src={image}
                        alt="Photo étudiant"
                        className="student-preview"
                    />
                )}

                <button type="submit" className="submit-btn">
                    {etudiantAModifier ? "Modifier" : "Ajouter"}
                </button>
            </form>
        </div>
    );
}

export default StudentForm;
