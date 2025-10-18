# 🌦️ wheater_app - Application Météo (HTML/CSS/JS)

Ce projet est un widget météo simple et moderne. Il a été développé en pur HTML, CSS et JavaScript pour démontrer les compétences en développement front-end, en design responsive et en interaction avec des API externes (asynchrones).

Ce projet fait partie du portfolio de réalisations de **AXIANE Agency**.

-----

## 🎯 Fonctionnalités

  * **Recherche par ville :** Permet à l'utilisateur de taper le nom de n'importe quelle ville dans le monde.
  * **Affichage dynamique :** Met à jour la température, le nom de la ville, l'humidité et la vitesse du vent.
  * **Icônes météo :** Affiche une icône différente (soleil, nuages, pluie...) en fonction des données reçues de l'API.
  * **Gestion des erreurs :** Affiche un message clair si la ville n'est pas trouvée ou si une erreur réseau se produit.
  * **Design Responsive :** L'interface s'adapte parfaitement aux écrans mobiles et de bureau.

-----

## 🛠️ Technologies utilisées

  * **HTML5 :** Pour la structure sémantique de la page.
  * **CSS3 :** Pour le design moderne, l'effet de "carte en verre" (backdrop-filter) et le layout (Flexbox).
  * **JavaScript (ES6+) :**
      * `fetch` et `async/await` pour gérer les appels asynchrones à l'API.
      * Manipulation du DOM pour afficher dynamiquement les résultats.
      * Gestion des événements (`click`, `keyup`).
  * **API OpenWeatherMap :** Pour la récupération des données météo en temps réel.

-----

## 🚀 Lancement du projet

Pour faire fonctionner ce projet sur votre machine locale, suivez ces étapes :

1.  **Clonez ce dépôt (ou téléchargez les fichiers) :**

    ```bash
    git clone https://github.com/ArmelKI/wheater_app.git
    ```

2.  **Obtenez votre clé API gratuite :**

      * Créez un compte sur [OpenWeatherMap.org](https://openweathermap.org/).
      * Une fois connecté, allez dans votre profil et copiez votre "Default API key".

3.  **Insérez votre clé API :**

      * Ouvrez le fichier `script.js`.
      * Trouvez la ligne : `const apiKey = "VOTRE_CLÉ_API_ICI";`
      * Remplacez `"VOTRE_CLÉ_API_ICI"` par la clé que vous venez de copier.

4.  **Lancez l'application :**

      * Ouvrez simplement le fichier `index.html` dans votre navigateur web.

-----

## 🧑‍💻 Auteur

Développé par **Armel Stéphane Novak KI**, CEO de [AXIANE Agency](https://axianeagency.cloud/).