import smallSpinner from "./spinner-small.js";

export const imgs = [
    '../../img/A New Hope.jpeg',
    '../../img/Empire Strikes Back (1980) - Default Title.jpeg',
    '../../img/Return of the Jedi (1983).jpeg',
    '../../img/The Phantom Menace poster by Rich Davies.jpeg',
    '../../img/Star Wars Episode II 2 Attack of the Clones.jpeg',
    '../../img/Star Wars Episode 3 III Revenge of The Sith Movie Poster by Jemmy Grey.jpeg',  
]

export const getInfo = (items) => {
    items.forEach((item, i) => {
        item.id = i + 1;
        item.img = imgs[i];
    }) 
}


const fetchJson = async (url) => {
    return await fetch(url).then(res => res.json());
}


export const getEpisodeInfo = async (items) => {
    return await Promise.all(
       items.map( async (item) => await fetchJson(item))
   )
   .then((result)  => {
       let data = result
       return data;
   });

};


export async function createList (items, element, listTitle) {

    smallSpinner(element, listTitle);

    let result =  await getEpisodeInfo(items);
    
    document.querySelector('.small-spinner').remove();

    const title = document.createElement('h2');
    title.classList.add('list-title');
    title.textContent = listTitle;


    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'episode-list');

    for(let item of result) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'episode-item');
        li.textContent = item.name;

        ul.append(li);
    }
    element.append(title);
    element.append(ul);
};




    




