let elBoxList = document.querySelector(".box__list");
let elBoxTemplate = document.querySelector(".box__template").content;
let elBoxFragment = document.createDocumentFragment();
sort(1,100);
function render(item){
    let elItem = elBoxTemplate.cloneNode(true);
    elItem.querySelector(".box__title").textContent = item.name;
    elItem.querySelector(".box__count").textContent = "#" + item.num;
    elItem.querySelector(".box__img").src = item.img;
    elBoxFragment.appendChild(elItem);
    elBoxList.appendChild(elBoxFragment);
}
function sort(from,to){
    elBoxList.innerHTML = "";
    for(let card of pokemons) if (card.id >= from && card.id <= to)render(card);
}
document.querySelector(".btnall").addEventListener("click", () => {sort(1,100)});
document.querySelector(".btn1").addEventListener("click", () => {sort(1,20)});
document.querySelector(".btn2").addEventListener("click", () => {sort(20,40)});
document.querySelector(".btn3").addEventListener("click", () => {sort(40,60)});
document.querySelector(".btn4").addEventListener("click", () => {sort(60,80)});
document.querySelector(".btn5").addEventListener("click", () =>  {sort(80,100)});