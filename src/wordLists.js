var CATEGORY_NAMES = [
  { key: 'places',         label: 'Places' },
  { key: 'transportation', label: 'Transportation' },
  { key: 'food',           label: 'Food' },
  { key: 'objects',        label: 'Not Food' },
  { key: 'animals',        label: 'Animals' },
  { key: 'occupations',    label: 'Occupations' },
  { key: 'emotions',       label: 'Emotions' },
  { key: 'actions',        label: 'Actions' },
  { key: 'characters',     label: 'Characters' },
  { key: 'timePeriods',    label: 'Time Periods' }
];

var WORD_LISTS;

if (typeof module !== 'undefined' && module.exports) {
  // Jest / Node: require each data file directly
  WORD_LISTS = {
    places:         require('../data/places.js'),
    transportation: require('../data/transportation.js'),
    food:           require('../data/food.js'),
    objects:        require('../data/objects.js'),
    animals:        require('../data/animals.js'),
    occupations:    require('../data/occupations.js'),
    emotions:       require('../data/emotions.js'),
    actions:        require('../data/actions.js'),
    characters:     require('../data/characters.js'),
    timePeriods:    require('../data/timePeriods.js')
  };
  module.exports = { WORD_LISTS: WORD_LISTS, CATEGORY_NAMES: CATEGORY_NAMES };
} else {
  // Browser: data files loaded via <script> tags expose globals on window
  WORD_LISTS = {
    places:         WORDS_PLACES,
    transportation: WORDS_TRANSPORTATION,
    food:           WORDS_FOOD,
    objects:        WORDS_OBJECTS,
    animals:        WORDS_ANIMALS,
    occupations:    WORDS_OCCUPATIONS,
    emotions:       WORDS_EMOTIONS,
    actions:        WORDS_ACTIONS,
    characters:     WORDS_CHARACTERS,
    timePeriods:    WORDS_TIME_PERIODS
  };
}
