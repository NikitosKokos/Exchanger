const selectSingle = document.querySelectorAll('.__select');
const selectSingle_title = document.querySelectorAll('.__select__title');


if(selectSingle){
selectSingle.forEach((element,index) => {
        // Toggle menu
        selectSingle_title[index].addEventListener('click', () => {
        if ('active' === element.getAttribute('data-state')) {
            element.setAttribute('data-state', '');
        } else {
            element.setAttribute('data-state', 'active');
        }
        }); 
        let selectSingle_labels = element.querySelectorAll('.__select__label');
        // Close when click to option
        for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title[index].textContent = evt.target.textContent;
            element.setAttribute('data-state', '');
            let selectImage = selectSingle_labels[i].querySelector('img').getAttribute('src');
            let isImg = selectSingle_title[index].querySelector('img');
                if(isImg){
                    isImg.remove();
                }
            if(selectImage){
                let imgTitle = document.createElement('img');
                imgTitle.setAttribute('src',selectImage);
                selectSingle_title[index].prepend(imgTitle);
            }
        });
        }
    });
}
