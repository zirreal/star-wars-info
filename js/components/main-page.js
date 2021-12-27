import {getInfo} from './get-additional-info.js';

const createElement = (tag, className) => {
    const $tag = document.createElement(tag);

    if(className) {
        $tag.classList.add(className);
    }

    return $tag;
};

export const render =  (data) => {
    console.log(data);

    const container = document.createElement('div');
    container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap', 'py-4');

    const films = data.results;
    getInfo(films);

    for(const film of films) {

        const wrapper = createElement('div', 'card');
        const cardTop = createElement('div', 'card-top');
        const image = createElement('img','card-img-top')
        const card = createElement('div', 'card-body');
        const title = createElement('h5', 'card-title');
        const subTitle = createElement('h6', 'card-subtitle');
        const descr = createElement('p', 'card-text');
        const btn = createElement('a', 'btn');

        card.append(title);
        card.append(subTitle);
        card.append(descr);
        card.append(btn);
        cardTop.append(image)
        wrapper.append(cardTop);
        wrapper.append(card);


        title.textContent = film.title;
        subTitle.textContent = `Episode: ${film.episode_id}`;
        descr.textContent = `${film.opening_crawl.slice(0,214)}...`;
        btn.textContent = 'Learn more about the episode';
        btn.href = `?about-episode=${film.id}`;

        image.src = film.img;
        image.alt = film.title;

        subTitle.classList.add('mb-2', 'text-muted')
        btn.classList.add('btn-outline-warning');

        container.append(wrapper);
    }


    return container;
}