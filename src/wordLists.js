var WORD_LISTS = {
  places: [
    'library', 'airport', 'jungle', 'volcano', 'lighthouse',
    'swamp', 'casino', 'observatory', 'dungeon', 'rooftop',
    'submarine base', 'haunted mansion', 'igloo', 'treehouse', 'quarry'
  ],
  transportation: [
    'bicycle', 'submarine', 'hot air balloon', 'zeppelin', 'rickshaw',
    'canoe', 'skateboard', 'dogsled', 'hovercraft', 'cable car',
    'unicycle', 'gondola', 'hang glider', 'snowmobile', 'tuk-tuk'
  ],
  food: [
    'spaghetti', 'mango', 'croissant', 'kimchi', 'pretzel',
    'dumpling', 'tapioca', 'brisket', 'soufflé', 'baklava',
    'churro', 'pho', 'ratatouille', 'bruschetta', 'tempura'
  ],
  objects: [
    'stapler', 'umbrella', 'trampoline', 'periscope', 'abacus',
    'megaphone', 'sundial', 'accordion', 'anvil', 'boomerang',
    'metronome', 'compass', 'telescope', 'harmonica', 'kazoo'
  ],
  animals: [
    'capybara', 'platypus', 'narwhal', 'axolotl', 'quokka',
    'okapi', 'tardigrade', 'pangolin', 'binturong', 'mantis shrimp',
    'fossa', 'aye-aye', 'kakapo', 'wolverine', 'tapir'
  ],
  occupations: [
    'beekeeper', 'astronaut', 'mime', 'locksmith', 'taxidermist',
    'sommelier', 'cartographer', 'falconer', 'cryptographer', 'puppeteer',
    'glassblower', 'luthier', 'cooper', 'chimney sweep', 'stenographer'
  ],
  emotions: [
    'jealousy', 'nostalgia', 'panic', 'euphoria', 'schadenfreude',
    'dread', 'whimsy', 'melancholy', 'giddiness', 'indignation',
    'wistfulness', 'bewilderment', 'serenity', 'apprehension', 'elation'
  ],
  actions: [
    'juggling', 'whispering', 'somersaulting', 'eavesdropping', 'karate-chopping',
    'moonwalking', 'yodeling', 'pirouetting', 'sneaking', 'gesticulating',
    'contemplating', 'impersonating', 'rummaging', 'serenading', 'tiptoeing'
  ],
  characters: [
    'pirate', 'wizard', 'detective', 'vampire', 'jester',
    'samurai', 'time-traveler', 'mad scientist', 'swamp witch', 'ghost hunter',
    'bounty hunter', 'oracle', 'alchemist', 'bard', 'knight errant'
  ],
  timePeriods: [
    'medieval', '1920s', 'post-apocalyptic', 'Victorian', 'Stone Age',
    'far future', 'Renaissance', 'roaring fifties', 'ancient Rome', 'Wild West',
    'space age', 'Bronze Age', 'Prohibition era', 'Cold War', 'Baroque'
  ]
};

var CATEGORY_NAMES = [
  { key: 'places',       label: 'Places' },
  { key: 'transportation', label: 'Transportation' },
  { key: 'food',         label: 'Food' },
  { key: 'objects',      label: 'Not Food' },
  { key: 'animals',      label: 'Animals' },
  { key: 'occupations',  label: 'Occupations' },
  { key: 'emotions',     label: 'Emotions' },
  { key: 'actions',      label: 'Actions' },
  { key: 'characters',   label: 'Characters' },
  { key: 'timePeriods',  label: 'Time Periods' }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORD_LISTS: WORD_LISTS, CATEGORY_NAMES: CATEGORY_NAMES };
}
