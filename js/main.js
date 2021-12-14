let elBoxList = document.querySelector(".box__list");
let elBoxTemplate = document.querySelector(".box__template").content;
let elBoxFragment = document.createDocumentFragment();
sort(1,100);
function sort(from,to){
    elBoxList.innerHTML = "";
    for(let card of pokemons) if (card.id >= from && card.id <= to)render(card);
}
function render(item){
    let elItem = elBoxTemplate.cloneNode(true);
    elItem.querySelector(".box__title").textContent = item.name;
    elItem.querySelector(".box__count").textContent = "#" + item.num;
    elItem.querySelector(".box__img").src = item.img;
    elBoxFragment.appendChild(elItem);
    elBoxList.appendChild(elBoxFragment);
}