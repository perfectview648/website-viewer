/**
 * Perfect View — Digital Menu Showcase
 *
 * To add another digital menu later, just add a new object to the MENUS
 * array below. No other code needs to change.
 *
 * image: path to a local screenshot in /assets (WebP recommended).
 *        If the file doesn't exist yet, the card will automatically
 *        show a labeled placeholder instead of a broken image.
 */

const MENUS = [
  {
    name: "Soghaat Sweets & Bakers",
    description: "Digital menu for sweets and bakery items.",
    url: "https://soghaat-menus.perfectview648.workers.dev/",
    image: "/assets/soghaat.webp"
  },
  {
    name: "Lumbini Hut",
    description: "Digital menu for dine-in and takeout.",
    url: "https://lumbini-digital-menu.perfectview648.workers.dev/",
    image: "/assets/lumbini.webp"
  },
  {
    name: "Chulla Express",
    description: "Digital menu for quick-service dining.",
    url: "https://chulla-menu.perfectview648.workers.dev/",
    image: "/assets/chulla.webp"
  },
  {
    name: "Samosa Hut",
    description: "Digital menu for a fast-casual snack shop.",
    url: "https://samosa-hut.perfectview648.workers.dev/",
    image: "/assets/samosa-hut.webp"
  }

  // Example — add a fifth menu like this:
  // {
  //   name: "New Business Name",
  //   description: "Short optional description.",
  //   url: "https://example.perfectview648.workers.dev/",
  //   image: "/assets/new-business.webp"
  // }
];

/**
 * Builds one card element for a menu entry.
 * If the image fails to load (e.g. the real screenshot hasn't been
 * added to /assets yet), the media area falls back to a clearly
 * labeled placeholder instead of showing a broken image icon.
 */
function createMenuCard(menu) {
  const card = document.createElement("a");
  card.className = "menu-card";
  card.href = menu.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", `View the ${menu.name} digital menu (opens in a new tab)`);

  const media = document.createElement("div");
  media.className = "menu-card-media";

  const img = document.createElement("img");
  img.src = menu.image;
  img.alt = `${menu.name} digital menu preview`;
  img.loading = "lazy";
  img.decoding = "async";
  img.onerror = () => {
    media.classList.add("is-placeholder");
    media.innerHTML = `<span class="placeholder-label">Preview image coming soon<br>(${menu.image})</span>`;
  };
  media.appendChild(img);

  const body = document.createElement("div");
  body.className = "menu-card-body";
  body.innerHTML = `
    <p class="menu-card-eyebrow">Digital Menu</p>
    <h3 class="menu-card-name">${menu.name}</h3>
    ${menu.description ? `<p class="menu-card-desc">${menu.description}</p>` : ""}
    <div class="menu-card-cta">
      <span class="menu-card-cta-label">View Menu</span>
      <span class="menu-card-cta-arrow" aria-hidden="true">&rarr;</span>
    </div>
  `;

  card.appendChild(media);
  card.appendChild(body);
  return card;
}

function renderMenus() {
  const grid = document.getElementById("menus");
  if (!grid) return;
  const fragment = document.createDocumentFragment();
  MENUS.forEach((menu) => fragment.appendChild(createMenuCard(menu)));
  grid.appendChild(fragment);
}

renderMenus();
