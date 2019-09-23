var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');

var WIZARD_FIRST_NAMES = ['Иван',
                           'Хуан Себастьян',
                           'Мария',
                           'Кристоф',
                           'Виктор',
                           'Юлия',
                           'Люпита',
                           'Вашингтон']
var WIZARD_SECOND_NAMES = ['да Марья',
                           'Верон',
                           'Мирабелла',
                           'Вальц',
                           'Онопко',
                           'Топольницкая',
                           'Нионго',
                           'Ирвинг']

var COAT_COLOR = ['rgb(101, 137, 164)',
                  'rgb(241, 43, 107)',
                  'rgb(146, 100, 161)',
                  'rgb(56, 159, 117)',
                  'rgb(215, 210, 55)',
                  'rgb(0, 0, 0)' ]
var EYES_COLOR = [ 'black',
                   'red',
                   'blue',
                   'yellow',
                   'green']

/* Функция getWizardName генерирует случайное имя,  фамилию из массивов  WIZARD_FIRST_NAMES, WIZARD_SECOND_NAMES соответственно*/
var getWizardName = function() {

     var firstNameIndex = getRandomNumber(0, WIZARD_FIRST_NAMES.length - 1);
     var secondNameIndex = getRandomNumber(0, WIZARD_SECOND_NAMES.length - 1);

     var wizardName = WIZARD_FIRST_NAMES[firstNameIndex] +' '+ WIZARD_SECOND_NAMES[secondNameIndex];

  return wizardName
}

/* Функция getWizardColors генерирует случайные цвета из массивов COAT_COLOR и EYES_COLOR и возвращает в виде массива*/
var getWizardColors = function() {

  var coatColorsIndex = getRandomNumber(0, COAT_COLOR.length - 1);
  var eyesColorsIndex = getRandomNumber(0, EYES_COLOR.length - 1);

  return [COAT_COLOR[coatColorsIndex], EYES_COLOR[eyesColorsIndex]]
}

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getWizardName();

  wizardColors = getWizardColors();
  wizardElement.querySelector('.wizard-coat').style.fill = wizardColors[0];
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardColors[1];

  similarListElement.appendChild(wizardElement);
}
