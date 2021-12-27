const createSpinner = (container) => {
    const spinner = document.createElement('div');
    spinner.classList.add('d-flex', 'justify-content-center', 'spinner')
    spinner.innerHTML = `
        <div class="spinner-border text-warning mb-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="spinner__text">taking evasive maneuvers to avoid imperial cruiser </p>
        <img class="spinner-img" src="../../img/falcon.png" alt="ship">
    `;

    container.append(spinner);
    return {spinner}
}

export default createSpinner;