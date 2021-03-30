
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
    const exchangeRegistration = document.querySelector('.exchange-registration__bg');
    const exchangeBg = document.querySelector('.registration__bg img');

    if(exchangeRegistration){
        exchangeRegistration.style.background = `url('${exchangeBg.getAttribute('src')}') 0 0 no-repeat`;
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
                img: './img/currencies/06.png',
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
                img: './img/currencies/06.png',
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