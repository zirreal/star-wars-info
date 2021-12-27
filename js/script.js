import createSpinner from './components/loading.js';

let cssPromises = {};

// подгружаем ресурсы динамично
const loadResource = (src) => {
    if(src.endsWith('.js')) {
        return import(src);
    } 
    if(src.endsWith('.css')) {
        if(!cssPromises[src]) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = src;
            cssPromises[src] = new Promise(resolve => {
                link.addEventListener('load', () => resolve());
            });

            document.head.append(link);
            return cssPromises[src]; 
        }
    }
    return fetch(src).then(res => res.json());
    
}


const appContainer = document.getElementById('app');
const searchParams = new URLSearchParams(location.search);
const episodeId = searchParams.get('about-episode');

createSpinner(appContainer);

// используем Promise all для рендера страниц
const renderPage = (moduleName, apiUrl, css, ...rest)  => {
    Promise.all([moduleName,apiUrl,css, ...rest].map(src => loadResource(src)))
        .then(([pageModule, data]) => {
            appContainer.innerHTML = '';
            appContainer.append(pageModule.render(data));
        });
};



if(episodeId) {
    renderPage(
        './components/about-episode.js',
        `https://swapi.dev/api/films/${episodeId}`,
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        "./css/style.css"
    )
} else {
    renderPage(
        './components/main-page.js',
        'https://swapi.dev/api/films',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        "./css/style.css"
    )
}