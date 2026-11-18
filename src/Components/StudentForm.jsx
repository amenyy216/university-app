
import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant }) {

    // Déclaration des états
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [filiere, setFiliere] = useState("");
    const [annee, setAnnee] = useState("");
    const [groupe, setGroupe] = useState("");
    const [ville, setVille] = useState("");
    const [image, setImage] = useState("");

    // Fonction de soumission
    function handleSubmit(e) {
        e.preventDefault();

        const nouvelEtudiant = {
            nom: nom,
            prenom: prenom,
            email: email,
            telephone: telephone,
            filiere: filiere,
            annee: annee,
            groupe: groupe,
            ville: ville,
            image: image
        };

        onAjouterEtudiant(nouvelEtudiant);

        // Réinitialiser les champs
        setNom("");
        setPrenom("");
        setEmail("");
        setTelephone("");
        setFiliere("");
        setAnnee("");
        setGroupe("");
        setVille("");
        setImage("");
    }

    return (
        <div className="student-form-container">

            <h2>Inscription d'un étudiant</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="nom">Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Votre nom"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="prenom">Prénom :</label>
                    <input
                        type="text"
                        id="prenom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Votre prénom"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemple@email.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="telephone">Téléphone :</label>
                    <input
                        type="tel"
                        id="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder="Votre numéro"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="filiere">Filière :</label>
                    <select
                        id="filiere"
                        value={filiere}
                        onChange={(e) => setFiliere(e.target.value)}
                        required
                    >
                        <option value="">Choisir une filière</option>
                        <option value="GLSI">GLSI</option>
                        <option value="LCS">LCS</option>
                        <option value="DSI">DSI</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="annee">Année d'étude :</label>
                    <select
                        id="annee"
                        value={annee}
                        onChange={(e) => setAnnee(e.target.value)}
                        required
                    >
                        <option value="">Choisir une année</option>
                        <option value="1ère année">1ère année</option>
                        <option value="2ème année">2ème année</option>
                        <option value="3ème année">3ème année</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="groupe">Groupe :</label>
                    <input
                        type="text"
                        id="groupe"
                        value={groupe}
                        onChange={(e) => setGroupe(e.target.value)}
                        placeholder="Exemple : GLSI 2"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ville">Ville :</label>
                    <input
                        type="text"
                        id="ville"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                        placeholder="Votre ville"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Photo :</label>
                    <input
                        type="file"
                        id="image"
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
                    Ajouter l'étudiant
                </button>

            </form>
        </div>
    );
}

export default StudentForm;
