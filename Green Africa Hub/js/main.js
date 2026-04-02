/* ============================================================
   GREEN AFRICA HUB — Main JavaScript
   ============================================================ */

// === RECIPE DATA ===
const recipes = [
  {
    id: 1,
    name: "Jollof Rice",
    serves: 6,
    prep: 20,
    cook: 50,
    induction: 371,
    gas: 403,
    saves: 32,
    hasSwap: false,
    seaShipped: true,
    story: "The crown jewel of West African cooking. A one-pot rice dish simmered in a rich tomato and pepper sauce, beloved across the continent and the diaspora.",
    allergens: ["None (naturally gluten-free)"],
    categories: ["rice", "one-pot"],
    production: 310,
    transport: 22,
    cookInduction: 39,
    cookGas: 71,
    method: [
      "Blend tomatoes, red peppers, scotch bonnet, and onions into a smooth paste.",
      "Heat palm oil on medium induction setting (level 6). Fry diced onions until golden.",
      "Add tomato paste, stir for 2 minutes. Pour in blended pepper mix.",
      "Season with thyme, curry powder, bay leaves, and seasoning cubes. Simmer 20 minutes.",
      "Wash rice and add to the sauce. Add stock to just cover the rice.",
      "Cover tightly, reduce to low (level 3). Cook 30 minutes without lifting lid.",
      "Fluff with fork, garnish with fried plantain and fresh herbs."
    ]
  },
  {
    id: 2,
    name: "Pounded Yam & Spinach Lamb Stew",
    serves: 4,
    prep: 20,
    cook: 90,
    induction: 2776,
    gas: 2862,
    saves: 86,
    hasSwap: true,
    swapFrom: "ugwu",
    swapTo: "UK spinach",
    swapReduction: "99.9%",
    seaShipped: false,
    story: "A celebration dish — silky pounded yam paired with a rich, slow-cooked lamb stew. We swap air-freighted ugwu for British spinach, cutting transport carbon by 99.9%.",
    allergens: ["May contain gluten (check stock cubes)"],
    categories: ["stew", "swap"],
    production: 2650,
    transport: 30,
    cookInduction: 96,
    cookGas: 182,
    method: [
      "Cut lamb into chunks, season with salt, thyme, onion, and stock cubes.",
      "Pressure cook lamb on induction (level 8) for 25 minutes until tender.",
      "In a separate pot, heat palm oil. Fry blended peppers and tomatoes for 15 minutes.",
      "Add cooked lamb and stock. Season and simmer for 20 minutes.",
      "Wilt UK-sourced spinach into the stew in the final 5 minutes.",
      "For pounded yam: boil yam pieces until soft, pound or blend until smooth and stretchy.",
      "Serve pounded yam with the spinach lamb stew."
    ]
  },
  {
    id: 3,
    name: "Goat Stew & Potatoes",
    serves: 4,
    prep: 20,
    cook: 90,
    induction: 849,
    gas: 935,
    saves: 86,
    hasSwap: false,
    seaShipped: true,
    story: "Goat is the lowest carbon red meat at just 5kg CO₂e/kg. This hearty stew pairs tender goat with potatoes in a rich tomato base — comfort food with a clear conscience.",
    allergens: ["None"],
    categories: ["stew", "one-pot"],
    production: 723,
    transport: 30,
    cookInduction: 96,
    cookGas: 182,
    method: [
      "Season goat meat with onions, garlic, ginger, thyme, and stock cubes.",
      "Pressure cook on induction (level 8) for 30 minutes.",
      "Fry blended tomatoes and peppers in vegetable oil until reduced.",
      "Add cooked goat and stock, bring to a simmer.",
      "Peel and cube potatoes, add to stew.",
      "Cook until potatoes are tender, about 25 minutes on level 5.",
      "Adjust seasoning, serve hot with bread or rice."
    ]
  },
  {
    id: 4,
    name: "Kale Soup with Fufu",
    serves: 4,
    prep: 15,
    cook: 35,
    induction: 138,
    gas: 171,
    saves: 33,
    hasSwap: true,
    swapFrom: "ugwu",
    swapTo: "British kale",
    swapReduction: "99.9%",
    seaShipped: false,
    story: "A light, nutritious soup using British kale instead of air-freighted ugwu — same vibrant green goodness, 99.9% less transport carbon. Served with fluffy fufu.",
    allergens: ["May contain fish (dried crayfish)"],
    categories: ["soup", "swap"],
    production: 95,
    transport: 10,
    cookInduction: 33,
    cookGas: 66,
    method: [
      "Boil assorted meat and fish with seasonings until tender.",
      "Wash and chop British kale finely.",
      "Add palm oil, ground crayfish, and seasoning to the meat stock.",
      "Bring to a boil on induction level 7.",
      "Add chopped kale, stir and cook for 5 minutes.",
      "For fufu: mix fufu flour with boiling water, stir vigorously until smooth.",
      "Serve fufu alongside the steaming kale soup."
    ]
  },
  {
    id: 5,
    name: "Potato Pottage with Assorted Stew",
    serves: 4,
    prep: 20,
    cook: 60,
    induction: 2117,
    gas: 2174,
    saves: 57,
    hasSwap: false,
    seaShipped: true,
    story: "A hearty Nigerian potato porridge paired with a rich assorted meat stew. Pure comfort, all sea-shipped ingredients, deeply satisfying.",
    allergens: ["None"],
    categories: ["stew", "one-pot"],
    production: 2030,
    transport: 30,
    cookInduction: 57,
    cookGas: 114,
    method: [
      "Peel and cube potatoes. Boil with diced onions and seasoning on induction level 7.",
      "In a separate pot, prepare assorted stew with beef, tripe, and cow skin.",
      "Fry blended tomatoes and peppers until oil floats on top.",
      "Add palm oil and ground crayfish to the potato pot.",
      "Mash some potatoes for thickness, leave others chunky.",
      "Combine stew with pottage or serve alongside.",
      "Garnish with sliced scotch bonnet and fresh herbs."
    ]
  },
  {
    id: 6,
    name: "Fried Rice",
    serves: 4,
    prep: 20,
    cook: 30,
    induction: 681,
    gas: 709,
    saves: 28,
    hasSwap: false,
    seaShipped: true,
    story: "Nigerian fried rice — colourful, flavourful, and a party staple. Mixed vegetables, seasoned rice, and a hint of curry make this irresistible.",
    allergens: ["May contain soy"],
    categories: ["rice"],
    production: 630,
    transport: 22,
    cookInduction: 29,
    cookGas: 57,
    method: [
      "Cook rice until 80% done, drain and spread to cool.",
      "Dice carrots, green beans, and peppers into small cubes.",
      "Heat vegetable oil on induction level 7. Stir-fry vegetables for 3 minutes.",
      "Add cooked rice, soy sauce, curry powder, thyme, and seasoning.",
      "Toss continuously on high heat for 5 minutes.",
      "Add cooked liver or chicken pieces if desired.",
      "Serve hot, garnished with spring onions."
    ]
  },
  {
    id: 7,
    name: "Chicken Curry & Mushroom Rice",
    serves: 4,
    prep: 20,
    cook: 45,
    induction: 1483,
    gas: 1526,
    saves: 43,
    hasSwap: false,
    seaShipped: true,
    story: "A fusion of African and Caribbean flavours — aromatic chicken curry served over earthy mushroom rice. All ingredients sea-shipped or UK-sourced.",
    allergens: ["May contain dairy (check curry paste)"],
    categories: ["rice", "one-pot"],
    production: 1420,
    transport: 20,
    cookInduction: 43,
    cookGas: 86,
    method: [
      "Season chicken with curry powder, turmeric, garlic, ginger, and salt.",
      "Brown chicken pieces on induction level 8, set aside.",
      "Sauté onions and peppers, add curry paste and coconut milk.",
      "Return chicken, simmer on level 4 for 25 minutes.",
      "For rice: sauté sliced mushrooms, add rice and stock.",
      "Cook rice on level 3 until fluffy, about 20 minutes.",
      "Serve curry over mushroom rice with fresh coriander."
    ]
  },
  {
    id: 8,
    name: "Mackerel Risotto",
    serves: 4,
    prep: 15,
    cook: 35,
    induction: 405,
    gas: 438,
    saves: 33,
    hasSwap: false,
    seaShipped: true,
    story: "Mackerel is the lowest carbon protein at just 0.7kg CO₂e/kg. This creamy risotto celebrates sustainable seafood with African spice notes.",
    allergens: ["Fish, may contain dairy"],
    categories: ["rice", "seafood"],
    production: 350,
    transport: 22,
    cookInduction: 33,
    cookGas: 66,
    method: [
      "Flake smoked mackerel, removing bones.",
      "Sauté diced onions and garlic in olive oil on induction level 6.",
      "Add arborio rice, stir for 2 minutes until translucent.",
      "Add warm stock one ladle at a time, stirring continuously.",
      "After 20 minutes, fold in flaked mackerel and chopped parsley.",
      "Season with black pepper and a squeeze of lemon.",
      "Serve immediately — risotto waits for no one."
    ]
  },
  {
    id: 9,
    name: "Creamy African Pasta",
    serves: 4,
    prep: 15,
    cook: 30,
    induction: 359,
    gas: 387,
    saves: 28,
    hasSwap: false,
    seaShipped: true,
    story: "Pasta meets African spice in this creamy, flavourful fusion. A weeknight winner that brings the heat and the comfort.",
    allergens: ["Gluten, may contain dairy"],
    categories: ["pasta"],
    production: 308,
    transport: 22,
    cookInduction: 29,
    cookGas: 57,
    method: [
      "Cook pasta in salted boiling water on induction level 9 until al dente.",
      "Blend tomatoes, scotch bonnet, and onions.",
      "Sauté garlic and onions in olive oil on level 6.",
      "Add blended sauce, season with paprika, thyme, and seasoning cubes.",
      "Stir in cream or coconut cream for richness.",
      "Toss drained pasta in the sauce.",
      "Serve topped with fresh basil and a drizzle of chilli oil."
    ]
  },
  {
    id: 10,
    name: "African Style Pancake",
    serves: 4,
    prep: 15,
    cook: 25,
    induction: 322,
    gas: 345,
    saves: 23,
    hasSwap: false,
    seaShipped: true,
    story: "Light, fluffy pancakes with an African twist — a touch of nutmeg, vanilla, and love. Perfect for breakfast or a sweet treat any time.",
    allergens: ["Gluten, eggs, dairy"],
    categories: ["breakfast"],
    production: 290,
    transport: 8,
    cookInduction: 24,
    cookGas: 47,
    method: [
      "Mix flour, sugar, baking powder, nutmeg, and a pinch of salt.",
      "Whisk eggs, milk, and vanilla extract in a separate bowl.",
      "Combine wet and dry ingredients until just mixed (don't overmix).",
      "Heat induction to level 5, lightly oil a non-stick pan.",
      "Pour small ladles of batter, cook until bubbles form on surface.",
      "Flip and cook for 1 more minute.",
      "Serve stacked with honey, fresh fruit, or chocolate sauce."
    ]
  },
  {
    id: 11,
    name: "Meatball Bean Pasta",
    serves: 4,
    prep: 25,
    cook: 40,
    induction: 2914,
    gas: 2951,
    saves: 37,
    hasSwap: false,
    seaShipped: true,
    story: "Hearty meatballs with protein-rich beans in a rich tomato pasta sauce. A filling, balanced meal that the whole family will love.",
    allergens: ["Gluten, eggs"],
    categories: ["pasta", "one-pot"],
    production: 2862,
    transport: 23,
    cookInduction: 29,
    cookGas: 66,
    method: [
      "Mix minced beef with breadcrumbs, egg, garlic, onions, and seasoning.",
      "Roll into even-sized meatballs.",
      "Brown meatballs on induction level 8, turning frequently. Set aside.",
      "Sauté onions and garlic, add tinned tomatoes and tomato paste.",
      "Season with basil, oregano, and black pepper. Simmer 15 minutes.",
      "Add drained beans and browned meatballs. Cook 10 more minutes.",
      "Serve over cooked pasta with grated cheese."
    ]
  }
];

// === DARK MODE TOGGLE ===
(function initTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateToggleIcon(toggle, theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateToggleIcon(toggle, theme);
    });
  }
})();

function updateToggleIcon(btn, theme) {
  if (!btn) return;
  btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  btn.innerHTML = theme === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// === HEADER SCROLL BEHAVIOR ===
(function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
})();

// === MOBILE MENU ===
(function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav__list');
  const overlay = document.querySelector('.nav__overlay');

  if (!menuToggle || !navList) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : '';
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navList.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close on link click
  navList.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navList.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// === SCROLL REVEAL (JS fallback) ===
(function initScrollReveal() {
  if (CSS.supports && CSS.supports('animation-timeline', 'scroll()')) return;

  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  elements.forEach(el => {
    el.classList.remove('fade-in');
    el.classList.add('fade-in-js');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in-js').forEach(el => observer.observe(el));
})();

// === RECIPE RENDERING (recipes.html) ===
function initRecipesPage() {
  const grid = document.getElementById('recipe-grid');
  if (!grid) return;

  // Color palette for recipe card headers
  const gradients = [
    'linear-gradient(135deg, #1B5E3B, #2D8B5E)',
    'linear-gradient(135deg, #C75B2B, #E07A4A)',
    'linear-gradient(135deg, #D4A843, #E8BF5A)',
    'linear-gradient(135deg, #1B5E3B, #D4A843)',
    'linear-gradient(135deg, #C75B2B, #D4A843)',
    'linear-gradient(135deg, #2D8B5E, #4DAF72)',
  ];

  function renderRecipes(filteredRecipes) {
    grid.innerHTML = filteredRecipes.map((r, i) => `
      <div class="recipe-card fade-in-js visible" onclick="showRecipeDetail(${r.id})" role="button" tabindex="0" aria-label="View ${r.name} recipe">
        <div class="recipe-card__image" style="background: ${gradients[i % gradients.length]}; display: flex; align-items: center; justify-content: center; color: rgba(250,245,237,0.9); font-family: var(--font-display); font-size: var(--text-xl); font-weight: 700; padding: var(--space-4);">
          ${r.name}
        </div>
        <div class="recipe-card__body">
          <h3 class="recipe-card__name">${r.name}</h3>
          <div class="recipe-card__meta">
            <span>👥 Serves ${r.serves}</span>
            <span>⏱ ${r.prep + r.cook} min</span>
          </div>
          <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; align-items: center;">
            <span class="carbon-badge carbon-badge--green">🌿 ${r.induction}g CO₂e</span>
            <span class="carbon-badge carbon-badge--save">↓ Save ${r.saves}g</span>
          </div>
          ${r.hasSwap ? `<div class="swap-badge">🔄 ${r.swapFrom} → ${r.swapTo} (${r.swapReduction} transport reduction)</div>` : ''}
          ${r.seaShipped ? '<div style="margin-top: var(--space-2); font-size: var(--text-xs); color: var(--color-text-faint);">🚢 All sea-shipped</div>' : ''}
        </div>
      </div>
    `).join('');
  }

  renderRecipes(recipes);

  // Filters
  const filterBtns = document.querySelectorAll('.recipe-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      if (filter === 'all') {
        renderRecipes(recipes);
      } else if (filter === 'swap') {
        renderRecipes(recipes.filter(r => r.hasSwap));
      } else if (filter === 'low-carbon') {
        renderRecipes([...recipes].sort((a, b) => a.induction - b.induction));
      } else {
        renderRecipes(recipes.filter(r => r.categories.includes(filter)));
      }
    });
  });
}

// === RECIPE DETAIL MODAL ===
function showRecipeDetail(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;

  const modal = document.getElementById('recipe-modal');
  if (!modal) return;

  const maxCarbon = Math.max(recipe.gas, recipe.induction);

  modal.querySelector('.recipe-modal__content').innerHTML = `
    <button class="recipe-modal__close" onclick="closeRecipeModal()" aria-label="Close">&times;</button>
    <h2 class="recipe-detail__title">${recipe.name}</h2>
    <div class="recipe-detail__meta">
      <span>👥 Serves ${recipe.serves}</span>
      <span>🔪 Prep: ${recipe.prep} min</span>
      <span>🍳 Cook: ${recipe.cook} min</span>
      ${recipe.seaShipped ? '<span>🚢 All sea-shipped</span>' : ''}
      ${recipe.hasSwap ? `<span>🔄 ${recipe.swapFrom} → ${recipe.swapTo}</span>` : ''}
    </div>

    <div class="recipe-detail__story">"${recipe.story}"</div>

    <div class="recipe-detail__carbon">
      <h3 style="font-family: var(--font-display); font-weight: 600; margin-bottom: var(--space-3);">🌍 Carbon Badge Breakdown</h3>
      <div class="carbon-bar-container">
        <div class="carbon-bar-label">
          <span>⚡ Induction</span>
          <strong>${recipe.induction}g CO₂e</strong>
        </div>
        <div class="carbon-bar">
          <div class="carbon-bar__fill carbon-bar__fill--induction" style="width: ${(recipe.induction / maxCarbon * 100)}%"></div>
        </div>
      </div>
      <div class="carbon-bar-container">
        <div class="carbon-bar-label">
          <span>🔥 Gas</span>
          <strong>${recipe.gas}g CO₂e</strong>
        </div>
        <div class="carbon-bar">
          <div class="carbon-bar__fill carbon-bar__fill--gas" style="width: ${(recipe.gas / maxCarbon * 100)}%"></div>
        </div>
      </div>
      <div style="margin-top: var(--space-3); text-align: center;">
        <span class="carbon-badge carbon-badge--save" style="font-size: var(--text-sm);">
          ↓ Save ${recipe.saves}g CO₂e per cook with induction
        </span>
      </div>

      <div class="breakdown-grid" style="margin-top: var(--space-4);">
        <div class="breakdown-item">
          <div class="breakdown-item__value">${recipe.production}g</div>
          <div class="breakdown-item__label">Food Production</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-item__value">${recipe.transport}g</div>
          <div class="breakdown-item__label">Transport</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-item__value">${recipe.cookInduction}g / ${recipe.cookGas}g</div>
          <div class="breakdown-item__label">Cooking (Induction / Gas)</div>
        </div>
      </div>
    </div>

    <h3 style="font-family: var(--font-display); font-weight: 600; margin-bottom: var(--space-3);">Method</h3>
    <ol style="padding-left: var(--space-6); margin-bottom: var(--space-6);">
      ${recipe.method.map(step => `<li style="margin-bottom: var(--space-2); color: var(--color-text-muted); font-size: var(--text-sm); line-height: 1.7;">${step}</li>`).join('')}
    </ol>

    <div style="display: flex; gap: var(--space-3); flex-wrap: wrap;">
      <span style="font-size: var(--text-xs); font-weight: 600; color: var(--color-text-muted);">Allergens:</span>
      ${recipe.allergens.map(a => `<span style="font-size: var(--text-xs); color: var(--color-accent);">${a}</span>`).join(', ')}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Animate bars after render
  setTimeout(() => {
    modal.querySelectorAll('.carbon-bar__fill').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        bar.style.width = width;
      });
    });
  }, 50);
}

function closeRecipeModal() {
  const modal = document.getElementById('recipe-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('recipe-modal__overlay')) {
    closeRecipeModal();
  }
});

// Close modal on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeRecipeModal();
});

// === CARBON CALCULATOR ===
function initCalculator() {
  const select = document.getElementById('calc-recipe-select');
  if (!select) return;

  // Populate select
  recipes.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.id;
    opt.textContent = `${r.name} (Serves ${r.serves})`;
    select.appendChild(opt);
  });

  select.addEventListener('change', updateCalculator);

  // Initial render
  if (recipes.length > 0) {
    select.value = recipes[0].id;
    updateCalculator();
  }
}

function updateCalculator() {
  const select = document.getElementById('calc-recipe-select');
  const resultsContainer = document.getElementById('calc-results');
  if (!select || !resultsContainer) return;

  const recipe = recipes.find(r => r.id === parseInt(select.value));
  if (!recipe) return;

  const maxCarbon = Math.max(recipe.gas, recipe.induction);
  const annualSavings = recipe.saves * recipe.serves * 52;
  const annualSavingsKg = (annualSavings / 1000).toFixed(1);

  resultsContainer.innerHTML = `
    <div class="calc-chart">
      <h3 style="font-family: var(--font-display); font-weight: 600; margin-bottom: var(--space-4);">CO₂e per Cook</h3>

      <div class="calc-bar-group">
        <div class="calc-bar-header">
          <span>⚡ Induction Cooking</span>
          <span class="calc-bar-value" style="color: var(--color-primary);">${recipe.induction}g CO₂e</span>
        </div>
        <div class="calc-bar">
          <div class="calc-bar__fill" style="width: 0%; background: var(--color-primary);" data-target="${(recipe.induction / maxCarbon * 100)}">
          </div>
        </div>
      </div>

      <div class="calc-bar-group">
        <div class="calc-bar-header">
          <span>🔥 Gas Cooking</span>
          <span class="calc-bar-value" style="color: var(--color-accent);">${recipe.gas}g CO₂e</span>
        </div>
        <div class="calc-bar">
          <div class="calc-bar__fill" style="width: 0%; background: var(--color-accent);" data-target="100">
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: var(--space-4);">
        <span class="carbon-badge carbon-badge--save" style="font-size: var(--text-sm); padding: var(--space-2) var(--space-4);">
          ↓ ${recipe.saves}g saved per cook with induction
        </span>
      </div>

      <div class="breakdown-grid">
        <div class="breakdown-item">
          <div class="breakdown-item__value">${recipe.production}g</div>
          <div class="breakdown-item__label">Food Production</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-item__value">${recipe.transport}g</div>
          <div class="breakdown-item__label">Transport</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-item__value">${recipe.cookInduction}g</div>
          <div class="breakdown-item__label">Induction Cooking</div>
        </div>
      </div>
    </div>

    <div>
      <div class="calc-savings">
        <div class="calc-savings__value">${annualSavingsKg}kg</div>
        <div class="calc-savings__label">Annual CO₂e savings cooking weekly</div>
        <div style="font-size: var(--text-xs); color: var(--color-text-faint); margin-top: var(--space-2);">
          ${recipe.saves}g × ${recipe.serves} servings × 52 weeks
        </div>
      </div>

      <div class="calc-stats">
        <div class="calc-stat">
          <div class="calc-stat__value">${recipe.saves}g</div>
          <div class="calc-stat__label">Saved per cook</div>
        </div>
        <div class="calc-stat">
          <div class="calc-stat__value">${(recipe.saves * recipe.serves)}g</div>
          <div class="calc-stat__label">Saved per meal (all servings)</div>
        </div>
        <div class="calc-stat">
          <div class="calc-stat__value">${(recipe.saves * recipe.serves * 52)}g</div>
          <div class="calc-stat__label">Annual savings (grams)</div>
        </div>
        <div class="calc-stat">
          <div class="calc-stat__value">${recipe.serves}</div>
          <div class="calc-stat__label">Servings per cook</div>
        </div>
      </div>

      ${recipe.hasSwap ? `
        <div style="margin-top: var(--space-4); padding: var(--space-4); background: var(--color-accent-light); border-radius: var(--radius-lg); font-size: var(--text-sm);">
          <strong style="color: var(--color-accent);">🔄 British Alternative:</strong>
          <span style="color: var(--color-text-muted);">Swap ${recipe.swapFrom} → ${recipe.swapTo} for ${recipe.swapReduction} transport carbon reduction</span>
        </div>
      ` : `
        <div style="margin-top: var(--space-4); padding: var(--space-4); background: var(--color-primary-light); border-radius: var(--radius-lg); font-size: var(--text-sm);">
          <strong style="color: var(--color-primary);">🚢 All Sea-Shipped:</strong>
          <span style="color: var(--color-text-muted);">Every ingredient arrives by sea — authentic and low-carbon.</span>
        </div>
      `}
    </div>
  `;

  // Animate bars
  setTimeout(() => {
    resultsContainer.querySelectorAll('.calc-bar__fill').forEach(bar => {
      const target = bar.dataset.target;
      requestAnimationFrame(() => {
        bar.style.width = target + '%';
      });
    });
  }, 100);
}

// === CONTACT FORM ===
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    const success = document.querySelector('.form-success');
    if (success) success.classList.add('visible');
  });
}

// === COUNTER ANIMATION ===
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          el.textContent = prefix + current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  initRecipesPage();
  initCalculator();
  initContactForm();
  animateCounters();

  // Reinit scroll reveal for dynamically added elements
  setTimeout(() => {
    if (!(CSS.supports && CSS.supports('animation-timeline', 'scroll()'))) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.fade-in-js:not(.visible)').forEach(el => observer.observe(el));
    }
  }, 200);
});
