
// валидатор с различными проверками, также добавляет класс ошибки
export default class Validator {

  // проверка на наличие введенных данных
  static emptyValidate = (element) =>{
    if (!element.value){
      element.classList.add(`error-border`);
      element.value = `Поле обязательно для заполнения`;
      return false;
    }
    return true;
  }

  // проверка на верный mail
  static validateEmail = (element) => {

    const string = String(element.value).toLowerCase();
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regExp.test(string)){
      element.classList.add(`error-border`);
      element.value = `Email введен неверно`;
      return false
    }
    return true;
  };

  // проверка на рус/англ символы
  static validateName = (element) => {

    const string = String(element.value).toLowerCase();
    const regExp = /^[a-zа-яё\s]+$/iu;

    if (!regExp.test(string)){
      element.classList.add(`error-border`);
      element.value = `Имя содержит некорректные символы`;
      return false
    }
    return true;
  };

  //проверка на верно введенный телефон
  static validatePhone = (element) => {

    const string = String(element.value).toLowerCase();
    const regExp = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

    if (!regExp.test(string)){
      element.classList.add(`error-border`);
      element.value = `Номер введен неверно`;
      return false
    }
    return true;
  };
}