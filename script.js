const data = {
    'office': ['HX', '7 2UG d', 'rof', 'dliuG ,', 'supma', 'C ytisr', 'evinU ,ll', 'iH gatS', ' ,', ')BB kcolB( gni', 'dliuB gni', 'ruT nalA ,30', 'BB12'],
    'email': ['k', 'uu', 'cak', 'ye', 'rr', 'ussan', 'ehli', 'vedep'],
};

function repair(key) {
    var result = data[key].join('');
    if (key === 'office') {
	return result;
    } else {
        result = result.split('');
        result[22] = '.'; result[12] = '@';
        result[5] = '.'; result[2] = '.';
        return result.join('');
    }
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

function copy(btn, key) {
    var text = repair(key).split('').reverse().join('');

    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'copied!';
        setTimeout(() => {
            btn.textContent = 'copy';
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('office').textContent = repair('office').split('').reverse().join('');
    document.getElementById('email').textContent = repair('email');

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            copy(this, this.dataset.copyType);
        });
    });

});
