document.addEventListener('DOMContentLoaded', function () {
  var selectedCategory = 'all';
  var categoryBar = document.getElementById('category-bar');
  var generateBtn = document.getElementById('generate-btn');
  var resultDisplay = document.getElementById('result');

  // Build category buttons dynamically from CATEGORY_NAMES
  CATEGORY_NAMES.forEach(function (cat) {
    var btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.dataset.category = cat.key;
    btn.textContent = cat.label;
    btn.addEventListener('click', function () { selectCategory(cat.key); });
    categoryBar.appendChild(btn);
  });

  // "All" wildcard button
  var allBtn = document.createElement('button');
  allBtn.className = 'category-btn active';
  allBtn.dataset.category = 'all';
  allBtn.textContent = 'All';
  allBtn.addEventListener('click', function () { selectCategory('all'); });
  categoryBar.insertBefore(allBtn, categoryBar.firstChild);

  function selectCategory(key) {
    selectedCategory = key;
    categoryBar.querySelectorAll('.category-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.category === key);
    });
  }

  generateBtn.addEventListener('click', function () {
    var word = getRandomWord(selectedCategory);
    resultDisplay.textContent = word;
    resultDisplay.classList.add('pop');
    resultDisplay.addEventListener('animationend', function () {
      resultDisplay.classList.remove('pop');
    }, { once: true });
  });
});
