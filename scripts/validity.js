'use strict';

var textareaForm = document.querySelector('#area-info');

textareaForm.addEventListener('click', function () {
  validity();
});

textareaForm.addEventListener('focus', function () {
  validity();
});

textareaForm.addEventListener('blur', function () {
  var tetxareaText = 'Доп. информация для мастера';
  textareaForm.textContent = tetxareaText;
});

var validity = function () {
  var tetxareaText = 'Доп. информация для мастера';
  var whiteSpace = '';
  if (tetxareaText) {
    textareaForm.textContent = whiteSpace;
  }
};

var ENTER_CODE = 13;
var labelCheck = document.querySelectorAll('.extra-services__caption');
var inputCheck = document.querySelectorAll('.extra-services__field');
var labelCheckBeard = document.querySelectorAll('.type-beard__caption');
var inputCheckBeard = document.querySelectorAll('.type-beard__field');



var pressEnter = function (forLabel, forInput) {
  forLabel.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      toggleAtr(forLabel, forInput);
    }
  });
}

var toggleAtr = function (forLabel, forInput) {
  if (forInput.hasAttribute('checked')) {
    forInput.removeAttribute('checked');
  } else {
    forInput.setAttribute('checked', 'checked');
  }
};

for (var i = 0; i < inputCheck.length; i++) {
  pressEnter(labelCheck[i], inputCheck[i]);
};

for (var i = 0; i < inputCheckBeard.length; i++) {
  pressEnter(labelCheckBeard[i], inputCheckBeard[i]);
};
