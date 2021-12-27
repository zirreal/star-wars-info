const smallSpinner = (container, text ) => {
  const spinner = document.createElement('div');
  spinner.classList.add('d-flex', 'justify-content-center', 'small-spinner')
  spinner.innerHTML = `
    <div class="spin"></div>
    <span class="spin-text">R2D2 looking for ${text}. Just a few seconds</span>
  `

  container.append(spinner);
  return {spinner}
}

export default smallSpinner;