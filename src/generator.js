var _wordListsModule = (typeof require !== 'undefined')
  ? require('./wordLists.js')
  : { WORD_LISTS: WORD_LISTS, CATEGORY_NAMES: CATEGORY_NAMES };

var _WORD_LISTS = _wordListsModule.WORD_LISTS;
var _CATEGORY_NAMES = _wordListsModule.CATEGORY_NAMES;

function getCategories() {
  return _CATEGORY_NAMES.map(function(c) { return c.key; });
}

function _getAllWords() {
  return getCategories().reduce(function(acc, key) {
    return acc.concat(_WORD_LISTS[key]);
  }, []);
}

function getRandomWord(category) {
  if (typeof category !== 'string') {
    throw new TypeError('category must be a string');
  }

  var pool;
  if (category === 'all') {
    pool = _getAllWords();
  } else if (_WORD_LISTS.hasOwnProperty(category)) {
    pool = _WORD_LISTS[category];
  } else {
    throw new RangeError('Unknown category: "' + category + '"');
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getRandomWord: getRandomWord, getCategories: getCategories };
}
