function switchPage(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Mostra a página alvo
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Atualiza o estado ativo no menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-target') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Rola para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterMenu(category) {
    // Atualiza botões de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent === 'Todos')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Filtra os cards
    const cards = document.querySelectorAll('.menu-grid .card');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}