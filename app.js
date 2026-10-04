/* ==========================================================================
   KELYSCENT - LOGICA PRINCIPAL DE LA APLICACIÓN
   Catálogo Dinámico, Carrito, Pedidos WhatsApp/Email y Panel de Gestión
   ========================================================================== */

// Catalogo inicial por defecto de Perfumes Árabes Auténticos y Exclusivos
const DEFAULT_PERFUMES = [
  {
    id: "p1",
    name: "Khamrah",
    brand: "Lattafa Perfumes",
    price: 42.99,
    oldPrice: 55.00,
    volume: "100ml - Eau de Parfum",
    category: "Unisex",
    family: "Gourmand",
    badge: "Bestseller",
    isNew: false,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    topNotes: "Canela, Nuez Moscada, Bergamota brillante",
    heartNotes: "Dátiles dulces, Praliné suave, Tuberosa",
    baseNotes: "Vainilla de Madagascar, Haba Tonka, Benjuí, Ámbar cálido, Mirra",
    description: "Una de las fragancias árabes más aclamadas del mundo. Inspirada en la opulencia de los palacios orientales, abre con una canela envolvente y dátiles licorosos sobre un fondo cremoso de vainilla y ámbar. Estela y duración descomunales (12h+ en piel)."
  },
  {
    id: "p2",
    name: "Bade'e Al Oud (Oud for Glory)",
    brand: "Lattafa Perfumes",
    price: 39.90,
    oldPrice: 49.99,
    volume: "100ml - Eau de Parfum",
    category: "Hombre",
    family: "Amaderado",
    badge: "Icono Oud",
    isNew: false,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    topNotes: "Azafrán carmesí, Lavanda francesa, Nuez moscada",
    heartNotes: "Madera de Agar (Oud natural), Pachulí ahumado",
    baseNotes: "Oud oscuro, Almizcle animal, Pachulí terroso",
    description: "La verdadera esencia del lujo árabe. Una interpretación magistral del Oud más prestigioso, complementado con azafrán exótico y lavanda aromática. Un perfume imponente para ocasiones donde quieras dejar huella imborrable."
  },
  {
    id: "p3",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    price: 44.50,
    oldPrice: 59.00,
    volume: "105ml - Eau de Parfum",
    category: "Hombre",
    family: "Cítrico",
    badge: "Bestseller Mundial",
    isNew: false,
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    topNotes: "Limón de Amalfi, Grosella negra, Manzana verde, Bergamota",
    heartNotes: "Abedul ahumado, Jazmín nocturno, Rosa de Taif",
    baseNotes: "Ámbar gris marino, Almizcle, Pachulí, Vainilla",
    description: "El rey indiscutible de los cumplidos. Salida fresca y cítrica que evoluciona rápidamente hacia un corazón ahumado de maderas nobles y ámbar gris. Proyección legendaria que no pasa desapercibida."
  },
  {
    id: "p4",
    name: "Khamrah Qahwa",
    brand: "Lattafa Perfumes",
    price: 46.90,
    oldPrice: 58.00,
    volume: "100ml - Eau de Parfum",
    category: "Unisex",
    family: "Gourmand",
    badge: "✨ Novedad",
    isNew: true,
    rating: 5.0,
    reviewsCount: 47,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    topNotes: "Cardamomo verde, Canela de Ceilán, Jengibre",
    heartNotes: "Café árabe arábica tostado, Praliné, Frutos secos",
    baseNotes: "Café espresso, Vainilla Bourbon, Benjuí, Haba Tonka",
    description: "La esperadísima versión Qahwa (café árabe tradicional). Combina la riqueza gourmand de la canela y dátiles con una dosis embriagadora de café recién tostado y cardamomo. Cálido, adictivo y perfecto para la noche."
  },
  {
    id: "p5",
    name: "Shaghaf Oud",
    brand: "Swiss Arabian",
    price: 48.00,
    oldPrice: 62.00,
    volume: "75ml - Eau de Parfum",
    category: "Unisex",
    family: "Amaderado",
    badge: "Oro Puro",
    isNew: false,
    rating: 4.8,
    reviewsCount: 84,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    topNotes: "Azafrán persa puro",
    heartNotes: "Rosa damascena real, Madera de Oud de Camboya",
    baseNotes: "Vainilla dulce, Praliné dorado, Almizcle sedoso",
    description: "Presentado en un frasco bañado en oro, Shaghaf Oud es una sinfonía de rosas orientales, madera de oud resinosa y dulce praliné. Pura sofisticación oriental que permanece intacta más de 14 horas."
  },
  {
    id: "p6",
    name: "Hareem Al Sultan Gold (CPO)",
    brand: "Khadlaj",
    price: 29.90,
    oldPrice: 38.00,
    volume: "35ml - Concentrated Perfume Oil",
    category: "Aceites",
    family: "Floral",
    badge: "Viral TikTok",
    isNew: true,
    rating: 4.9,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
    topNotes: "Bergamota dulce, Jazmín sambac, Peonía",
    heartNotes: "Piña madura, Ciruela jugosa, Melocotón blanco",
    baseNotes: "Almizcle blanco puro, Sándalo cremoso, Pachulí sutil",
    description: "El aceite perfumado concentrado sin alcohol más famoso de Dubái. Un frasco joya con varilla aplicadora de cristal. Su textura sedosa deja en la piel un aroma embriagador a frutas exóticas, flores blancas y sándalo."
  },
  {
    id: "p7",
    name: "9 PM",
    brand: "Afnan",
    price: 38.50,
    oldPrice: 48.00,
    volume: "100ml - Eau de Parfum",
    category: "Hombre",
    family: "Dulce",
    badge: "Bestseller",
    isNew: false,
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
    topNotes: "Manzana silvestre, Canela, Lavanda, Bergamota",
    heartNotes: "Flor de Azahar del naranjo, Lirio de los valles",
    baseNotes: "Vainilla cremosa, Haba tonka, Ámbar gris, Pachulí",
    description: "La fragancia nocturna definitiva. Juvenil, dulce, magnética y con un encanto irresistible. Combina notas crujientes de manzana con canela y una base de vainilla cálida que enamora a cualquiera."
  },
  {
    id: "p8",
    name: "Yara (Pink)",
    brand: "Lattafa Perfumes",
    price: 34.90,
    oldPrice: 44.00,
    volume: "100ml - Eau de Parfum",
    category: "Mujer",
    family: "Dulce",
    badge: "Favorito Femenino",
    isNew: false,
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80",
    topNotes: "Heliotropo, Orquídea salvaje, Mandarina fresca",
    heartNotes: "Acorde gourmand de frutas tropicales, Malvavisco",
    baseNotes: "Vainilla suave, Sándalo, Almizcle esponjoso",
    description: "Una caricia dulce y femenina. Famoso por su aroma a batido de fresas cremoso con orquídeas y vainilla suave. Extremadamente adictivo, delicado y duradero para uso diario o citas especiales."
  }
];

// Presets de imágenes de lujo para que el usuario elija fácilmente al añadir un perfume
const PRESET_IMAGES = [
  { label: "Frasco Dorado Sultán", url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80" },
  { label: "Frasco Negro & Oro Imperial", url: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80" },
  { label: "Ámbar Real & Cristal", url: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80" },
  { label: "Noche de Dubái", url: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80" },
  { label: "Joya Oriental Oro", url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80" },
  { label: "Aceite Attar Místico", url: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80" },
  { label: "Elegancia Noir", url: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80" },
  { label: "Sándalo & Flores", url: "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80" }
];

// Estado de la Aplicación
let perfumes = [];
let cart = [];
let orders = [];
let settings = {
  storeName: "KELYSCENT",
  sellerPhone: "34612345678",
  sellerEmail: "pedidos@kelyscent.es",
  freeShippingThreshold: 50.00,
  shippingCost: 4.95,
  currency: "€",
  promoDiscount: 0.10 // 10% con código KELY10 o SULTAN10
};

let currentFilter = "Todos";
let currentFamily = "Todas";
let currentSearch = "";
let currentSort = "featured";
let appliedDiscount = 0; // valor en porcentaje (ej. 0.10)

// ==========================================================================
// INICIALIZACIÓN Y PERSISTENCIA (LOCALSTORAGE)
// ==========================================================================
function initApp() {
  loadSettings();
  loadPerfumes();
  loadCart();
  loadOrders();

  // Detectar término de búsqueda si el cliente viene desde la página 404
  const pendingQuery = sessionStorage.getItem("kelyscent_search_query") || sessionStorage.getItem("alsultan_search_query");
  if (pendingQuery) {
    sessionStorage.removeItem("kelyscent_search_query");
    sessionStorage.removeItem("alsultan_search_query");
    currentSearch = pendingQuery;
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.value = pendingQuery;
    }
  }

  renderCatalog();
  renderNewArrivalsCarousel();
  updateCartUI();
  updateContactLinks();

  setupEventListeners();
}

function loadSettings() {
  const saved = localStorage.getItem("alSultan_settings");
  if (saved) {
    try {
      settings = { ...settings, ...JSON.parse(saved) };
      // Actualizar a KELYSCENT si aún tenía el nombre provisional anterior
      if (!settings.storeName || settings.storeName === "AL-SULTAN PARFUMS") {
        settings.storeName = "KELYSCENT";
        saveSettings();
      }
    } catch (e) {
      console.error("Error cargando configuración:", e);
    }
  }
}

function saveSettings() {
  localStorage.setItem("alSultan_settings", JSON.stringify(settings));
  updateContactLinks();
}

function loadPerfumes() {
  const saved = localStorage.getItem("alSultan_perfumes");
  if (saved) {
    try {
      perfumes = JSON.parse(saved);
    } catch (e) {
      console.error("Error cargando perfumes guardados:", e);
      perfumes = [...DEFAULT_PERFUMES];
    }
  } else {
    perfumes = [...DEFAULT_PERFUMES];
    savePerfumes();
  }
}

function savePerfumes() {
  localStorage.setItem("alSultan_perfumes", JSON.stringify(perfumes));
}

function loadCart() {
  const saved = localStorage.getItem("alSultan_cart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch (e) {
      cart = [];
    }
  }
}

function saveCart() {
  localStorage.setItem("alSultan_cart", JSON.stringify(cart));
}

function loadOrders() {
  const saved = localStorage.getItem("alSultan_orders");
  if (saved) {
    try {
      orders = JSON.parse(saved);
    } catch (e) {
      orders = [];
    }
  }
}

function saveOrders() {
  localStorage.setItem("alSultan_orders", JSON.stringify(orders));
}

// ==========================================================================
// ACTUALIZACIÓN DE ENLACES DE CONTACTO (DINÁMICOS)
// ==========================================================================
function updateContactLinks() {
  // Teléfono
  const phoneFormatted = formatPhoneNumber(settings.sellerPhone);
  const phoneElements = document.querySelectorAll(".contact-phone-link");
  phoneElements.forEach(el => {
    el.href = `tel:+${settings.sellerPhone.replace(/\D/g, '')}`;
    el.textContent = phoneFormatted;
  });

  // WhatsApp
  const cleanPhone = settings.sellerPhone.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("¡Hola! Me gustaría información sobre sus perfumes árabes.")}`;
  const waElements = document.querySelectorAll(".contact-wa-link");
  waElements.forEach(el => {
    el.href = waUrl;
  });

  // Email
  const emailElements = document.querySelectorAll(".contact-email-link");
  emailElements.forEach(el => {
    el.href = `mailto:${settings.sellerEmail}?subject=${encodeURIComponent("Consulta sobre Perfumes Árabes")}`;
    el.textContent = settings.sellerEmail;
  });

  // Nombre de la tienda
  const storeNameEls = document.querySelectorAll(".store-name-text");
  storeNameEls.forEach(el => el.textContent = settings.storeName);
}

function formatPhoneNumber(num) {
  const digits = num.replace(/\D/g, '');
  if (digits.startsWith("34") && digits.length === 11) {
    return `+34 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return `+${digits}`;
}

// ==========================================================================
// RENDERIZADO DEL CATÁLOGO Y NOVEDADES
// ==========================================================================
function renderCatalog() {
  const container = document.getElementById("perfumesGrid");
  const countBadge = document.getElementById("catalogProductCount");
  if (!container) return;

  // Filtrado
  let filtered = perfumes.filter(item => {
    // Categoría
    if (currentFilter !== "Todos" && currentFilter !== "Novedades") {
      if (item.category !== currentFilter) return false;
    }
    if (currentFilter === "Novedades" && !item.isNew) {
      return false;
    }

    // Familia Olfativa
    if (currentFamily !== "Todas") {
      if (item.family !== currentFamily) return false;
    }

    // Búsqueda
    if (currentSearch.trim() !== "") {
      const q = currentSearch.toLowerCase();
      const match = item.name.toLowerCase().includes(q) ||
                    item.brand.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.topNotes.toLowerCase().includes(q) ||
                    item.heartNotes.toLowerCase().includes(q) ||
                    item.baseNotes.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  // Ordenación
  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "newest") {
    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} perfume${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-gray-400">
        <i class="fa-solid fa-bottle-droplet text-5xl mb-4 text-[#D4AF37] opacity-40"></i>
        <h3 class="text-xl font-bold font-cinzel text-white mb-2">No se encontraron perfumes</h3>
        <p class="text-sm max-w-md mx-auto mb-6">Prueba a cambiar los filtros o los términos de búsqueda para encontrar tu fragancia ideal.</p>
        <button onclick="resetFilters()" class="btn-gold-outline px-6 py-2.5 rounded-full text-sm font-semibold">
          Restablecer Filtros
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="card-luxury flex flex-col group overflow-hidden">
      <!-- Imagen y Badges -->
      <div class="relative overflow-hidden bg-black/40 h-72 cursor-pointer" onclick="openQuickView('${item.id}')">
        <img src="${item.image}" alt="${item.name}" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'"
        />
        
        <!-- Badges Superiores -->
        <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          ${item.badge ? `<span class="badge-gold">${item.badge}</span>` : ''}
          ${item.isNew ? `<span class="badge-novedad text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">✨ Novedad</span>` : ''}
        </div>

        <!-- Botón Vista Rápida flotante -->
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span class="btn-gold-outline px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <i class="fa-solid fa-eye"></i> Vista Rápida & Pirámide
          </span>
        </div>

        <span class="absolute bottom-2 right-2 bg-black/75 backdrop-blur-md text-gray-300 text-[11px] font-medium px-2 py-0.5 rounded border border-white/10">
          ${item.volume || '100ml EDP'}
        </span>
      </div>

      <!-- Contenido de la Tarjeta -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- Marca y Categoría -->
          <div class="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span class="uppercase tracking-widest text-[#D4AF37] font-semibold">${item.brand}</span>
            <span class="bg-white/5 px-2 py-0.5 rounded text-[11px]">${item.category}</span>
          </div>

          <!-- Nombre -->
          <h3 class="font-cinzel text-lg font-bold text-white group-hover:text-[#F9E79F] transition-colors leading-snug cursor-pointer mb-2" onclick="openQuickView('${item.id}')">
            ${item.name}
          </h3>

          <!-- Notas destacadas -->
          <div class="text-xs text-gray-400 line-clamp-2 mb-3">
            <span class="text-gray-300 font-medium">Notas clave:</span> ${item.topNotes || item.heartNotes}
          </div>
        </div>

        <!-- Precios y Botones de Pedido / Contacto -->
        <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <div class="text-xs text-gray-500 line-through">${item.oldPrice ? `${item.oldPrice.toFixed(2)}${settings.currency}` : ''}</div>
            <div class="text-xl font-black text-white font-cinzel">
              <span class="text-[#D4AF37]">${item.price.toFixed(2)}</span>${settings.currency}
            </div>
          </div>

          <div class="flex items-center gap-1.5">
            <!-- Pedir directamente por WhatsApp -->
            <button onclick="directWhatsAppOrder('${item.id}')" 
              class="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-emerald-950/40"
              title="Pedir este perfume por WhatsApp">
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>Pedir</span>
            </button>

            <!-- Añadir a mi selección -->
            <button onclick="addToCart('${item.id}')" 
              class="bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white p-2.5 rounded-xl text-xs transition-all"
              title="Añadir a mi selección para consultar varios">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderNewArrivalsCarousel() {
  const container = document.getElementById("newArrivalsList");
  if (!container) return;

  const newItems = perfumes.filter(p => p.isNew || p.badge?.includes("Novedad")).slice(0, 4);
  const itemsToDisplay = newItems.length > 0 ? newItems : perfumes.slice(0, 4);

  container.innerHTML = itemsToDisplay.map(item => `
    <div class="card-luxury p-4 flex gap-4 items-center group cursor-pointer" onclick="openQuickView('${item.id}')">
      <div class="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-black/40 relative">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div class="flex-1 min-w-0">
        <span class="text-[10px] text-[#D4AF37] uppercase font-bold tracking-wider">${item.brand}</span>
        <h4 class="font-cinzel text-white font-bold text-sm truncate group-hover:text-[#F9E79F] transition-colors">${item.name}</h4>
        <p class="text-xs text-gray-400 truncate mb-1">${item.family} • ${item.category}</p>
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-[#D4AF37]">${item.price.toFixed(2)}${settings.currency}</span>
          <button onclick="event.stopPropagation(); directWhatsAppOrder('${item.id}')" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-1 transition-colors">
            <i class="fa-brands fa-whatsapp"></i>
            <span>Pedir</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function resetFilters() {
  currentFilter = "Todos";
  currentFamily = "Todas";
  currentSearch = "";
  currentSort = "featured";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === "Todos");
  });

  document.querySelectorAll(".family-pill").forEach(pill => {
    pill.classList.toggle("bg-[#D4AF37]", pill.dataset.family === "Todas");
    pill.classList.toggle("text-black", pill.dataset.family === "Todas");
  });

  renderCatalog();
}

// ==========================================================================
// VISTA RÁPIDA (MODAL) Y PIRÁMIDE OLFATIVA
// ==========================================================================
function openQuickView(id) {
  const item = perfumes.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById("quickViewModal");
  const modalContent = document.getElementById("quickViewContent");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <!-- Imagen de Alta Calidad -->
      <div class="relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl">
        <img src="${item.image}" alt="${item.name}" class="w-full h-96 object-cover object-center" />
        <div class="absolute top-4 left-4 flex flex-col gap-2">
          ${item.badge ? `<span class="badge-gold">${item.badge}</span>` : ''}
          ${item.isNew ? `<span class="badge-novedad text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">✨ Novedad</span>` : ''}
        </div>
        <div class="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs flex justify-between items-center text-gray-300">
          <span><i class="fa-solid fa-droplet text-[#D4AF37] mr-1"></i> ${item.volume || '100ml Eau de Parfum'}</span>
          <span><i class="fa-solid fa-stopwatch text-[#D4AF37] mr-1"></i> Duración 12h+</span>
        </div>
      </div>

      <!-- Información y Pirámide Olfativa -->
      <div class="space-y-6">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">${item.brand}</span>
          <h2 class="text-2xl md:text-3xl font-cinzel font-bold text-white mt-1">${item.name}</h2>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-2xl font-bold font-cinzel text-[#F9E79F]">${item.price.toFixed(2)}${settings.currency}</span>
            ${item.oldPrice ? `<span class="text-sm text-gray-500 line-through">${item.oldPrice.toFixed(2)}${settings.currency}</span>` : ''}
            <span class="bg-white/10 text-gray-300 text-xs px-2.5 py-0.5 rounded-full">${item.category}</span>
          </div>
        </div>

        <p class="text-sm text-gray-300 leading-relaxed">${item.description}</p>

        <!-- Pirámide Olfativa Árabe -->
        <div class="bg-black/50 p-4 rounded-xl border border-[#D4AF37]/30 space-y-3">
          <h4 class="text-xs uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-2">
            <i class="fa-solid fa-layer-group"></i> Pirámide Olfativa Oriental
          </h4>
          
          <div class="pyramid-level">
            <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Notas de Salida (Primeros 15 min):</span>
            <span class="text-xs text-white">${item.topNotes || "Notas aromáticas orientales"}</span>
          </div>

          <div class="pyramid-level">
            <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Notas de Corazón (Cuerpo del perfume):</span>
            <span class="text-xs text-white">${item.heartNotes || "Maderas preciosas y flores exóticas"}</span>
          </div>

          <div class="pyramid-level">
            <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Notas de Fondo (Permanencia en piel):</span>
            <span class="text-xs text-white">${item.baseNotes || "Oud noble, ámbar y vainilla"}</span>
          </div>
        </div>

        <!-- Botones de Contacto para Comprar -->
        <div class="pt-2 flex flex-col sm:flex-row gap-3">
          <button onclick="directWhatsAppOrder('${item.id}')" 
            class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/30 flex-1">
            <i class="fa-brands fa-whatsapp text-lg"></i>
            <span>Pedir por WhatsApp (${item.price.toFixed(2)}${settings.currency})</span>
          </button>
          
          <button onclick="addToCart('${item.id}'); closeQuickView();" 
            class="btn-gold-outline py-3.5 px-5 rounded-xl text-xs flex items-center justify-center gap-2 font-bold">
            <i class="fa-solid fa-plus"></i>
            <span>Añadir a mi Selección</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function directWhatsAppOrder(id) {
  const item = perfumes.find(p => p.id === id);
  if (!item) return;

  const text = `👑 *CONSULTA / COMPRA - ${settings.storeName}* 👑\n\n¡Hola! He visto en vuestro catálogo web el perfume:\n• *${item.name}* (${item.brand})\n• Precio: ${item.price.toFixed(2)}${settings.currency}\n• Formato: ${item.volume}\n\nMe gustaría comprarlo. ¿Cómo coordinamos el pago y envío? ¡Muchas gracias!`;
  const cleanPhone = settings.sellerPhone.replace(/\D/g, '');
  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, "_blank");
}

// ==========================================================================
// CARRITO DE COMPRAS Y CÁLCULOS
// ==========================================================================
function addToCart(id) {
  const perfume = perfumes.find(p => p.id === id);
  if (!perfume) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: perfume.id,
      name: perfume.name,
      brand: perfume.brand,
      price: perfume.price,
      image: perfume.image,
      volume: perfume.volume,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✨ ¡${perfume.name} añadido a tu carrito!`);
}

function updateCartQuantity(id, delta) {
  const index = cart.findIndex(item => item.id === id);
  if (index === -1) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  showToast("Perfume eliminado del carrito");
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function getCartCalculations() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return {
    subtotal,
    itemsCount: cart.reduce((sum, item) => sum + item.quantity, 0)
  };
}

function updateCartUI() {
  const calcs = getCartCalculations();

  // Badges contadores
  const countEls = document.querySelectorAll(".cart-count-badge");
  countEls.forEach(el => {
    el.textContent = calcs.itemsCount;
    el.style.display = calcs.itemsCount > 0 ? "flex" : "none";
  });

  // Lista en el Drawer
  const container = document.getElementById("cartItemsList");
  const emptyState = document.getElementById("cartEmptyState");
  const cartSummary = document.getElementById("cartSummary");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    if (cartSummary) cartSummary.classList.add("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  if (cartSummary) cartSummary.classList.remove("hidden");

  container.innerHTML = cart.map(item => `
    <div class="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/5 items-center">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover rounded-lg bg-black/40" />
      <div class="flex-1 min-w-0">
        <span class="text-[10px] text-[#D4AF37] uppercase font-bold tracking-wider">${item.brand}</span>
        <h4 class="font-cinzel text-white font-bold text-sm truncate">${item.name}</h4>
        <div class="text-xs text-[#F9E79F] font-bold mt-0.5">${item.price.toFixed(2)}${settings.currency}</div>
        
        <!-- Cantidad -->
        <div class="flex items-center gap-2 mt-2">
          <button onclick="updateCartQuantity('${item.id}', -1)" class="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors">-</button>
          <span class="text-xs font-bold text-white px-1.5">${item.quantity}</span>
          <button onclick="updateCartQuantity('${item.id}', 1)" class="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors">+</button>
        </div>
      </div>
      <button onclick="removeFromCart('${item.id}')" class="text-gray-400 hover:text-red-400 p-2 transition-colors" title="Eliminar">
        <i class="fa-solid fa-trash-can text-sm"></i>
      </button>
    </div>
  `).join("");

  // Actualizar total estimado en drawer
  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = `${calcs.subtotal.toFixed(2)}${settings.currency}`;
}

function toggleCart(forceOpen) {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (!drawer) return;

  const isOpen = !drawer.classList.contains("translate-x-full");
  const shouldOpen = forceOpen !== undefined ? forceOpen : !isOpen;

  if (shouldOpen) {
    drawer.classList.remove("translate-x-full");
    if (backdrop) backdrop.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.add("translate-x-full");
    if (backdrop) backdrop.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// SOLICITUD DE PEDIDO / CONTACTO DIRECTO (SIN PAGO EN LA WEB)
// ==========================================================================
function sendSelectionViaWhatsApp() {
  if (cart.length === 0) {
    showToast("Tu selección está vacía");
    return;
  }

  const calcs = getCartCalculations();
  let msg = `👑 *CONSULTA DE COMPRA - ${settings.storeName}* 👑\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `¡Hola! He seleccionado estas fragancias en vuestro catálogo web y me gustaría comprarlas:\n\n`;

  cart.forEach(item => {
    msg += `• *${item.quantity}x ${item.name}* (${item.brand}) - ${(item.price * item.quantity).toFixed(2)}${settings.currency}\n`;
  });

  msg += `\n💰 *Total estimado:* ${calcs.subtotal.toFixed(2)}${settings.currency}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `¿Tenéis existencias disponibles para enviármelas? ¿Cómo coordinamos el pago y envío? ¡Gracias!`;

  // Registrar en pedidos recibidos para el panel de administración
  const orderId = "PED-" + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateStr = now.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  orders.unshift({
    id: orderId,
    date: dateStr,
    timestamp: now.getTime(),
    customer: { name: "Cliente WhatsApp", phone: "Por chat", address: "A coordinar por chat", city: "España" },
    paymentMethod: "A convenir por WhatsApp",
    items: [...cart],
    calculations: { total: calcs.subtotal, subtotal: calcs.subtotal },
    status: "Pendiente"
  });
  saveOrders();

  const cleanPhone = settings.sellerPhone.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
  showToast("✨ Abriendo WhatsApp con tu selección...");
}

function sendSelectionViaEmail() {
  if (cart.length === 0) {
    showToast("Tu selección está vacía");
    return;
  }

  const calcs = getCartCalculations();
  let body = `¡Hola! Me interesan las siguientes fragancias de vuestro catálogo web:\n\n`;
  cart.forEach(item => {
    body += `• ${item.quantity}x ${item.name} (${item.brand}) - ${(item.price * item.quantity).toFixed(2)}${settings.currency}\n`;
  });
  body += `\nTotal estimado: ${calcs.subtotal.toFixed(2)}${settings.currency}\n\n`;
  body += `Por favor, indicadme los pasos y métodos para formalizar el pedido y la entrega.\n¡Muchas gracias!`;

  const subject = `Consulta de Compra - Selección de ${cart.length} perfume(s)`;
  const mailUrl = `mailto:${settings.sellerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailUrl;
  showToast("📨 Abriendo tu correo con tu selección...");
}

// ==========================================================================
// FORMULARIO DE CONTACTO RÁPIDO
// ==========================================================================
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contactName")?.value;
  const email = document.getElementById("contactEmail")?.value;
  const phone = document.getElementById("contactPhone")?.value;
  const message = document.getElementById("contactMessage")?.value;

  const subject = `Consulta desde la Web: ${name}`;
  const body = `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`;

  const mailUrl = `mailto:${settings.sellerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailUrl;

  showToast("📨 Abriendo tu gestor de correo para enviar la consulta...");
  e.target.reset();
}



// ==========================================================================
// TOAST NOTIFICATIONS & LISTENERS
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMessage");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

function setupEventListeners() {
  // Filtros de Categoría
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active", "border-[#D4AF37]", "text-[#D4AF37]"));
      btn.classList.add("active", "border-[#D4AF37]", "text-[#D4AF37]");
      currentFilter = btn.dataset.category;
      renderCatalog();
    });
  });

  // Filtros de Familia Olfativa
  document.querySelectorAll(".family-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".family-pill").forEach(p => {
        p.classList.remove("bg-[#D4AF37]", "text-black");
        p.classList.add("bg-white/5", "text-gray-300");
      });
      pill.classList.remove("bg-white/5", "text-gray-300");
      pill.classList.add("bg-[#D4AF37]", "text-black");
      currentFamily = pill.dataset.family;
      renderCatalog();
    });
  });

  // Barra de búsqueda
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderCatalog();
    });
  }

  // Selector de ordenación
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Escuchar cambios desde el panel de administración en tiempo real
  window.addEventListener("storage", (e) => {
    if (e.key === "alSultan_perfumes") {
      loadPerfumes();
      renderCatalog();
      renderNewArrivalsCarousel();
    }
    if (e.key === "alSultan_settings") {
      loadSettings();
      updateContactLinks();
      updateCartUI();
    }
  });
}

// Iniciar al cargar el DOM
document.addEventListener("DOMContentLoaded", initApp);
