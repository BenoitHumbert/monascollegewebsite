// Ajoute automatiquement [MonAS Collège] au début de l'objet du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('form[action*="formspree"]');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const subjectField = document.getElementById('subject');

      if (subjectField && subjectField.value) {
        // Vérifie si le préfixe n'est pas déjà présent
        if (!subjectField.value.startsWith('[MonAS Collège]')) {
          subjectField.value = '[MonAS Collège] ' + subjectField.value;
        }
      }
    });
  }
});
