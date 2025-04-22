const sections = document.querySelectorAll('.section-h2');
const paragraphs = document.querySelectorAll('.paragraph');
const icons = document.querySelectorAll('.icon');

// esconde o paragrafo ao carregar a pagina
paragraphs.forEach(p => p.classList.add('hidden'));

// seleciona a div do h2 e icones para serem alterados ao mostrar e esconder o paragrafo
sections.forEach((section, index) => {
    section.addEventListener('click', () => {
        const paragraph = paragraphs[index];
        const icon = icons[index];

        paragraph.classList.toggle('hidden');

        if (paragraph.classList.contains('hidden')) {
            icon.src = 'assets/icon-plus.svg';
        } else {
            icon.src = 'assets/icon-minus.svg';
        }
    });
});
