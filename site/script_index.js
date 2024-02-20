
document.addEventListener('DOMContentLoaded', function() {
  let slider = document.getElementById("kilometrageSlider");
  let valeurKilometrage = document.getElementById("kilometrageValeur");
  let voitures = document.querySelectorAll(".voiture");

  slider.oninput = function() {
      valeurKilometrage.textContent = this.value;
      filterVoitures(this.value);
  }

  function filterVoitures(kilometrageMax) {
      voitures.forEach(voiture => {
          const kilometrageVoiture = voiture.querySelector(".detail p:nth-of-type(2)").textContent.replace(' ', '');
          if (parseInt(kilometrageVoiture) > kilometrageMax) {
              voiture.style.display = "none";
          } else {
              voiture.style.display = "flex";
          }
      });
  }
});



// Sélection des éléments du DOM
let monials = document.querySelectorAll('.monial');
let authors = document.querySelectorAll('.author');
let ratings = document.querySelectorAll('.rating');
let currentIndex = 0;

// Fonction pour faire défiler les commentaires
function cycleMonials() {
  // Masquer tous les commentaires
  monials.forEach(function(monial, index) {
    monial.classList.add('hidden');
    authors[index].classList.add('hidden');
    ratings[index].classList.add('hidden');
  });

  // Afficher le commentaire suivant
  currentIndex = (currentIndex + 1) % monials.length;
  monials[currentIndex].classList.remove('hidden');
  authors[currentIndex].classList.remove('hidden');
  ratings[currentIndex].classList.remove('hidden');
}

// Démarrer l'animation au chargement de la page
window.addEventListener('load', function() {
  // Démarrer l'animation avec un intervalle de 2 secondes
  setInterval(cycleMonials, 2000);
});