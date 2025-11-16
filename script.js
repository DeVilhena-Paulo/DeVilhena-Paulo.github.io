const address = "180 Queen's Gate, South Kensington, London SW7 2AZ";
const lst = ['k', 'uu', 'cak', 'lai', 're', 'pmisan', 'ehli', 'vaedep'];

function reveal(xs) {
    xs = lst.join('').split('');
    xs[2] = '.';
    xs[5] = '.';
    xs[14] = '@';
    xs[22] = '-';
    xs[25] = '.';
    return xs.join('');
}

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

function copy(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'copied';
        setTimeout(() => {
            btn.textContent = 'copy';
        }, 1000);
    });
}
