function toggleAbstract(btn) {
    // record original text
    if (!btn.dataset.originalText) {
        btn.dataset.originalText = btn.textContent;
    }
            
    const abstract = btn.nextElementSibling;
    abstract.classList.toggle('show');

    if (abstract.classList.contains('show')) {
        btn.textContent = 'hide';
    } else {
        btn.textContent = btn.dataset.originalText;
    }
}
