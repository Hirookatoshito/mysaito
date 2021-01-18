'use strict';

{
  window.addEventListener('load', function () {
    viewSlide('.slide img');
  });
  function viewSlide(className, slideNo = -1)
  {
    let imgArray = document.querySelectorAll(className);
    if (slideNo >= 0) {
      //初回以外は現在のスライドを消す
      imgArray[slideNo].style.opacity = 0;
    }
    slideNo++;
    if (slideNo >= imgArray.length) {
      slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
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
  
  function newsMove() {
    let newsTop = document.querySelector('.news-top');
    newsTop.classList.add('move')
  }

  window.addEventListener('load', () => {
    showTopAnimation();
    newsMove();
  })

  function newsPostMove() {
    let newsPosts = document.querySelectorAll('.news-post');
    let scrollY = window.pageYOffset;
    let windowH = window.innerHeight;

    for(let i = 0; i < newsPosts.length; i++) {
      let elemClientRect = newsPosts[i].getBoundingClientRect();
      let elemY = scrollY + elemClientRect.top;
      if(scrollY + windowH > elemY) {
        newsPosts[i].classList.add('move')
      }
    }
  }
  window.addEventListener('scroll', newsPostMove);
      





  
}