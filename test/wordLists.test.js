const { WORD_LISTS, CATEGORY_NAMES } = require('../src/wordLists.js');

describe('WORD_LISTS structure', () => {
  test('WORD_LISTS is an object', () => {
    expect(typeof WORD_LISTS).toBe('object');
    expect(WORD_LISTS).not.toBeNull();
  });

  test('has exactly 10 categories', () => {
    expect(Object.keys(WORD_LISTS)).toHaveLength(10);
  });

  const expectedKeys = [
    'places', 'transportation', 'food', 'objects',
    'animals', 'occupations', 'emotions', 'actions',
    'characters', 'timePeriods'
  ];

  expectedKeys.forEach(key => {
    test(`contains the "${key}" category`, () => {
      expect(WORD_LISTS).toHaveProperty(key);
    });

    test(`"${key}" is an array`, () => {
      expect(Array.isArray(WORD_LISTS[key])).toBe(true);
    });

    test(`"${key}" has at least 1000 words`, () => {
      expect(WORD_LISTS[key].length).toBeGreaterThanOrEqual(1000);
    });

    test(`all entries in "${key}" are non-empty strings`, () => {
      WORD_LISTS[key].forEach(word => {
        expect(typeof word).toBe('string');
        expect(word.trim().length).toBeGreaterThan(0);
      });
    });

    test(`"${key}" has no duplicate words`, () => {
      const words = WORD_LISTS[key];
      const unique = new Set(words);
      expect(unique.size).toBe(words.length);
    });
  });
});

describe('CATEGORY_NAMES structure', () => {
  test('is an array', () => {
    expect(Array.isArray(CATEGORY_NAMES)).toBe(true);
  });

  test('length matches number of keys in WORD_LISTS', () => {
    expect(CATEGORY_NAMES.length).toBe(Object.keys(WORD_LISTS).length);
  });

  test('each entry has a "key" and "label" string property', () => {
    CATEGORY_NAMES.forEach(entry => {
      expect(typeof entry.key).toBe('string');
      expect(entry.key.length).toBeGreaterThan(0);
      expect(typeof entry.label).toBe('string');
      expect(entry.label.length).toBeGreaterThan(0);
    });
  });

  test('every key in CATEGORY_NAMES exists in WORD_LISTS', () => {
    CATEGORY_NAMES.forEach(entry => {
      expect(WORD_LISTS).toHaveProperty(entry.key);
    });
  });

  test('no duplicate keys in CATEGORY_NAMES', () => {
    const keys = CATEGORY_NAMES.map(c => c.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});
