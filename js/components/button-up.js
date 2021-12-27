export const getBtn = () => {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-up');
    btn.textContent = 'Scroll up'
    document.body.append(btn);

    window.addEventListener('scroll', () => {
        if(window.pageYOffset >= 100) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        };
    }, {passive: true});


    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}