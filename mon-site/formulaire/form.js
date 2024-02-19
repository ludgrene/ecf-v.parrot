
document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche la soumission normale du formulaire

       alert("Inscription réussie !");

    // récupérer les valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log("Nom: ", nom, "Email: ", email, "Mot de passe: ", password);

    
});

