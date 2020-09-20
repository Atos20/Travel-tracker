
const lineOne = document.querySelector('.line-1')
const lineTwo = document.querySelector('.line-2')
const lineThree = document.querySelector('.line-3')

const animation = {
 
  animateBurgerMenu() {
    lineOne.classList.toggle('rotate1');
    lineTwo.classList.toggle('hide');
    lineThree.classList.toggle('rotate2');
  }

}


export default animation