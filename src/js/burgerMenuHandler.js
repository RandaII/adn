
// добавляет листенеры на кнопки открытия/закрытия
// появление блока меню происходит посредством добавления анимированных классов
const addMenuBurgerListeners = () =>{
  const burgerMenuOpen = document.getElementById(`burgerMenuOpen`);
  const burgerMenuClose = document.getElementById(`burgerMenuClose`);

  const menuBurger = document.getElementById(`menuBurger`);

  const burgerOpenHandler = () =>{
    menuBurger.classList.add(`right-translate`);
  }

  const burgerCloseHandler = () =>{
    // по истечению анимации удаляем классы
    menuBurger.classList.remove(`right-translate`);
    menuBurger.classList.add(`right-translate-reverse`);

    setTimeout(() =>menuBurger.classList.remove(`right-translate-reverse`),500);
  }

  burgerMenuOpen.addEventListener(`pointerdown`, burgerOpenHandler);
  burgerMenuClose.addEventListener(`pointerdown`, burgerCloseHandler);
};

export default addMenuBurgerListeners;

