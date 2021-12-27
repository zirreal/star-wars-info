import {imgs, createList} from './get-additional-info.js';
import { getBtn } from './button-up.js';


const searchParams = new URLSearchParams(location.search);
const episodeId = searchParams.get('about-episode');
export const render = (data) => {
    data.images = imgs;
    const planets = data.planets;
    const species = data.species;
    const characters = data.characters;

    const container = document.createElement('div'); 
    container.classList.add(`container`, 'py-4', 'container-episode');
    const wrapper = document.createElement('div');
    wrapper.classList.add('episode-wrapper');
    wrapper.innerHTML = `
        <div class="episode-left">
            <div class="episode-top">
                <h1 class="episode-title"> ${data.title}</h1>
                <a href="/" class="btn btn-warning btn-episodes">Back to Episodes</a>
            </div>
            <p class="sub-title">Episode ${data.episode_id}</p>
            <p class="text-muted">Director: ${data.director}</p>
            <p class="lead mb-4 episode__text">${data.opening_crawl}</p>
            <span class="decor"></span>
        </div>
        <img class="episode__img" src="${data.images[parseInt(episodeId) - 1]}" alt=${data.title}> 
    `;


    createList(planets, container, 'Planets');
    createList(species, container,'Species');
    createList(characters, container,'Characters');

    container.append(wrapper);
    getBtn();

    return container;
}
