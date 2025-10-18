// --- Étape 1 : Récupération éléments du HTML ---
// On "capture" les éléments dont on a besoin pour les manipuler
const villeInput = document.getElementById("villeInput");
const rechercheBtn = document.getElementById("rechercheBtn");
const resultatMeteo = document.getElementById("resultatMeteo");
const erreur = document.getElementById("erreur");

const iconeMeteo = document.getElementById("iconeMeteo");
const temperature = document.getElementById("temperature");
const nomVille = document.getElementById("nomVille");
const humidite = document.getElementById("humidite");
const vent = document.getElementById("vent");


// --- Étape 2 : Configuration de l'API ---
const apiKey = "fc4fb70746994152a6e39e1d0361ddeb"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// --- Étape 3 : La fonction qui appelle l'API ---
// C'est une fonction "async" car elle attend une réponse d'un serveur (l'API)
async function checkWeather(ville) {
    try {
        // On construit l'URL complète avec la ville et la clé API
        const response = await fetch(apiUrl + ville + `&appid=${apiKey}&lang=fr`);

        // Si la ville n'est pas trouvée (erreur 404) ou autre erreur
        if (!response.ok) {
            if (response.status === 404) {
                // Montre le message d'erreur, cache les résultats
                erreur.style.display = "block";
                resultatMeteo.style.display = "none";
            } else {
                alert("Une erreur s'est produite avec l'API.");
            }
            return; // Arrête la fonction ici
        }

        // Si tout va bien, on convertit la réponse en JSON
        const data = await response.json();

        // --- Étape 4 : Mettre à jour l'affichage (le DOM) ---

        // Met à jour le nom de la ville
        nomVille.innerHTML = data.name;

        // Met à jour la température (on arrondit au cas où)
        temperature.innerHTML = Math.round(data.main.temp) + "°C";

        // Met à jour l'humidité et le vent
        humidite.innerHTML = data.main.humidity + "%";
        vent.innerHTML = Math.round(data.wind.speed * 3.6) + " km/h"; // Conversion m/s en km/h

        // Met à jour l'icône météo
        // OpenWeatherMap donne un code (ex: "01d", "10n"...). On l'insère dans l'URL de l'image.
        const iconeCode = data.weather[0].icon;
        iconeMeteo.src = `https://openweathermap.org/img/wn/${iconeCode}@4x.png`;

        // Affiche le bloc de résultats et cache le message d'erreur
        resultatMeteo.style.display = "block";
        erreur.style.display = "none";

    } catch (error) {
        // Gère les erreurs réseau (ex: pas d'internet)
        console.error("Erreur lors de la récupération des données : ", error);
        erreur.innerHTML = "Impossible de se connecter au service météo.";
        erreur.style.display = "block";
        resultatMeteo.style.display = "none";
    }
}

// --- Étape 5 : Lier l'action au bouton ---
rechercheBtn.addEventListener("click", () => {
    const ville = villeInput.value.trim(); // Récupère le texte de l'input
    if (ville) { // Vérifie si le champ n'est pas vide
        checkWeather(ville);
    } else {
        alert("Veuillez entrer un nom de ville.");
    }
});

// Bonus : Permet de lancer la recherche en appuyant sur "Entrée"
villeInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        rechercheBtn.click(); // Simule un clic sur le bouton
    }
});