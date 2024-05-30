document.getElementById('AboutLink').addEventListener('click', function() {
    showSection('AboutMe');
});
document.getElementById('ProjectsssLink').addEventListener('click', function() {
    showSection('Projectsss');
});
document.getElementById('ContactsLink').addEventListener('click', function() {
    showSection('Contacts');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section'); // Исправлено: выбираем элементы с классом .section
    sections.forEach(section => {
        section.style.display = 'none';
    });
   
}
