export default class Card {
  constructor(name) {
    this.name = name;
    this.id = null;
    this.draggable = true;

    // this.description = false;
    // this.comment = false;
    // this.like = false;
    // this.paperclip = false;
  }

  addCardCloseBlock() {
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('card-close-block');
    closeBtn.innerHTML = '<i class="fas fa-lg fa-times"></i>';

    return closeBtn;
  }

  // для дальнейшего проекта //

  // elementCreate(item, thisCard) {
  //     const iconContainer = item.querySelector('.icon-container');
  //
  //     if (thisCard.description) {
  //
  //         iconContainer.insertAdjacentHTML('beforeend', `
  //                 <div class="block description-block">
  //                     <i class="fas fa-lg fa-align-left"></i>
  //                 </div>`);
  //     }
  //
  //      if (thisCard.comment) {
  //
  //          iconContainer.insertAdjacentHTML('beforeend',`
  //                 <div class="block comment-block">
  //                     <i class="far fa-lg fa-comment"></i>
  //                     <span class="fa-comment_count">1</span>
  //                 </div>`);
  //      }
  //
  //      if (thisCard.like) {
  //          iconContainer.insertAdjacentHTML('beforeend', `
  //                 <div class="block thumbs-up-block">
  //                     <i class="far fa-lg fa-thumbs-up"></i>
  //                     <span class="fa-thumbs-up_count">1</span>
  //                 </div>`);
  //      }
  //
  //      if (thisCard.paperclip) {
  //
  //          iconContainer.insertAdjacentHTML('beforeend', `
  //                 <div class="block paperclip-block">
  //                     <i class="fas fa-lg fa-paperclip"></i>
  //                     <span class="fa-paperclip_count">2</span>
  //                 </div>`);
  //      }
  //
  //      return item;
  // }

  /// /

  createNewCard(card, cardsList, cardsArr) {
    const el = document.createElement('li');
    el.classList.add('list-item');
    el.draggable = true;
    // let listClass = cardsList.className;
    //
    // switch (listClass) {
    //     case 'list done-list':
    //         el.classList.add('done-item');
    //         break;
    //     case 'list progress-list':
    //         el.classList.add('progress-item');
    //         break;
    //     case 'list todo-list':
    //         el.classList.add('todo-item');
    //         break;
    // }

    el.innerHTML = `<p>${card.name}</p>`;

    // el.innerHTML = `<p>${card.name}</p>
    //         <div class="icon-container"></div>`;

    // cardsList.appendChild(this.elementCreate(el, card));

    cardsList.appendChild(el);

    const close = this.addCardCloseBlock();

    el.addEventListener('mouseover', () => {
      el.insertAdjacentElement('afterbegin', close);

      close.addEventListener('click', () => {
        cardsArr.splice(card.id, 1);
        cardsList.removeChild(el);
      });
    });

    el.addEventListener('mouseleave', () => {
      el.removeChild(close);
    });
  }
}
