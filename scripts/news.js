'use strict';

var allNewsButton = document.querySelector('.news__to-all');
var newsList = document.querySelectorAll('.news__item');

allNewsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  showAllNews();
});


var showAllNews = function () {
  for (var i = 0; i < newsList.length; i++) {
    newsList[i].classList.remove('news__item--hide');
  }
};
