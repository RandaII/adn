import Validator from "./validator.js";

// поля для валидации и в том числе необходимые методы для проверки
const VALIDATE_FIELDS = [
  {
    name: `name`,
    methods: [
      `emptyValidate`,
      `validateName`
    ]
  },
  {
    name: `phone`,
    methods: [
      `emptyValidate`,
      `validatePhone`,
    ]
  },
  {
    name: `mail`,
    methods: [
      `emptyValidate`,
      `validateEmail`,
    ]
  },
  {
    name: `task`,
    methods: [
      `emptyValidate`
    ]
  }
]

// handler валидатор, возвращает bool результат, evt.target - сама форма
const validateHandler = (evt) =>{
  evt.preventDefault();

  let bool = true;

  // проходится по полям и применяет перечисленные методы класса Validator, в случае ошибки валидации прерывает цикл по методам
  VALIDATE_FIELDS.forEach(({name, methods}) =>{

    for (let i = 0; i < methods.length; i++) {

      const method = methods[i]
      const result = Validator[method](evt.target[name]);

      if (!result){
        bool = false;
        break;
      }
    }
  })

  // в случае наличия ошибок, возвращает скролл к началу формы
  !bool && evt.target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  return bool;
}

// перед отправкой производит валидацию, собирает данные формы, массив checkbox и отправляет ассинхронный запрос
const submitHandler = (evt) =>{
  evt.preventDefault();

  if (validateHandler(evt)){

    const formData = new FormData(evt.target);
    formData.delete(`about-us`);

    const aboutUsCollections = evt.target.aboutUsSet.elements;
    const aboutUsArray = [];

    for (let i = 0; i < aboutUsCollections.length; i++) {
      aboutUsCollections[i].checked
        ? aboutUsArray.push(aboutUsCollections[i].value)
        : ``;
    }

    // если есть элементы, то добавляем
    aboutUsArray.length && formData.append(`about-us`, aboutUsArray);

    // url для просмотра отправленных запросов
    // https://webhook.site/#!/d4c21b71-f2e5-428a-9819-b4e9af50443a/9834d03e-83bd-4933-9459-1398ea558474/1

    fetch(`https://webhook.site/d4c21b71-f2e5-428a-9819-b4e9af50443a`,{
      method: 'POST',
      body: formData
    });

    // сброс формы до initial
    evt.target.reset();
  }
  return;
}

// сбрасывает класс ошибки
const errorDisabler = (evt) =>{

  if (evt.type === `keyup` && !evt.key === `Tab`){
    return
  }

  if (evt.target.classList.contains(`error-border`)){
    evt.target.classList.remove(`error-border`);
    evt.target.value = ``;
  }
  evt.target.focus();
}

const addValidateHandler = () =>{
  document.forms.projectForm.addEventListener(`submit`, submitHandler)
  document.forms.projectForm.addEventListener(`pointerdown`, errorDisabler);
  document.forms.projectForm.addEventListener(`keyup`, errorDisabler);
};

export default addValidateHandler;