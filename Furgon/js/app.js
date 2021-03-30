function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

document.addEventListener('DOMContentLoaded', () => {
    // change password input state
    const passwordInput = document.querySelector('input[name="password"]');
    const togglePass = document.querySelector('.form-registration__eye');
    if(passwordInput){
        togglePass.addEventListener('click', () => {
            if(passwordInput.getAttribute('type') === 'password'){
                passwordInput.setAttribute('type', 'text');
            }else{
                passwordInput.setAttribute('type', 'password');
            }
            togglePass.classList.toggle('active');
        });    
    }
    // popup
    const popup = document.querySelector('.popup-reviews');
    const popupOpen = document.querySelector('.grid__btn_review');
    const popupClose = document.querySelector('.popup__close');
    if(popup && popupOpen && popupClose){
        const openPopup = () => {
            popup.classList.add('active');
            document.body.classList.add('hidden');
        }
        
        const removePopup = () => {
            popup.classList.remove('active');
            document.body.classList.remove('hidden');
        }

        popupOpen.addEventListener('click', openPopup);
        popupClose.addEventListener('click', removePopup);

        popup.addEventListener('click', (e) => {
            if(!e.target.closest('.popup__body')){
                removePopup();
            }
        });  
    }

    // help
    const help = document.querySelector('.help');
    setTimeout(() => {
        help.classList.add('active');
    }, 3000);


    // select
    const currencies =  [
        [
            {
              value: 'Alfabank',
              label: 'Alfabank RUB',
              selected: true,
              disabled: false,
              customProperties: {
                img: './img/currencies/03.png',
              },
            },
            {
              value: 'BTC',
              label: 'Bitcoin',
              selected: false,
              disabled: false,
              customProperties: {
                img: './img/currencies/05.png',
              },
            },
            {
              value: 'Ethereum',
              label: 'Ethereum',
              selected: false,
              disabled: false,
              customProperties: {
                img: './img/currencies/02.png',
              },
            },
            {
              value: 'Qiwi',
              label: 'Qiwi',
              selected: false,
              disabled: false,
              customProperties: {
                img: './img/currencies/03.png',
              },
            },
            {
              value: 'Sber',
              label: 'СберБанк',
              selected: false,
              disabled: false,
              customProperties: {
                img: './img/currencies/01.png',
              },
            },
          ],
        [
            {
              value: 'BTC',
              label: 'Bitcoin',
              selected: true,
              disabled: false,
              customProperties: {
                img: './img/currencies/05.png',
              },
            }, 
            {
              value: 'Alfabank',
              label: 'Alfabank RUB',
              selected: false,
              disabled: false,
              customProperties: {
                img: './img/currencies/03.png',
              },
            },
            {
              value: 'Ethereum',
              label: 'Ethereum',
              selected: false,
              disabled: false,
              customProperties: {
                img: './img/currencies/02.png',
              },
            },
            {
              value: 'Qiwi',
              label: 'Qiwi',
              selected: false,
              disabled: false,
              customProperties: {
                img: './img/currencies/03.png',
              },
            },
            {
              value: 'Sber',
              label: 'СберБанк',
              selected: false,
              disabled: false,
              customProperties: {
                img: './img/currencies/01.png',
              },
            },
          ],
    ]
    const select = document.querySelectorAll('.js-choice');
    select.forEach((element, i) => {
       new Choices(element, {
            searchPlaceholderValue: 'Поиск...',
            noResultsText: 'Ничего не найдено',
            itemSelectText: '',
            position: 'bottom',
            shouldSort: false,
            choices: currencies[i],
            callbackOnCreateTemplates: function(template) {
            return {
                item: (classNames, data) => {
                return template(`
                    <div class="${classNames.item} ${
                    data.highlighted
                    ? classNames.highlightedState
                    : classNames.itemSelectable
                } ${
                    data.placeholder ? classNames.placeholder : ''
                }" data-item data-id="${data.id}" data-value="${data.value}" ${
                    data.active ? 'aria-selected="true"' : ''
                } ${data.disabled ? 'aria-disabled="true"' : ''}>
                    <img src="${data.customProperties.img}" alt="currency" /> ${data.label}
                    </div>
                `);
                },
                choice: (classNames, data) => {
                return template(`
                    <div class="${classNames.item} ${classNames.itemChoice} ${
                    data.disabled ? classNames.itemDisabled : classNames.itemSelectable
                }" data-select-text="${this.config.itemSelectText}" data-choice ${
                    data.disabled
                    ? 'data-choice-disabled aria-disabled="true"'
                    : 'data-choice-selectable'
                } data-id="${data.id}" data-value="${data.value}" ${
                    data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
                }>
                <img src="${data.customProperties.img}" alt="currency" /> ${data.label}
                    </div>
                `);
                },
            };
            },
        });
        // choices__input
        const prent = element.closest('.choices');
        const choicesList = prent.querySelector('.choices__inner');
        const choicesInput = prent.querySelector('.choices__input--cloned');
        choicesList.appendChild(choicesInput);

    });
    

      

}); // end
// @ @include('files/forms.js', {})
// поддержка webp
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// da
("use strict");

(function () {
  let originalPositions = [];
  let daElements = document.querySelectorAll("[data-da]");
  let daElementsArray = [];
  let daMatchMedia = [];
  //Заполняем массивы
  if (daElements.length > 0) {
    let number = 0;
    for (let index = 0; index < daElements.length; index++) {
      const daElement = daElements[index];
      const daMove = daElement.getAttribute("data-da");
      if (daMove != "") {
        const daArray = daMove.split(",");
        const daPlace = daArray[1] ? daArray[1].trim() : "last";
        const daBreakpoint = daArray[2] ? daArray[2].trim() : "767";
        const daType = daArray[3] === "min" ? daArray[3].trim() : "max";
        const daDestination = document.querySelector("." + daArray[0].trim());
        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute("data-da-index", number);
          //Заполняем массив первоначальных позиций
          originalPositions[number] = {
            parent: daElement.parentNode,
            index: indexInParent(daElement),
          };
          //Заполняем массив элементов
          daElementsArray[number] = {
            element: daElement,
            destination: document.querySelector("." + daArray[0].trim()),
            place: daPlace,
            breakpoint: daBreakpoint,
            type: daType,
          };
          number++;
        }
      }
    }
    dynamicAdaptSort(daElementsArray);

    //Создаем события в точке брейкпоинта
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daBreakpoint = el.breakpoint;
      const daType = el.type;

      daMatchMedia.push(
        window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)")
      );
      daMatchMedia[index].addListener(dynamicAdapt);
    }
  }
  //Основная функция
  function dynamicAdapt(e) {
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daElement = el.element;
      const daDestination = el.destination;
      const daPlace = el.place;
      const daBreakpoint = el.breakpoint;
      const daClassname = "_dynamic_adapt_" + daBreakpoint;

      if (daMatchMedia[index].matches) {
        //Перебрасываем элементы
        if (!daElement.classList.contains(daClassname)) {
          let actualIndex = indexOfElements(daDestination)[daPlace];
          if (daPlace === "first") {
            actualIndex = indexOfElements(daDestination)[0];
          } else if (daPlace === "last") {
            actualIndex = indexOfElements(daDestination)[
              indexOfElements(daDestination).length
            ];
          }
          daDestination.insertBefore(
            daElement,
            daDestination.children[actualIndex]
          );
          daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(daElement);
          daElement.classList.remove(daClassname);
        }
      }
    }
    customAdapt();
  }

  //Вызов основной функции
  dynamicAdapt();

  //Функция возврата на место
  function dynamicAdaptBack(el) {
    const daIndex = el.getAttribute("data-da-index");
    const originalPlace = originalPositions[daIndex];
    const parentPlace = originalPlace["parent"];
    const indexPlace = originalPlace["index"];
    const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  }
  //Функция получения индекса внутри родителя
  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  }
  //Функция получения массива индексов элементов внутри родителя
  function indexOfElements(parent, back) {
    const children = parent.children;
    const childrenArray = [];
    for (let i = 0; i < children.length; i++) {
      const childrenElement = children[i];
      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute("data-da") == null) {
          childrenArray.push(i);
        }
      }
    }
    return childrenArray;
  }
  //Сортировка объекта
  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) {
        return -1;
      } else {
        return 1;
      }
    });
    arr.sort(function (a, b) {
      if (a.place > b.place) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  //Дополнительные сценарии адаптации
  function customAdapt() {
    //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
})();
// ibg
function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

;
// @ @include('files/burger.js', {});
// @ @include("files/spoller.js",{});
// @ @include("files/select.js",{});
// @ @include("files/tabs.js",{});
// @ @include("files/sliders.js",{});
    