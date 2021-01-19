'use strict';

{
  window.addEventListener('load', function () {
    viewSlide('.slide img');
  });
  function viewSlide(className, slideNo = -1)
  {
    let imgArray = document.querySelectorAll(className);
    if (slideNo >= 0) {
      imgArray[slideNo].style.opacity = 0;
    }
    slideNo++;
    if (slideNo >= imgArray.length) {
      slideNo = 0;
    }
    imgArray[slideNo].style.opacity = 1;
    setTimeout(function(){viewSlide(className, slideNo);}, 6000);
  }

  function showTopAnimation() {
    let element = document.getElementsByClassName('js-fadein');
    for(let i=0; i<element.length; i++) {
      element[i].classList.add('is-show');
    }
  }

  window.addEventListener('load', () => {
    showTopAnimation();
    topTextMove();
  })

  let menu = document.querySelector('.header-nav');
  let closeText = document.querySelector('.close')
  let menubar = document.querySelector('.menu-trigger');
  let open = document.querySelector('.open');
  let headerText = document.querySelector('.header-nav-text');

  menu.addEventListener('click', () => {
    menubar.classList.toggle('active');
    open.classList.toggle('show');
    headerText.classList.toggle('hide')
  });
  closeText.addEventListener('click', () => {
    menubar.classList.remove('active');
    open.classList.remove('show');
    headerText.classList.remove('hide');
  })


  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;


  function topTextMove() {
    let topText = document.querySelectorAll('.top-text');
    for (let i = 0; i < topText.length; i++) {
      let elemClientRect = topText[i].getBoundingClientRect();
      let elemY = scrollY + elemClientRect.top;
      if (scrollY + windowH > elemY) {
        topText[i].classList.add('move')
      }
    }
  }
  window.addEventListener('scroll', topTextMove);

  function newsPostMove() {
    let newsPosts = document.querySelectorAll('.news-post');
    for(let i = 0; i < newsPosts.length; i++) {
      let elemClientRect = newsPosts[i].getBoundingClientRect();
      let elemY = scrollY + elemClientRect.top;
      if(scrollY + windowH > elemY) {
        newsPosts[i].classList.add('move')
      }
    }
  }
  window.addEventListener('scroll', newsPostMove);
  
  function conceptTopMove() {
    let conceptH2 = document.querySelector('.concept-h2');
    let elemClientRect = conceptH2.getBoundingClientRect();
    let elemY = scrollY + elemClientRect.top;
    if(scrollY + windowH > elemY) {
      conceptH2.classList.add('move')
    }
  }
  window.addEventListener('scroll', conceptTopMove);

  function underMove() {
    let underContent = document.querySelectorAll('.undermove');
    for (let i = 0; i < underContent.length; i++) {
      let elemClientRect = underContent[i].getBoundingClientRect();
      let elemY = scrollY + elemClientRect.top;
      if (scrollY + windowH > elemY) {
        underContent[i].classList.add('move')
      }
    }
  }
  window.addEventListener('scroll', underMove);  

  function leftMove() {
    let leftContent = document.querySelectorAll('.leftmove');
    for (let i = 0; i < leftContent.length; i++) {
      let leftClientRect = leftContent[i].getBoundingClientRect();
      let leftY = scrollY + leftClientRect.top;
      if (scrollY + windowH > leftY) {
        leftContent[i].classList.add('move')
      }
    }
  }
  window.addEventListener('scroll', leftMove);  

  function rightMove() {
    let rightContent = document.querySelectorAll('.rightmove');
    for (let i = 0; i < rightContent.length; i++) {
      let rightClientRect = rightContent[i].getBoundingClientRect();
      let rightY = scrollY + rightClientRect.top;
      if (scrollY + windowH > rightY) {
        rightContent[i].classList.add('move')
      }
    }
  }
  window.addEventListener('scroll', rightMove);  
}