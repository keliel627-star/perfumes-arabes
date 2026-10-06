/* ==========================================================================
   KELYSCENT - LOGICA PRINCIPAL DE LA APLICACIÓN
   Catálogo Dinámico, Carrito, Pedidos WhatsApp/Email y Panel de Gestión
   ========================================================================== */

// Catalogo inicial por defecto de Perfumes Árabes Auténticos y Exclusivos
const DEFAULT_PERFUMES = [
    {
        "id":  "p_1791228202074",
        "name":  "Asad",
        "brand":  "Lattafa",
        "price":  20,
        "oldPrice":  25,
        "volume":  "100ml - Eau de Parfum",
        "category":  "Hombre",
        "family":  "Amaderado",
        "badge":  "âœ¨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/asad.webp",
        "topNotes":  "Pimienta negra, tabaco, piÃ±a",
        "heartNotes":  "PachulÃ­, cafÃ©, iris",
        "baseNotes":  "Vainilla, Ã¡mbar, madera seca, benjuÃ­, lÃ¡dano",
        "description":  "Asad de Lattafa Perfumes es una fragancia de la familia olfativa Oriental para Hombres. Asad se lanzÃ³ en 2021. Las Notas de Salida son pimienta negra, tabaco y piÃ±a; las Notas de CorazÃ³n son pachulÃ­, cafÃ© y iris; las Notas de Fondo son vainilla, Ã¡mbar, Madera seca, benjuÃ­ y lÃ¡dano."
    },
    {
        "id":  "p_1791227917997",
        "name":  "9pm Rebel",
        "brand":  "Afnan",
        "price":  35,
        "oldPrice":  40,
        "volume":  "100ml - Eau de Parfum",
        "category":  "Unisex",
        "family":  "Gourmand",
        "badge":  "âœ¨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/9pm-rebel.webp",
        "topNotes":  "PiÃ±a, manzana Granny Smith, mandarina",
        "heartNotes":  "Cedro, musgo de roble, vainilla",
        "baseNotes":  "Caramelo, maderas secas, Ã¡mbar gris, almizcle",
        "description":  "9 PM Rebel de Afnan es una fragancia de la familia olfativa Ãmbar Frutal Amaderada para Hombres y Mujeres. Esta fragrancia es nueva. 9 PM Rebel se lanzÃ³ en 2024. Las Notas de Salida son piÃ±a, manzana Granny Smith y mandarina; las Notas de CorazÃ³n son cedro, musgo de roble y vainilla; las Notas de Fondo son caramelo, maderas secas, Ã¡mbar gris y almizcle."
    },
    {
        "id":  "p_1791142104277",
        "name":  "Hawas Fire",
        "brand":  "Rasasi",
        "price":  35,
        "oldPrice":  40,
        "volume":  "100ml-Eau  de Parfum",
        "category":  "Unisex",
        "family":  "Floral",
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/hawas-fire.jpg",
        "topNotes":  "esclarea",
        "heartNotes":  "Notas marinas jazmín egipcio",
        "baseNotes":  "ámbar Notas minerales  ámbar gris",
        "description":  "Hawas Fire de Rasasi es una fragancia de la familia olfativa Aromática Acuática para Hombres y Mujeres. Esta fragrancia es nueva. Hawas Fire se lanzó en 2025. La Nota de Salida es esclarea; las Notas de Corazón son Notas marinas y jazmín egipcio; las Notas de Fondo son ámbar, Notas minerales y ámbar gris."
    },
    {
        "id":  "p_1791141926566",
        "name":  "Yara Tous",
        "brand":  "Lattafa",
        "price":  20,
        "oldPrice":  25,
        "volume":  "100ml-Eau  de Parfum",
        "category":  "Mujer",
        "family":  "Dulce",
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/yara-tous.jpg",
        "topNotes":  "mango  coco maracuyá (fruta de la pasión)",
        "heartNotes":  "jazmín  flor de azahar del naranjo heliotropo",
        "baseNotes":  "vainilla almizcle  cachemira",
        "description":  "Yara Tous de Lattafa Perfumes es una fragancia de la familia olfativa para Mujeres. Yara Tous se lanzó en 2023. Las Notas de Salida son mango, coco y maracuyá (fruta de la pasión); las Notas de Corazón son jazmín, flor de azahar del naranjo y heliotropo; las Notas de Fondo son vainilla, almizcle y cachemira."
    },
    {
        "id":  "p_1791141720469",
        "name":  "Khamrah Dukhan 100",
        "brand":  "Lattafa",
        "price":  30,
        "oldPrice":  35,
        "volume":  "100ml-Eau  de Parfum",
        "category":  "Hombre",
        "family":  "Amaderado",
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/khamrah-dukhan-100.jpg",
        "topNotes":  "especias pimienta de Jamaica  mandarina",
        "heartNotes":  "incienso ládano  flor de azahar del naranjo  pachulí",
        "baseNotes":  "praliné tabaco  ámbar  haba tonka benjuí",
        "description":  "Khamrah Dukhan de Lattafa Perfumes es una fragancia de la familia olfativa Oriental para Hombres. Esta fragrancia es nueva. Khamrah Dukhan se lanzó en 2025. Las Notas de Salida son especias, pimienta de Jamaica y mandarina; las Notas de Corazón son incienso, ládano, flor de azahar del naranjo y pachulí; las Notas de Fondo son praliné, tabaco, ámbar, haba tonka y benjuí."
    },
    {
        "id":  "p_1791141568942",
        "name":  "Asad  Elixir",
        "brand":  "Lattafa",
        "price":  25,
        "oldPrice":  30,
        "volume":  "100ml-Eau  de Parfum",
        "category":  "Hombre",
        "family":  "Amaderado",
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/asad-elixir.jpg",
        "topNotes":  "pimienta rosa azafrán  toronja (pomelo)",
        "heartNotes":  "tabaco  vainilla cedro",
        "baseNotes":  "ámbar ligero Incienso  pachulí  cachemira",
        "description":  "Asad Elixir de Lattafa Perfumes es una fragancia de la familia olfativa Oriental para Hombres. Esta fragrancia es nueva. Asad Elixir se lanzó en 2025. Las Notas de Salida son pimienta rosa, azafrán y toronja (pomelo); las Notas de Corazón son tabaco, vainilla y cedro; las Notas de Fondo son ámbar ligero, Incienso, pachulí y cachemira."
    },
    {
        "id":  "p_1791141409375",
        "name":  "Odyssey  Mandarin sky",
        "brand":  "Armaf",
        "price":  25,
        "oldPrice":  35,
        "volume":  "100ml-Eau  de Parfum",
        "category":  "Hombre",
        "family":  "Cítrico",
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/odyssey-mandarin-sky.jpg",
        "topNotes":  "mandarina naranja  azafrán  salvia",
        "heartNotes":  "caramelo haba tonka  cempasúchil (tagete, clavelón)",
        "baseNotes":  "ambroxan  cedro vetiver",
        "description":  "Odyssey Mandarin Sky de Armaf es una fragancia de la familia olfativa para Hombres. Odyssey Mandarin Sky se lanzó en 2023. Las Notas de Salida son mandarina, naranja, azafrán y salvia; las Notas de Corazón son caramelo, haba tonka y cempasúchil (tagete, clavelón); las Notas de Fondo son ambroxan, cedro y vetiver."
    },
    {
        "id":  "p_1791133243785",
        "name":  "Asad Bourbon",
        "brand":  "Lattafa",
        "price":  25,
        "oldPrice":  30,
        "volume":  "100ml-Eau  de Parfum",
        "category":  "Hombre",
        "family":  "Amaderado",
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/asad-bourbon.jpg",
        "topNotes":  "ciruela Mirabel pimienta rosa  lavanda",
        "heartNotes":  "cacao nuez moscada  Davana",
        "baseNotes":  "vainilla Bourbon ámbar   vetiver",
        "description":  "Asad Bourbon de Lattafa Perfumes es una fragancia masculina perteneciente a la familia olfativa Oriental Especiada / Gourmand Amaderada. Es una variación cálida y seductora dentro de la popular línea Asad, alejándose del perfil aromático estilo Dior Sauvage Elixir del original para apostar por un carácter más dulce, achocolatado y licoroso"
    },
    {
        "id":  "p_1791133028733",
        "name":  "VULCAN  SABLE",
        "brand":  "French Aveneu",
        "price":  30,
        "oldPrice":  35,
        "volume":  "100ml-Eau  de Parfum",
        "category":  "Hombre",
        "family":  "Amaderado",
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/vulcan-sable.jpg",
        "topNotes":  "whisky  naranja  mandarina cilantro",
        "heartNotes":  "haba tonka  cachemira  styrax   anís",
        "baseNotes":  "vainilla benjuí  pachulí",
        "description":  "Un aroma de lujo para hombres con carácter\nVulcan Sable es una fragancia imponente que destila elegancia y madurez. No es un perfume para quienes buscan algo sutil o juvenil; es una declaración de intenciones para quien tiene una personalidad definida."
    },
    {
        "id":  "p1",
        "name":  "Khamrah",
        "brand":  "Lattafa Perfumes",
        "price":  30,
        "oldPrice":  40,
        "volume":  "100ml - Eau de Parfum",
        "category":  "Unisex",
        "family":  "Gourmand",
        "badge":  "Bestseller",
        "isNew":  false,
        "rating":  4.9,
        "reviewsCount":  142,
        "image":  "images/khamrah.jpg",
        "topNotes":  "Canela, Nuez Moscada, Bergamota brillante",
        "heartNotes":  "Dátiles dulces, Praliné suave, Tuberosa",
        "baseNotes":  "Vainilla de Madagascar, Haba Tonka, Benjuí, Ámbar cálido, Mirra",
        "description":  "Una de las fragancias árabes más aclamadas del mundo. Inspirada en la opulencia de los palacios orientales, abre con una canela envolvente y dátiles licorosos sobre un fondo cremoso de vainilla y ámbar. Estela y duración descomunales (12h+ en piel)."
    },
    {
        "id":  "p7",
        "name":  "9 PM",
        "brand":  "Afnan",
        "price":  30,
        "oldPrice":  35,
        "volume":  "100ml - Eau de Parfum",
        "category":  "Hombre",
        "family":  "Dulce",
        "badge":  "Bestseller",
        "isNew":  false,
        "rating":  4.9,
        "reviewsCount":  165,
        "image":  "images/9-pm.jpg",
        "topNotes":  "Manzana silvestre, Canela, Lavanda, Bergamota",
        "heartNotes":  "Flor de Azahar del naranjo, Lirio de los valles",
        "baseNotes":  "Vainilla cremosa, Haba tonka, Ámbar gris, Pachulí",
        "description":  "La fragancia nocturna definitiva. Juvenil, dulce, magnética y con un encanto irresistible. Combina notas crujientes de manzana con canela y una base de vainilla cálida que enamora a cualquiera."
    },
    {
        "id":  "p8",
        "name":  "Yara (Pink)",
        "brand":  "Lattafa Perfumes",
        "price":  25,
        "oldPrice":  30,
        "volume":  "100ml - Eau de Parfum",
        "category":  "Mujer",
        "family":  "Dulce",
        "badge":  "Favorito Femenino",
        "isNew":  false,
        "rating":  4.8,
        "reviewsCount":  195,
        "image":  "images/yara-pink.jpg",
        "topNotes":  "Heliotropo, Orquídea salvaje, Mandarina fresca",
        "heartNotes":  "Acorde gourmand de frutas tropicales, Malvavisco",
        "baseNotes":  "Vainilla suave, Sándalo, Almizcle esponjoso",
        "description":  "Una caricia dulce y femenina. Famoso por su aroma a batido de fresas cremoso con orquídeas y vainilla suave. Extremadamente adictivo, delicado y duradero para uso diario o citas especiales."
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
  promoDiscount: 0.10, // 10% con código KELY10 o SULTAN10
  heroImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
  heroBadge: "Edición de Colección",
  heroTitle: "Khamrah & Oud Royale",
  heroVolume: "100ml Eau de Parfum",
  heroDesc: "Notas de canela especiada, dátiles árabes y vainilla de Madagascar.",
  storyImage: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
  storyTitle: "Maceración Tradicional",
  storyDesc: "Aceites concentrados destilados gota a gota para lograr la máxima longevidad en piel."
};

let currentFilter = "Todos";
let currentFamily = "Todas";
let currentSearch = "";
let currentSort = "featured";
let appliedDiscount = 0; // valor en porcentaje (ej. 0.10)

// Canal de sincronización en tiempo real entre pestañas (Admin <-> Tienda Clientes)
const syncChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('kelyscent_sync') : null;

if (syncChannel) {
  syncChannel.onmessage = (event) => {
    if (event.data?.type === 'perfumes') {
      loadPerfumes();
      renderCatalog();
      renderNewArrivalsCarousel();
    } else if (event.data?.type === 'settings') {
      loadSettings();
      updateContactLinks();
      updateCartUI();
    }
  };
}

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
  // Sincronizar siempre con settings.json del servidor para tener banners actualizados
  syncServerSettings();
}

async function syncServerSettings() {
  try {
    const res = await fetch(`settings.json?v=${Date.now()}`);
    if (res.ok) {
      const serverSettings = await res.json();
      if (serverSettings && typeof serverSettings === 'object') {
        const isAdmin = sessionStorage.getItem("alSultan_admin_auth") === "true";
        if (!isAdmin) {
          settings = { ...settings, ...serverSettings };
          localStorage.setItem("alSultan_settings", JSON.stringify(settings));
          updateContactLinks();
          updateBannersUI();
        }
      }
    }
  } catch (e) {
    // Modo offline
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
      // Fusión inteligente: asegurar que todos los perfumes oficiales de DEFAULT_PERFUMES estén presentes
      DEFAULT_PERFUMES.forEach(def => {
        if (!perfumes.some(p => p.id === def.id || p.name.trim().toLowerCase() === def.name.trim().toLowerCase())) {
          perfumes.unshift(def);
        }
      });
      localStorage.setItem("alSultan_perfumes", JSON.stringify(perfumes));
    } catch (e) {
      console.error("Error cargando perfumes guardados:", e);
      perfumes = [...DEFAULT_PERFUMES];
    }
  } else {
    perfumes = [...DEFAULT_PERFUMES];
    localStorage.setItem("alSultan_perfumes", JSON.stringify(perfumes));
  }

  // Sincronizar SIEMPRE con el catálogo oficial del servidor (perfumes.json)
  syncWithServerCatalog();
}

async function syncWithServerCatalog() {
  try {
    const res = await fetch(`perfumes.json?v=${Date.now()}`);
    if (res.ok) {
      const serverData = await res.json();
      if (Array.isArray(serverData) && serverData.length > 0) {
        // Fusión limpia: actualizar o incorporar productos del servidor sin eliminar los actuales
        serverData.forEach(serverItem => {
          const idx = perfumes.findIndex(p => p.id === serverItem.id || p.name.trim().toLowerCase() === serverItem.name.trim().toLowerCase());
          if (idx >= 0) {
            perfumes[idx] = { ...perfumes[idx], ...serverItem };
          } else {
            perfumes.unshift(serverItem);
          }
        });
        localStorage.setItem("alSultan_perfumes", JSON.stringify(perfumes));
        renderCatalog();
        renderNewArrivalsCarousel();
      }
    }
  } catch (err) {
    // Modo offline o red lenta: continúa con la versión en memoria
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

  const waEncargoUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("¡Hola! Estoy buscando un perfume árabe que no tienes en la web, ¿podrías conseguírmelo?")}`;
  document.querySelectorAll(".contact-encargo-link").forEach(el => {
    el.href = waEncargoUrl;
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

  // Actualizar fotos y cartelas destacadas de la portada e historia
  updateBannersUI();
}

function updateBannersUI() {
  const heroImg = document.getElementById("heroImageEl");
  const heroBadge = document.getElementById("heroCardBadge");
  const heroTitle = document.getElementById("heroCardTitle");
  const heroVolume = document.getElementById("heroCardVolume");
  const heroDesc = document.getElementById("heroCardDesc");

  if (heroImg && settings.heroImage) heroImg.src = settings.heroImage;
  if (heroBadge && settings.heroBadge) heroBadge.textContent = settings.heroBadge;
  if (heroTitle && settings.heroTitle) heroTitle.textContent = settings.heroTitle;
  if (heroVolume && settings.heroVolume) heroVolume.textContent = settings.heroVolume;
  if (heroDesc && settings.heroDesc) heroDesc.textContent = settings.heroDesc;

  const storyImg = document.getElementById("storyImageEl");
  const storyTitle = document.getElementById("storyCardTitle");
  const storyDesc = document.getElementById("storyCardDesc");

  if (storyImg && settings.storyImage) storyImg.src = settings.storyImage;
  if (storyTitle && settings.storyTitle) storyTitle.textContent = settings.storyTitle;
  if (storyDesc && settings.storyDesc) storyDesc.textContent = settings.storyDesc;
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
    const cleanPhone = (settings.sellerPhone || "+34698084329").replace(/\D/g, '');
    const waEncargoMsg = currentSearch 
      ? `Hola! He buscado "${currentSearch}" en la web de Kelyscent y no lo veo, ¿podrías conseguírmelo?`
      : "Hola! Busco un perfume que no veo en la web de Kelyscent, ¿podrías conseguírmelo?";
    const waEncargoUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waEncargoMsg)}`;

    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-cream-400">
        <i class="fa-solid fa-magnifying-glass-location text-5xl mb-4 text-amberwarm-400 opacity-60"></i>
        <h3 class="text-xl font-bold font-cinzel text-cream-100 mb-2">¿No encuentras el perfume que buscas?</h3>
        <p class="text-sm max-w-md mx-auto mb-6 text-cream-400">
          Si necesitas una fragancia que no tengo en la web, puedes contactar conmigo por WhatsApp e intentamos encontrar el perfume que necesites.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <a href="${waEncargoUrl}" target="_blank" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-950">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            Pedir por Encargo en WhatsApp
          </a>
          <button onclick="resetFilters()" class="px-6 py-2.5 rounded-full bg-cocoa-800 border border-cocoa-700 text-cream-300 hover:text-white text-xs font-semibold">
            Restablecer Filtros
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="card-luxury flex flex-col group overflow-hidden text-center">
      <!-- Imagen y Badges Centrados -->
      <div class="relative overflow-hidden bg-cocoa-950/70 h-80 flex items-center justify-center p-4 cursor-pointer" onclick="openQuickView('${item.id}')">
        <img src="${item.image}" alt="${item.name}" 
          class="max-h-full max-w-full object-contain mx-auto transition-transform duration-700 group-hover:scale-108 drop-shadow-xl"
          onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'"
        />
        
        <!-- Badges Superiores -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <div class="flex items-center gap-1.5">
            ${item.badge ? `<span class="badge-gold">${item.badge}</span>` : ''}
            ${item.isNew ? `<span class="badge-novedad">✨ Novedad</span>` : ''}
          </div>
          <span class="badge-family">${item.family || 'Oriental'}</span>
        </div>

        <!-- Botón Vista Rápida flotante -->
        <div class="absolute inset-0 bg-cocoa-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span class="btn-gold-outline px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <i class="fa-solid fa-eye text-amberwarm-400"></i> Ver Notas & Detalles
          </span>
        </div>

        <span class="absolute bottom-2.5 right-3 bg-cocoa-900/80 backdrop-blur-md text-cream-500 text-[10px] font-medium px-2 py-0.5 rounded border border-cocoa-700">
          ${item.volume || '100ml EDP'}
        </span>
      </div>

      <!-- Contenido Centrado de la Tarjeta -->
      <div class="p-6 flex-1 flex flex-col justify-between items-center space-y-3">
        <div class="space-y-1.5 w-full">
          <!-- Marca y Categoría -->
          <div class="flex items-center justify-center gap-2 text-xs text-cream-500">
            <span class="uppercase tracking-widest text-amberwarm-400 font-bold">${item.brand}</span>
            <span class="text-cocoa-700">•</span>
            <span class="bg-cocoa-800 text-cream-400 px-2 py-0.5 rounded-full text-[10px]">${item.category}</span>
          </div>

          <!-- Nombre Centrado -->
          <h3 class="font-cinzel text-xl font-bold text-cream-100 group-hover:text-amberwarm-400 transition-colors leading-snug cursor-pointer pt-1" onclick="openQuickView('${item.id}')">
            ${item.name}
          </h3>

          <!-- Notas destacadas centradas -->
          <div class="text-xs text-cream-500 bg-cocoa-850 px-3 py-1.5 rounded-xl border border-cocoa-800 line-clamp-1 max-w-xs mx-auto">
            <span class="text-cream-300 font-semibold">Notas:</span> ${item.topNotes ? item.topNotes.split(',').slice(0, 2).join(', ') : (item.heartNotes || 'Especias, maderas')}
          </div>
        </div>

        <!-- Precios y Acciones Centradas -->
        <div class="pt-4 border-t border-cocoa-800 w-full flex flex-col items-center gap-3">
          <div class="flex items-baseline justify-center gap-2">
            <span class="text-2xl font-bold text-cream-100 font-cinzel">
              ${item.price.toFixed(2)}${settings.currency}
            </span>
            ${item.oldPrice ? `<span class="text-xs text-cream-500/70 line-through">${item.oldPrice.toFixed(2)}${settings.currency}</span>` : ''}
          </div>

          <div class="flex items-center justify-center gap-2 w-full">
            <!-- Pedir directamente por WhatsApp -->
            <button onclick="directWhatsAppOrder('${item.id}')" 
              class="flex-1 max-w-[140px] bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
              title="Pedir este perfume por WhatsApp">
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>Pedir Ya</span>
            </button>

            <!-- Añadir a la cesta -->
            <button onclick="addToCart('${item.id}')" 
              class="bg-cocoa-800 hover:bg-amberwarm-500 hover:text-cocoa-950 text-cream-200 border border-cocoa-700 p-2.5 rounded-full text-xs transition-all shadow-sm"
              title="Añadir a mi cesta">
              <i class="fa-solid fa-bag-shopping"></i>
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

  const newItems = perfumes.filter(p => p.isNew || p.badge?.includes("Novedad"));
  const itemsToDisplay = newItems.length >= 4 ? newItems.slice(0, 4) : perfumes.slice(0, 4);

  container.innerHTML = itemsToDisplay.map(item => `
    <div class="card-luxury flex flex-col group overflow-hidden text-center cursor-pointer" onclick="openQuickView('${item.id}')">
      <!-- Imagen centrada -->
      <div class="relative bg-cocoa-950/80 h-64 flex items-center justify-center p-4 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" 
          class="max-h-full max-w-full object-contain mx-auto group-hover:scale-108 transition-transform duration-500 drop-shadow-md" 
          onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'"
        />
        <span class="badge-novedad absolute top-3 left-3">✨ Recién Llegado</span>
        <span class="badge-family absolute top-3 right-3">${item.family || 'Oriental'}</span>
      </div>

      <!-- Datos Centrados -->
      <div class="p-5 flex flex-col justify-between items-center space-y-2 flex-grow">
        <div>
          <span class="text-[10px] text-amberwarm-400 uppercase font-bold tracking-wider">${item.brand}</span>
          <h4 class="font-cinzel text-cream-100 font-bold text-lg group-hover:text-amberwarm-400 transition-colors leading-snug">
            ${item.name}
          </h4>
          <p class="text-xs text-cream-500 mt-1 line-clamp-1">${item.topNotes || item.family}</p>
        </div>

        <div class="w-full pt-3 border-t border-cocoa-800 flex items-center justify-between">
          <span class="text-lg font-bold text-cream-100 font-cinzel">
            ${item.price.toFixed(2)}${settings.currency}
          </span>
          <button onclick="event.stopPropagation(); directWhatsAppOrder('${item.id}')" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 transition-colors shadow-sm">
            <i class="fa-brands fa-whatsapp text-sm"></i>
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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Imagen Centrada de Alta Calidad -->
      <div class="relative rounded-2xl overflow-hidden bg-cocoa-950/80 border border-cocoa-700 shadow-xl p-6 flex items-center justify-center h-96">
        <img src="${item.image}" alt="${item.name}" class="max-h-full max-w-full object-contain mx-auto drop-shadow-2xl" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'" />
        <div class="absolute top-4 left-4 flex flex-col gap-1.5">
          ${item.badge ? `<span class="badge-gold">${item.badge}</span>` : ''}
          ${item.isNew ? `<span class="badge-novedad">✨ Novedad</span>` : ''}
        </div>
        <div class="absolute bottom-4 left-4 right-4 bg-cocoa-900/90 backdrop-blur-md p-2.5 rounded-xl border border-cocoa-700 text-xs flex justify-between items-center text-cream-400">
          <span><i class="fa-solid fa-droplet text-amberwarm-400 mr-1"></i> ${item.volume || '100ml Eau de Parfum'}</span>
          <span><i class="fa-solid fa-stopwatch text-amberwarm-400 mr-1"></i> Duración 12h+ en piel</span>
        </div>
      </div>

      <!-- Información y Pirámide Olfativa Centrada/Equilibrada -->
      <div class="space-y-5">
        <div>
          <span class="text-xs uppercase tracking-widest text-amberwarm-400 font-bold">${item.brand}</span>
          <h2 class="text-2xl md:text-3xl font-cinzel font-bold text-cream-100 mt-1">${item.name}</h2>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-2xl font-bold font-cinzel text-cream-100">${item.price.toFixed(2)}${settings.currency}</span>
            ${item.oldPrice ? `<span class="text-sm text-cream-500/70 line-through">${item.oldPrice.toFixed(2)}${settings.currency}</span>` : ''}
            <span class="bg-cocoa-800 text-cream-300 text-xs px-2.5 py-0.5 rounded-full border border-cocoa-700">${item.category}</span>
          </div>
        </div>

        <p class="text-xs sm:text-sm text-cream-300 leading-relaxed font-light">${item.description}</p>

        <!-- Pirámide Olfativa Árabe -->
        <div class="bg-cocoa-900/80 p-4 rounded-2xl border border-cocoa-700 space-y-2.5">
          <h4 class="text-xs uppercase tracking-wider text-amberwarm-400 font-bold flex items-center gap-2">
            <i class="fa-solid fa-layer-group"></i> Pirámide Olfativa Oriental
          </h4>
          
          <div class="text-xs">
            <span class="text-[11px] font-bold text-cream-500 uppercase tracking-wider block">Salida:</span>
            <span class="text-cream-200">${item.topNotes || "Notas aromáticas orientales"}</span>
          </div>

          <div class="text-xs">
            <span class="text-[11px] font-bold text-cream-500 uppercase tracking-wider block">Corazón:</span>
            <span class="text-cream-200">${item.heartNotes || "Maderas preciosas y flores exóticas"}</span>
          </div>

          <div class="text-xs">
            <span class="text-[11px] font-bold text-cream-500 uppercase tracking-wider block">Fondo:</span>
            <span class="text-cream-200">${item.baseNotes || "Oud noble, ámbar y vainilla"}</span>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="pt-2 flex flex-col sm:flex-row gap-3">
          <button onclick="directWhatsAppOrder('${item.id}')" 
            class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-full text-xs flex items-center justify-center gap-2 transition-all shadow-lg flex-1">
            <i class="fa-brands fa-whatsapp text-base"></i>
            <span>Pedir por WhatsApp (${item.price.toFixed(2)}${settings.currency})</span>
          </button>
          
          <button onclick="addToCart('${item.id}'); closeQuickView();" 
            class="bg-cocoa-800 hover:bg-cocoa-700 text-cream-200 border border-cocoa-700 py-3.5 px-5 rounded-full text-xs flex items-center justify-center gap-2 font-semibold">
            <i class="fa-solid fa-plus"></i>
            <span>Añadir a la Cesta</span>
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

  // Re-sincronizar inmediatamente al volver a enfocar la pestaña de la tienda
  window.addEventListener("focus", () => {
    loadPerfumes();
    loadSettings();
    renderCatalog();
    renderNewArrivalsCarousel();
    updateContactLinks();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      loadPerfumes();
      loadSettings();
      renderCatalog();
      renderNewArrivalsCarousel();
      updateContactLinks();
    }
  });
}

// Iniciar al cargar el DOM
document.addEventListener("DOMContentLoaded", initApp);
