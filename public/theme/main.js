'use strict';

document.addEventListener('DOMContentLoaded', function() {

  const menu = document.querySelector('#menu');
  const highlight = document.querySelector('#highlight');

  function positionMenu() {
    if (document.body.scrollTop >= 300) {
      menu.classList.add('navbar-fixed-top');
      highlight.style.marginTop = '50px';
    } else {
      menu.classList.remove('navbar-fixed-top');
      highlight.style.marginTop = '';
    }
  }

  positionMenu();
  document.addEventListener('scroll', positionMenu);

});
