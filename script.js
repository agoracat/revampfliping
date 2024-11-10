// script.js

// Fonction pour le bouton de téléchargement
document.getElementById('download-btn').addEventListener('click', () => {
    const downloadMessage = document.getElementById('download-message');
    
    // Lien de téléchargement
    const modLink = 'https://www.mediafire.com/file/qs75dgi6wvhl0qk/Fliping_Revamp_1.8.9.jar/file';

    // Redirection vers le lien
    window.location.href = modLink;

    // Affichage d'un message de confirmation
    downloadMessage.textContent = 'Le téléchargement a commencé. Merci d\'avoir téléchargé notre mod !';
    downloadMessage.style.color = '#3da35a';
});
