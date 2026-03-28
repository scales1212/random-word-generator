const { getRandomWord, getCategories } = require('../src/generator.js');
const { WORD_LISTS } = require('../src/wordLists.js');

describe('getCategories()', () => {
  test('returns an array', () => {
    expect(Array.isArray(getCategories())).toBe(true);
  });

  test('returns exactly 10 categories', () => {
    expect(getCategories()).toHaveLength(10);
  });

  test('does not include "all" (it is synthetic)', () => {
    expect(getCategories()).not.toContain('all');
  });

  test('all returned keys exist in WORD_LISTS', () => {
    getCategories().forEach(key => {
      expect(WORD_LISTS).toHaveProperty(key);
    });
  });
});

describe('getRandomWord() — basic return type', () => {
  test('returns a string for a valid category', () => {
    expect(typeof getRandomWord('places')).toBe('string');
  });

  test('returns a non-empty string', () => {
    expect(getRandomWord('food').length).toBeGreaterThan(0);
  });

  test('returns a string for "all"', () => {
    expect(typeof getRandomWord('all')).toBe('string');
  });
});

describe('getRandomWord() — category isolation', () => {
  const categories = [
    'places', 'transportation', 'food', 'objects',
    'animals', 'occupations', 'emotions', 'actions',
    'characters', 'timePeriods'
  ];

  categories.forEach(cat => {
    test(`words from "${cat}" are only drawn from that category's list`, () => {
      const list = WORD_LISTS[cat];
      for (let i = 0; i < 50; i++) {
        expect(list).toContain(getRandomWord(cat));
      }
    });
  });
});

describe('getRandomWord("all") — wildcard', () => {
  test('result exists in at least one category', () => {
    const allWords = Object.values(WORD_LISTS).flat();
    const word = getRandomWord('all');
    expect(allWords).toContain(word);
  });

  test('draws from multiple categories over many calls', () => {
    const categoryHits = new Set();
    for (let i = 0; i < 200; i++) {
      const word = getRandomWord('all');
      Object.entries(WORD_LISTS).forEach(([cat, list]) => {
        if (list.includes(word)) categoryHits.add(cat);
      });
    }
    expect(categoryHits.size).toBeGreaterThan(3);
  });
});

describe('getRandomWord() — error handling', () => {
  test('throws TypeError for undefined', () => {
    expect(() => getRandomWord(undefined)).toThrow(TypeError);
  });

  test('throws TypeError for a number', () => {
    expect(() => getRandomWord(123)).toThrow(TypeError);
  });

  test('throws TypeError for null', () => {
    expect(() => getRandomWord(null)).toThrow(TypeError);
  });

  test('throws TypeError for an array', () => {
    expect(() => getRandomWord(['places'])).toThrow(TypeError);
  });

  test('throws RangeError for an unknown category string', () => {
    expect(() => getRandomWord('dinosaurs')).toThrow(RangeError);
  });

  test('throws RangeError for an empty string', () => {
    expect(() => getRandomWord('')).toThrow(RangeError);
  });

  test('TypeError message mentions "string"', () => {
    expect(() => getRandomWord(42)).toThrow(/string/i);
  });

  test('RangeError message includes the bad category name', () => {
    expect(() => getRandomWord('nope')).toThrow(/nope/);
  });
});
