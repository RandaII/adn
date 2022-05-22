// data представленных айтемов
const zefirGames = {
  img: `./images/portfolio/playrix.jpg`,
  alt: `Zefir Games`,
  awards:[
    {img: `./images/icons/awards/award4.svg`, alt: `Award 4`},
  ],
  tagList:[
    `Интернет-магазин`,
    `Айдентика`,
  ],
  title: `HR-сайт для Zefir Games Playrix`
};

const theater = {
  img: `./images/portfolio/theater.jpg`,
  alt: `Изображение шляпы`,
  awards:[
    {img: `./images/icons/awards/award3.svg`, alt: `Award 3`},
  ],
  tagList:[
    `Сайты`,
  ],
  title: `Театр драмы им. Шукшина`
};

const lnFamily = {
  img: `./images/portfolio/lnFamily.jpg`,
  alt: `LN Family`,
  awards:[
    {img: `./images/icons/awards/award1.svg`, alt: `Award 1`},
    {img: `./images/icons/awards/award2.svg`, alt: `Award 2`},
    {img: `./images/icons/awards/award3.svg`, alt: `Award 3`},
    {img: `./images/icons/awards/award4.svg`, alt: `Award 4`},
  ],
  tagList:[
    `Интернет-магазин`,
    `Айдентика`
  ],
  title: `Магазин дизайнерской одежды LN Family`
};

const fitKit = {
  img: `./images/portfolio/kit-fit.jpg`,
  alt: `FIT KIT`,
  awards:[
    {img: `./images/icons/awards/award3.svg`, alt: `Award 3`},
  ],
  tagList:[
    `Интернет-магазин`,
    `Айдентика`
  ],
  title: `Магазин для бренда FIT KIT`
};

const shooting = {
  img: `./images/portfolio/shooting.jpg`,
  alt: `Пистолет`,
  awards:[
  ],
  tagList:[
    `Интернет-магазин`,
    `Айдентика`
  ],
  title: `Балтийский стрелковый центр`
};

const theater1 = {
  img: `./images/portfolio/theater1.jpg`,
  alt: `Кружки`,
  awards:[
  ],
  tagList:[
    `Интернет-магазин`,
    `Айдентика`
  ],
  title: `Айдентика для театра драмы им. Шукшина`
};

// наборы категорий
const categoriesItems = {
  all:[
    lnFamily,
    theater,
    zefirGames,
    fitKit,
    shooting,
    theater1
  ],
  development:[
    theater,
    fitKit,
    shooting
  ],
  design:[
    lnFamily,
    theater
  ],
  branding:[
    theater,
    theater1,
    fitKit,
    shooting
  ],
  illustration:[
    zefirGames
  ]
}

export default class CatalogCardsUpdater {

  static insertItems(categoryName, element){

    let template = ``;

    // собирает шаблон в зависимости от категории
    categoriesItems[categoryName]?.forEach((value) =>{

      const {img, alt, awards, tagList, title} = value;

      // блоки с множеством item
      let awardsItems = '';
      let tagItems = ``;

      // также заполняем каждый в цикле
      awards.forEach(({img, alt}) =>{
        awardsItems +=
          `<li class="cards-list__awards-item">
          <img src="${img}" alt="${alt}" class="cards-list__awards-item-img"/>
          </li>`
      });

      tagList.forEach((value) =>{
        tagItems += `
          <li>
              <a href="#" class="tag-list__item">${value}</a>
          </li>
        `
      })

      // конечный шаблон элемента
      template += `
      <li>
        <div class="cards-list__item">
          <div class="cards-list__img-block">
            <a href="#">
              <img src="${img}" alt="${alt}"/>
            </a>
            <ul class="cards-list__awards">
            ${awardsItems}
          </ul>
          </div>
        
          <ul class="tag-list">
            ${tagItems}
          </ul>
          
          <a href="#" class="cards-list__title">
            ${title}
          </a>
        </div>
      </li>`;
    });

    if (template){
      const spinner = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;

      // симуляция загрузки
      element.innerHTML = spinner;

      setTimeout(() => element.innerHTML = template, 400);
    }
    }
}