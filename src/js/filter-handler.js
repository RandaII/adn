import CatalogCardsUpdater from "./catalog-cards-updater.js";

const addFilterHandler = () =>{
  let activeTab = document.querySelector(`.tabs__item.active`);
  const cards = document.getElementById(`cards-list`);

  // handler для смены active класса и добавления новых элементов
  const filterSelector = (evt) =>{
    evt.preventDefault();

    if (evt.target.dataset.category){
      activeTab.classList.remove(`active`);
      activeTab = evt.target;
      activeTab.classList.add(`active`);

      CatalogCardsUpdater.insertItems(evt.target.dataset.category, cards);
    }
  }

  document.getElementById(`tabs`).addEventListener(`click`, filterSelector);
};

export default addFilterHandler;

