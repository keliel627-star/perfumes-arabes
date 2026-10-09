/* ==========================================================================
   AL-SULTAN PARFUMS - LOGICA DEL PANEL DE ADMINISTRACIÓN (ADMIN.JS)
   Gestión Rápida de Precios, Catálogo, Pedidos de Clientes y Configuración
   ========================================================================== */

// Catálogo por defecto si no existe en localStorage
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
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/asad.webp",
        "topNotes":  "Pimienta negra, tabaco, piña",
        "heartNotes":  "Pachulí, café, iris",
        "baseNotes":  "Vainilla, ámbar, madera seca, benjuí, ládano",
        "description":  "Asad de Lattafa Perfumes es una fragancia de la familia olfativa Oriental para Hombres. Asad se lanzó en 2021. Las Notas de Salida son pimienta negra, tabaco y piña; las Notas de Corazón son pachulí, café y iris; las Notas de Fondo son vainilla, ámbar, Madera seca, benjuí y ládano."
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
        "badge":  "✨ Novedad",
        "isNew":  true,
        "inStock":  true,
        "rating":  5,
        "reviewsCount":  1,
        "image":  "images/9pm-rebel.webp",
        "topNotes":  "Piña, manzana Granny Smith, mandarina",
        "heartNotes":  "Cedro, musgo de roble, vainilla",
        "baseNotes":  "Caramelo, maderas secas, ámbar gris, almizcle",
        "description":  "9 PM Rebel de Afnan es una fragancia de la familia olfativa Ámbar Frutal Amaderada para Hombres y Mujeres. Esta fragrancia es nueva. 9 PM Rebel se lanzó en 2024. Las Notas de Salida son piña, manzana Granny Smith y mandarina; las Notas de Corazón son cedro, musgo de roble y vainilla; las Notas de Fondo son caramelo, maderas secas, ámbar gris y almizcle."
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

// Estado
let perfumes = [];
let orders = [];
let settings = {
  storeName: "KELYSCENT",
  sellerPhone: "34612345678",
  sellerEmail: "pedidos@kelyscent.es",
  freeShippingThreshold: 50.00,
  shippingCost: 4.95,
  currency: "€",
  adminPin: "1234",
  heroImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
  heroBadge: "Edición de Colección",
  heroTitle: "Hawas Fire",
  heroVolume: "100ml Eau de Parfum",
  heroDesc: "Hawas Fire de Rasasi es una fragancia de la familia olfativa Aromática Acuática",
  storyImage: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
  storyTitle: "Maceración Tradicional",
  storyDesc: "Aceites concentrados destilados gota a gota para lograr la máxima longevidad en piel."
};

// ==========================================================================
// INICIALIZACIÓN Y SEGURIDAD (PIN)
// ==========================================================================
function initAdmin() {
  loadData();
  checkAuth();
  populatePresets();
  setupListeners();
  loadBannersForm();
}

function checkAuth() {
  const isAuth = sessionStorage.getItem("alSultan_admin_auth");
  const pinScreen = document.getElementById("pinScreen");
  if (isAuth === "true") {
    if (pinScreen) pinScreen.classList.add("hidden");
    refreshDashboard();
  } else {
    if (pinScreen) pinScreen.classList.remove("hidden");
  }
}

function handlePinSubmit(e) {
  e.preventDefault();
  const pinEntered = document.getElementById("pinInput")?.value.trim();
  const currentPin = settings.adminPin || "1234";

  if (pinEntered === currentPin) {
    sessionStorage.setItem("alSultan_admin_auth", "true");
    document.getElementById("pinScreen")?.classList.add("hidden");
    document.getElementById("pinError")?.classList.add("hidden");
    refreshDashboard();
    showToast("🔓 Acceso concedido al Panel de Propietario");
  } else {
    const errorEl = document.getElementById("pinError");
    if (errorEl) errorEl.classList.remove("hidden");
    const pinInput = document.getElementById("pinInput");
    if (pinInput) {
      pinInput.value = "";
      pinInput.focus();
    }
  }
}

function lockAdmin() {
  sessionStorage.removeItem("alSultan_admin_auth");
  const pinInput = document.getElementById("pinInput");
  if (pinInput) pinInput.value = "";
  document.getElementById("pinScreen")?.classList.remove("hidden");
  showToast("🔒 Panel bloqueado con seguridad");
}

// Canal de sincronización en tiempo real entre pestañas
const syncChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('kelyscent_sync') : null;

function broadcastSync(type) {
  if (syncChannel) {
    try {
      syncChannel.postMessage({ type, timestamp: Date.now() });
    } catch (e) {
      console.warn("Error en broadcastSync:", e);
    }
  }
}

// ==========================================================================
// CARGA Y GUARDADO DE DATOS (LOCALSTORAGE & SYNC)
// ==========================================================================
function loadData() {
  // Configuración
  const savedSettings = localStorage.getItem("alSultan_settings");
  if (savedSettings) {
    try {
      settings = { ...settings, ...JSON.parse(savedSettings) };
      if (!settings.storeName || settings.storeName === "AL-SULTAN PARFUMS") {
        settings.storeName = "KELYSCENT";
        saveSettings();
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Perfumes
  const savedPerfumes = localStorage.getItem("alSultan_perfumes");
  if (savedPerfumes) {
    try {
      perfumes = JSON.parse(savedPerfumes);
      // Fusión inteligente: asegurar que todos los perfumes de DEFAULT_PERFUMES estén en el admin
      DEFAULT_PERFUMES.forEach(def => {
        if (!perfumes.some(p => p.id === def.id || p.name.trim().toLowerCase() === def.name.trim().toLowerCase())) {
          perfumes.unshift(def);
        }
      });
      savePerfumes();
    } catch (e) {
      perfumes = [...DEFAULT_PERFUMES];
      savePerfumes();
    }
  } else {
    perfumes = [...DEFAULT_PERFUMES];
    savePerfumes();
  }

  // Sincronizar con el catálogo y ajustes oficiales del servidor
  syncWithServerCatalog();
  syncServerSettings();

  // Pedidos
  const savedOrders = localStorage.getItem("alSultan_orders");
  if (savedOrders) {
    try {
      orders = JSON.parse(savedOrders);
    } catch (e) {
      orders = [];
    }
  }
}

async function syncWithServerCatalog() {
  try {
    const res = await fetch(`perfumes.json?v=${Date.now()}`);
    if (res.ok) {
      const serverData = await res.json();
      if (Array.isArray(serverData) && serverData.length > 0) {
        serverData.forEach(serverItem => {
          const idx = perfumes.findIndex(p => p.id === serverItem.id || p.name.trim().toLowerCase() === serverItem.name.trim().toLowerCase());
          if (idx >= 0) {
            perfumes[idx] = { ...perfumes[idx], ...serverItem };
          } else {
            perfumes.unshift(serverItem);
          }
        });
        localStorage.setItem("alSultan_perfumes", JSON.stringify(perfumes));
        renderPricingTable();
        updateKpis();
      }
    }
  } catch (err) {
    // Modo offline o red lenta
  }
}

async function syncServerSettings() {
  try {
    const res = await fetch(`settings.json?v=${Date.now()}`);
    if (res.ok) {
      const serverSettings = await res.json();
      if (serverSettings && typeof serverSettings === 'object') {
        settings = { ...settings, ...serverSettings };
        localStorage.setItem("alSultan_settings", JSON.stringify(settings));
        loadBannersForm();
      }
    }
  } catch (err) {
    // Modo offline
  }
}

function savePerfumes() {
  try {
    localStorage.setItem("alSultan_perfumes", JSON.stringify(perfumes));
    broadcastSync("perfumes");
  } catch (e) {
    console.error("Error guardando perfumes:", e);
    if (e.name === "QuotaExceededError") {
      showToast("⚠️ Memoria de imágenes llena en navegador. Usa fotos más ligeras o URLs.");
    }
  }
}

function saveSettings() {
  try {
    localStorage.setItem("alSultan_settings", JSON.stringify(settings));
    broadcastSync("settings");
  } catch (e) {
    console.error("Error guardando configuración:", e);
  }
}

function saveOrders() {
  try {
    localStorage.setItem("alSultan_orders", JSON.stringify(orders));
    broadcastSync("orders");
  } catch (e) {
    console.error("Error guardando pedidos:", e);
  }
}

// ==========================================================================
// MÉTRICAS Y ACTUALIZACIÓN DEL DASHBOARD
// ==========================================================================
function refreshDashboard() {
  updateKpis();
  renderPricingTable();
  renderOrders();
  loadSettingsForm();
}

function updateKpis() {
  const totalPerfumes = perfumes.length;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, ord) => sum + (ord.calculations?.total || 0), 0);
  const totalNew = perfumes.filter(p => p.isNew).length;

  document.getElementById("kpiTotalPerfumes").textContent = totalPerfumes;
  document.getElementById("kpiTotalOrders").textContent = totalOrders;
  document.getElementById("kpiTotalRevenue").textContent = `${totalRevenue.toFixed(2)}${settings.currency}`;
  document.getElementById("kpiTotalNew").textContent = totalNew;

  // Badge en la pestaña de pedidos si hay pendientes
  const pendingOrders = orders.filter(o => o.status === "Pendiente").length;
  const badge = document.getElementById("ordersTabBadge");
  if (badge) {
    if (pendingOrders > 0) {
      badge.textContent = pendingOrders;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  }
}

// ==========================================================================
// GESTIÓN DE PRECIOS & CATÁLOGO (TABLA RÁPIDA)
// ==========================================================================
function renderPricingTable() {
  const tbody = document.getElementById("pricingTableBody");
  if (!tbody) return;

  const searchQuery = document.getElementById("adminSearchInput")?.value.toLowerCase().trim() || "";
  const categoryFilter = document.getElementById("adminCategoryFilter")?.value || "Todos";

  const filtered = perfumes.filter(item => {
    if (categoryFilter !== "Todos" && item.category !== categoryFilter) return false;
    if (searchQuery) {
      const match = item.name.toLowerCase().includes(searchQuery) ||
                    item.brand.toLowerCase().includes(searchQuery);
      if (!match) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="p-8 text-center text-gray-500">
          No se encontraron perfumes con los filtros seleccionados.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => `
    <tr class="hover:bg-white/5 transition-colors border-b border-white/5">
      <!-- Perfume & Marca (Clicable para editar notas y todo) -->
      <td class="p-3.5 flex items-center gap-3 cursor-pointer group" onclick="openEditModal('${item.id}')" title="Haz clic para editar notas olfativas, fotos y descripción">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover rounded-lg bg-black/60 border border-white/10 flex-shrink-0 group-hover:border-amber-400 transition-all shadow-md" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'" />
        <div class="min-w-0">
          <span class="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">${item.brand}</span>
          <span class="font-bold text-white text-sm block group-hover:text-amber-300 transition-colors">${item.name}</span>
          <span class="text-[11px] text-gray-500">${item.volume || '100ml EDP'}</span>
          ${item.topNotes ? `<div class="text-[10px] text-amber-200/90 truncate max-w-[210px] mt-0.5" title="Salida: ${item.topNotes} | Corazón: ${item.heartNotes || '-'} | Fondo: ${item.baseNotes || '-'}"><i class="fa-solid fa-wand-magic-sparkles text-amber-400 mr-1"></i>${item.topNotes}</div>` : `<div class="text-[10px] text-gray-500 italic mt-0.5"><i class="fa-solid fa-pen mr-1"></i>Sin notas · Clic para añadir</div>`}
        </div>
      </td>

      <!-- Categoría -->
      <td class="p-3.5">
        <span class="bg-white/5 px-2.5 py-1 rounded-full text-[11px] text-gray-300 font-medium border border-white/5">
          ${item.category}
        </span>
      </td>

      <!-- PRECIO DE VENTA (EDITABLE RÁPIDO Y AUTO-GUARDADO) -->
      <td class="p-3.5 text-center">
        <div class="inline-flex items-center gap-1.5">
          <input type="number" step="0.01" id="price_${item.id}" value="${item.price}" 
            onchange="saveQuickPrice('${item.id}')"
            onblur="saveQuickPrice('${item.id}')"
            class="w-20 bg-black/80 border border-emerald-500/40 rounded-lg px-2 py-1.5 text-center font-bold text-emerald-400 text-xs focus:outline-none focus:border-emerald-400" 
          />
          <span class="text-gray-400 text-xs font-bold">${settings.currency}</span>
        </div>
      </td>

      <!-- PRECIO TACHADO / OFERTA (EDITABLE RÁPIDO Y AUTO-GUARDADO) -->
      <td class="p-3.5 text-center">
        <div class="inline-flex items-center gap-1.5">
          <input type="number" step="0.01" id="oldPrice_${item.id}" value="${item.oldPrice || ''}" placeholder="Sin oferta" 
            onchange="saveQuickPrice('${item.id}')"
            onblur="saveQuickPrice('${item.id}')"
            class="w-20 bg-black/80 border border-white/10 rounded-lg px-2 py-1.5 text-center text-gray-400 text-xs focus:outline-none focus:border-[#D4AF37]" 
          />
          <span class="text-gray-500 text-xs">${settings.currency}</span>
        </div>
      </td>

      <!-- ETIQUETA / BADGE (AUTO-GUARDADO) -->
      <td class="p-3.5 text-center">
        <input type="text" id="badge_${item.id}" value="${item.badge || ''}" placeholder="Ej: Bestseller" 
            onchange="saveQuickPrice('${item.id}')"
            onblur="saveQuickPrice('${item.id}')"
            class="w-24 bg-black/80 border border-white/10 rounded-lg px-2 py-1.5 text-center text-xs text-[#F9E79F] focus:outline-none focus:border-[#D4AF37]" 
        />
      </td>

      <!-- ESTADO DE STOCK -->
      <td class="p-3.5 text-center">
        <button onclick="toggleStock('${item.id}')" 
          class="px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all ${item.inStock !== false ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40 hover:bg-emerald-900/60' : 'bg-red-950/40 text-red-300 border-red-500/40 hover:bg-red-900/60'}">
          ${item.inStock !== false ? '✓ En Stock' : '✕ Agotado'}
        </button>
      </td>

      <!-- BOTONES DE ACCIÓN -->
      <td class="p-3.5 text-right">
        <div class="flex items-center justify-end gap-1.5">
          <!-- Botón Guardar Rápido -->
          <button onclick="saveQuickPrice('${item.id}', true)" class="btn-gold px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1" title="Guardar cambios rápidos">
            <i class="fa-solid fa-floppy-disk"></i>
            <span class="hidden xl:inline">Guardar</span>
          </button>

          <!-- Botón Editar Notas & Ficha Completa -->
          <button onclick="openEditModal('${item.id}')" class="bg-purple-950/60 hover:bg-purple-900/90 text-purple-200 border border-purple-500/40 px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer" title="Editar notas olfativas, fotos y datos completos">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-300"></i>
            <span>Notas & Ficha</span>
          </button>

          <!-- Botón Eliminar -->
          <button onclick="deleteProduct('${item.id}')" class="bg-red-950/40 hover:bg-red-900/80 text-red-300 p-1.5 rounded-lg text-xs transition-colors" title="Eliminar perfume">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

function saveQuickPrice(id, notify = true) {
  const item = perfumes.find(p => p.id === id);
  if (!item) return;

  const priceInput = document.getElementById(`price_${id}`);
  const oldPriceInput = document.getElementById(`oldPrice_${id}`);
  const badgeInput = document.getElementById(`badge_${id}`);

  const newPrice = parseFloat(priceInput?.value);
  if (isNaN(newPrice) || newPrice <= 0) {
    if (notify) showToast("⚠️ Introduce un precio de venta válido");
    return;
  }

  const newOldPrice = oldPriceInput?.value ? parseFloat(oldPriceInput.value) : null;
  const newBadge = badgeInput?.value.trim() || "";

  // Si no ha cambiado nada, no guardar innecesariamente
  if (item.price === newPrice && item.oldPrice === newOldPrice && item.badge === newBadge) {
    return;
  }

  item.price = newPrice;
  item.oldPrice = newOldPrice;
  item.badge = newBadge;

  savePerfumes();
  updateKpis();
  if (notify) {
    showToast(`✅ "${item.name}" guardado a ${newPrice.toFixed(2)}${settings.currency}`);
  }
}

function toggleStock(id) {
  const item = perfumes.find(p => p.id === id);
  if (!item) return;

  item.inStock = item.inStock === false ? true : false;
  savePerfumes();
  renderPricingTable();
  showToast(`Estado de stock de "${item.name}" modificado`);
}

function deleteProduct(id) {
  const item = perfumes.find(p => p.id === id);
  if (!item) return;

  if (confirm(`¿Estás seguro de que deseas eliminar permanentemente "${item.name}" del catálogo?`)) {
    perfumes = perfumes.filter(p => p.id !== id);
    savePerfumes();
    updateKpis();
    renderPricingTable();
    showToast(`Perfume "${item.name}" eliminado del catálogo`);
  }
}

function resetToDefaults() {
  if (confirm("¿Deseas restaurar el catálogo predeterminado de 8 perfumes árabes originales?")) {
    perfumes = [...DEFAULT_PERFUMES];
    savePerfumes();
    updateKpis();
    renderPricingTable();
    showToast("Catálogo restablecido al predeterminado");
  }
}

// ==========================================================================
// AÑADIR NUEVO PERFUME
// ==========================================================================
function populatePresets() {
  const container = document.getElementById("adminImagePresets");
  if (!container) return;

  container.innerHTML = PRESET_IMAGES.map(img => `
    <button type="button" onclick="selectPresetImage('${img.url}')" 
      class="group relative h-16 rounded-xl overflow-hidden border border-white/20 hover:border-[#D4AF37] transition-all text-left">
      <img src="${img.url}" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
      <span class="absolute inset-0 bg-black/60 flex items-center justify-center text-[10px] text-center font-bold text-white px-1">
        ${img.label}
      </span>
    </button>
  `).join("");
}

// ==========================================================================
// GESTOR DE IMÁGENES (SUBIDA DESDE ESCRITORIO / PC, URL Y PRESETS)
// ==========================================================================
function setImageMode(mode, context) {
  const modes = ['upload', 'url', 'presets'];
  
  modes.forEach(m => {
    const btn = document.getElementById(`btnMode${m.charAt(0).toUpperCase() + m.slice(1)}-${context}`);
    const box = document.getElementById(`image${m.charAt(0).toUpperCase() + m.slice(1)}Box-${context}`);
    
    if (btn) {
      if (m === mode) {
        btn.className = "px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold transition-all shadow-md";
      } else {
        btn.className = "px-3 py-1.5 rounded-lg text-gray-300 hover:text-white transition-all";
      }
    }
    if (box) {
      if (m === mode) {
        box.classList.remove("hidden");
      } else {
        box.classList.add("hidden");
      }
    }
  });
}

function handleDragOver(e, context) {
  e.preventDefault();
  const dropzone = document.getElementById(`dropzone-${context}`);
  if (dropzone) {
    dropzone.classList.add("border-purple-400", "bg-purple-900/40");
  }
}

function handleDragLeave(e, context) {
  e.preventDefault();
  const dropzone = document.getElementById(`dropzone-${context}`);
  if (dropzone) {
    dropzone.classList.remove("border-purple-400", "bg-purple-900/40");
  }
}

function handleDrop(e, context) {
  e.preventDefault();
  handleDragLeave(e, context);
  const file = e.dataTransfer?.files?.[0];
  if (file) {
    processImageFile(file, context);
  }
}

function handleFileSelect(e, context) {
  const file = e.target.files?.[0];
  if (file) {
    processImageFile(file, context);
  }
}

function processImageFile(file, context) {
  if (!file.type.startsWith("image/")) {
    showToast("⚠️ Por favor selecciona un archivo de imagen (JPG, PNG, WebP)");
    return;
  }

  showToast("⏳ Optimizando y cargando foto...");

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Redimensionar proporcionalmente para optimizar almacenamiento en localStorage
      const maxDim = 800;
      let width = img.width;
      let height = img.height;

      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.82);
      const kbSize = Math.round((compressedDataUrl.length * 3 / 4) / 1024);

      if (context === "add") {
        const input = document.getElementById("addImageUrl");
        if (input) input.value = compressedDataUrl;
        
        const preview = document.getElementById("addImagePreview");
        const container = document.getElementById("previewContainer-add");
        const info = document.getElementById("previewInfo-add");
        if (preview) preview.src = compressedDataUrl;
        if (info) info.textContent = `${file.name} (${kbSize} KB optimizado)`;
        if (container) container.classList.remove("hidden");
      } else if (context === "edit") {
        const input = document.getElementById("editImage");
        if (input) input.value = compressedDataUrl;
        
        const preview = document.getElementById("editImagePreview");
        const container = document.getElementById("previewContainer-edit");
        const info = document.getElementById("previewInfo-edit");
        if (preview) preview.src = compressedDataUrl;
        if (info) info.textContent = `${file.name} (${kbSize} KB optimizado)`;
        if (container) container.classList.remove("hidden");
      } else if (context === "hero") {
        const input = document.getElementById("heroImageUrl");
        if (input) input.value = compressedDataUrl;
        const preview = document.getElementById("heroImagePreview");
        const info = document.getElementById("previewInfo-hero");
        if (preview) preview.src = compressedDataUrl;
        if (info) info.textContent = `Foto seleccionada: ${file.name} (${kbSize} KB optimizado)`;
      } else if (context === "story") {
        const input = document.getElementById("storyImageUrl");
        if (input) input.value = compressedDataUrl;
        const preview = document.getElementById("storyImagePreview");
        const info = document.getElementById("previewInfo-story");
        if (preview) preview.src = compressedDataUrl;
        if (info) info.textContent = `Foto seleccionada: ${file.name} (${kbSize} KB optimizado)`;
      }

      showToast(`✅ Foto "${file.name}" cargada correctamente`);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleUrlInput(e, context) {
  const url = e.target.value.trim();
  const preview = document.getElementById(
    context === 'add' ? 'addImagePreview' :
    context === 'edit' ? 'editImagePreview' :
    context === 'hero' ? 'heroImagePreview' : 'storyImagePreview'
  );
  const container = document.getElementById(`previewContainer-${context}`);
  const info = document.getElementById(
    context === 'add' ? 'previewInfo-add' :
    context === 'edit' ? 'previewInfo-edit' :
    context === 'hero' ? 'previewInfo-hero' : 'previewInfo-story'
  );

  if (url) {
    if (preview) preview.src = url;
    if (info) info.textContent = "URL externa vinculada";
    if (container) container.classList.remove("hidden");
  } else {
    if (container) container.classList.add("hidden");
  }
}

function removeImage(context) {
  const input = document.getElementById(
    context === "add" ? "addImageUrl" :
    context === "edit" ? "editImage" :
    context === "hero" ? "heroImageUrl" : "storyImageUrl"
  );
  const fileInput = document.getElementById(`fileInput-${context}`);
  const container = document.getElementById(`previewContainer-${context}`);
  if (input) input.value = "";
  if (fileInput) fileInput.value = "";
  if (container) container.classList.add("hidden");
  showToast("Foto eliminada");
}

function selectPresetImage(url) {
  const input = document.getElementById("addImageUrl");
  const preview = document.getElementById("addImagePreview");
  const container = document.getElementById("previewContainer-add");
  const info = document.getElementById("previewInfo-add");
  if (input) input.value = url;
  if (preview) preview.src = url;
  if (info) info.textContent = "Frasco de lujo prediseñado";
  if (container) container.classList.remove("hidden");
  showToast("Frasco seleccionado");
}

function selectBannerPreset(url, context) {
  const input = document.getElementById(context === 'hero' ? 'heroImageUrl' : 'storyImageUrl');
  const preview = document.getElementById(context === 'hero' ? 'heroImagePreview' : 'storyImagePreview');
  const info = document.getElementById(context === 'hero' ? 'previewInfo-hero' : 'previewInfo-story');
  if (input) input.value = url;
  if (preview) preview.src = url;
  if (info) info.textContent = "Preset árabe seleccionado";
  showToast("Foto árabe seleccionada");
}

function handleAddNewPerfume(e) {
  e.preventDefault();

  const name = document.getElementById("addName")?.value.trim();
  const brand = document.getElementById("addBrand")?.value.trim();
  const price = parseFloat(document.getElementById("addPrice")?.value);
  const oldPrice = document.getElementById("addOldPrice")?.value ? parseFloat(document.getElementById("addOldPrice").value) : null;
  const volume = document.getElementById("addVolume")?.value.trim() || "100ml - Eau de Parfum";
  const category = document.getElementById("addCategory")?.value || "Unisex";
  const family = document.getElementById("addFamily")?.value || "Amaderado";
  const badge = document.getElementById("addBadge")?.value.trim() || "✨ Novedad";
  const image = document.getElementById("addImageUrl")?.value.trim() || PRESET_IMAGES[0].url;

  const topNotes = document.getElementById("addTopNotes")?.value.trim();
  const heartNotes = document.getElementById("addHeartNotes")?.value.trim();
  const baseNotes = document.getElementById("addBaseNotes")?.value.trim();
  const description = document.getElementById("addDescription")?.value.trim();

  if (!name || !brand || isNaN(price)) {
    showToast("⚠️ Rellena los campos obligatorios (Nombre, Marca, Precio)");
    return;
  }

  const newPerfume = {
    id: "p_" + Date.now(),
    name,
    brand,
    price,
    oldPrice,
    volume,
    category,
    family,
    badge,
    isNew: true,
    inStock: true,
    rating: 5.0,
    reviewsCount: 1,
    image,
    topNotes: topNotes || "Azafrán noble, canela y notas luminosas",
    heartNotes: heartNotes || "Madera de Agar (Oud), rosa damascena",
    baseNotes: baseNotes || "Vainilla Bourbon, ámbar gris y almizcle",
    description: description || "Fragancia oriental de alta proyección y fijación extraordinaria."
  };

  perfumes.unshift(newPerfume);
  savePerfumes();
  updateKpis();
  renderPricingTable();

  e.target.reset();
  removeImage('add');

  showToast(`🎉 ¡"${name}" publicado con éxito en la tienda!`);
  switchTab("pricing");
}

// ==========================================================================
// MODAL DE EDICIÓN COMPLETA
// ==========================================================================
function openEditModal(id) {
  const item = perfumes.find(p => p.id === id);
  if (!item) return;

  document.getElementById("editId").value = item.id;
  document.getElementById("editName").value = item.name;
  document.getElementById("editBrand").value = item.brand;
  document.getElementById("editVolume").value = item.volume || "100ml - Eau de Parfum";
  document.getElementById("editPrice").value = item.price;
  document.getElementById("editOldPrice").value = item.oldPrice || "";
  document.getElementById("editCategory").value = item.category || "Unisex";
  document.getElementById("editFamily").value = item.family || "Amaderado";
  document.getElementById("editBadge").value = item.badge || "";
  document.getElementById("editImage").value = item.image;
  document.getElementById("editTopNotes").value = item.topNotes || "";
  document.getElementById("editHeartNotes").value = item.heartNotes || "";
  document.getElementById("editBaseNotes").value = item.baseNotes || "";
  document.getElementById("editDescription").value = item.description || "";

  // Mostrar imagen activa en vista previa de edición
  const editPreview = document.getElementById("editImagePreview");
  const editContainer = document.getElementById("previewContainer-edit");
  const editInfo = document.getElementById("previewInfo-edit");
  if (editPreview) editPreview.src = item.image;
  if (editContainer) editContainer.classList.remove("hidden");
  if (editInfo) editInfo.textContent = "Foto actual en la web (puedes cambiarla subiendo otra)";

  const modal = document.getElementById("editPerfumeModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeEditModal() {
  const modal = document.getElementById("editPerfumeModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function handleSaveEditPerfume(e) {
  if (e && e.preventDefault) e.preventDefault();
  const id = document.getElementById("editId")?.value;
  const item = perfumes.find(p => p.id === id);
  if (!item) {
    showToast("⚠️ No se encontró el perfume a editar.");
    return;
  }

  const nameVal = document.getElementById("editName")?.value.trim();
  const brandVal = document.getElementById("editBrand")?.value.trim();
  const priceVal = parseFloat(document.getElementById("editPrice")?.value);

  if (!nameVal || !brandVal || isNaN(priceVal)) {
    showToast("⚠️ Por favor completa al menos el nombre, la marca y el precio.");
    return;
  }

  item.name = nameVal;
  item.brand = brandVal;
  item.volume = document.getElementById("editVolume")?.value.trim() || item.volume || "100ml - Eau de Parfum";
  item.price = priceVal;
  item.oldPrice = document.getElementById("editOldPrice")?.value ? parseFloat(document.getElementById("editOldPrice").value) : null;
  item.category = document.getElementById("editCategory")?.value || item.category || "Unisex";
  item.family = document.getElementById("editFamily")?.value || item.family || "Amaderado";
  item.badge = document.getElementById("editBadge")?.value.trim() || "";

  const imgInput = document.getElementById("editImage")?.value.trim();
  if (imgInput) {
    item.image = imgInput;
  }

  // Notas Olfativas (Salida, Corazón y Fondo) y Descripción
  const topVal = document.getElementById("editTopNotes")?.value.trim();
  const heartVal = document.getElementById("editHeartNotes")?.value.trim();
  const baseVal = document.getElementById("editBaseNotes")?.value.trim();
  const descVal = document.getElementById("editDescription")?.value.trim();

  item.topNotes = topVal !== undefined ? topVal : (item.topNotes || "");
  item.heartNotes = heartVal !== undefined ? heartVal : (item.heartNotes || "");
  item.baseNotes = baseVal !== undefined ? baseVal : (item.baseNotes || "");
  item.description = descVal !== undefined ? descVal : (item.description || "");

  savePerfumes();
  updateKpis();
  renderPricingTable();
  closeEditModal();
  showToast(`✅ Notas y datos de "${item.name}" guardados correctamente`);
}

// ==========================================================================
// GESTIÓN DE PEDIDOS DE CLIENTES
// ==========================================================================
function renderOrders() {
  const container = document.getElementById("ordersContainer");
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="card-luxury p-12 text-center text-gray-400">
        <i class="fa-solid fa-receipt text-4xl mb-3 text-gold-500/30"></i>
        <h4 class="font-cinzel text-lg font-bold text-white mb-1">Sin pedidos pendientes</h4>
        <p class="text-xs">Cuando un cliente compre en la web, su pedido aparecerá aquí automáticamente.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(ord => {
    const cleanCustomerPhone = ord.customer.phone.replace(/\D/g, '');
    const waChatMsg = `Hola ${ord.customer.name}, te escribo de ${settings.storeName} sobre tu pedido #${ord.id}.`;
    const waLink = `https://wa.me/${cleanCustomerPhone}?text=${encodeURIComponent(waChatMsg)}`;

    return `
      <div class="card-luxury p-5 space-y-4">
        
        <!-- Fila Superior -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
          <div class="flex items-center gap-3">
            <span class="font-cinzel text-sm font-bold text-[#D4AF37]">Pedido #${ord.id}</span>
            <span class="text-xs text-gray-400">${ord.date}</span>
          </div>

          <div class="flex items-center gap-3">
            <!-- Selector de Estado -->
            <select onchange="changeOrderStatus('${ord.id}', this.value)" 
              class="bg-black/60 border border-white/10 rounded-lg px-2.5 py-1 text-xs font-semibold ${ord.status === 'Completado' ? 'text-emerald-400' : 'text-amber-400'}">
              <option value="Pendiente" ${ord.status === 'Pendiente' ? 'selected' : ''}>⏳ Pendiente</option>
              <option value="En Preparación" ${ord.status === 'En Preparación' ? 'selected' : ''}>📦 En Preparación</option>
              <option value="Enviado" ${ord.status === 'Enviado' ? 'selected' : ''}>🚚 Enviado</option>
              <option value="Completado" ${ord.status === 'Completado' ? 'selected' : ''}>✅ Completado</option>
              <option value="Cancelado" ${ord.status === 'Cancelado' ? 'selected' : ''}>✕ Cancelado</option>
            </select>

            <button onclick="deleteOrder('${ord.id}')" class="text-gray-400 hover:text-red-400 p-1 transition-colors" title="Eliminar registro">
              <i class="fa-solid fa-trash-can text-xs"></i>
            </button>
          </div>
        </div>

        <!-- Detalles del Pedido -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          
          <!-- Cliente -->
          <div class="space-y-1 bg-black/40 p-3 rounded-xl border border-white/5">
            <span class="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">Datos del Cliente:</span>
            <p class="font-bold text-white text-sm">${ord.customer.name}</p>
            <p class="text-gray-300"><i class="fa-solid fa-phone text-[10px] mr-1 text-[#D4AF37]"></i> ${ord.customer.phone}</p>
            ${ord.customer.email ? `<p class="text-gray-300"><i class="fa-solid fa-envelope text-[10px] mr-1 text-[#D4AF37]"></i> ${ord.customer.email}</p>` : ''}
            <div class="pt-2">
              <a href="${waLink}" target="_blank" class="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors">
                <i class="fa-brands fa-whatsapp"></i>
                <span>Abrir WhatsApp con Cliente</span>
              </a>
            </div>
          </div>

          <!-- Envío y Pago -->
          <div class="space-y-1 bg-black/40 p-3 rounded-xl border border-white/5">
            <span class="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">Dirección de Entrega:</span>
            <p class="text-white">${ord.customer.address}</p>
            <p class="text-gray-300">${ord.customer.city} ${ord.customer.postal ? `(CP: ${ord.customer.postal})` : ''}</p>
            <div class="pt-2">
              <span class="text-gray-400">Método de Pago:</span>
              <span class="font-bold text-emerald-400 ml-1">${ord.paymentMethod}</span>
            </div>
            ${ord.customer.notes ? `<p class="text-[11px] text-amber-200/80 pt-1"><strong>Nota:</strong> ${ord.customer.notes}</p>` : ''}
          </div>

          <!-- Artículos y Total -->
          <div class="space-y-2 bg-black/40 p-3 rounded-xl border border-white/5">
            <span class="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">Fragancias Compradas:</span>
            <div class="space-y-1 max-h-24 overflow-y-auto">
              ${ord.items.map(i => `
                <div class="flex justify-between text-[11px]">
                  <span class="text-white">${i.quantity}x ${i.name}</span>
                  <span class="text-[#D4AF37] font-semibold">${(i.price * i.quantity).toFixed(2)}${settings.currency}</span>
                </div>
              `).join("")}
            </div>
            <div class="border-t border-white/10 pt-2 flex justify-between font-bold text-sm text-white">
              <span>Total a Cobrar:</span>
              <span class="font-cinzel text-[#F9E79F]">${ord.calculations.total.toFixed(2)}${settings.currency}</span>
            </div>
          </div>

        </div>

      </div>
    `;
  }).join("");
}

function changeOrderStatus(id, newStatus) {
  const ord = orders.find(o => o.id === id);
  if (!ord) return;

  ord.status = newStatus;
  saveOrders();
  updateKpis();
  showToast(`Estado del pedido #${id} actualizado a "${newStatus}"`);
}

function deleteOrder(id) {
  if (confirm(`¿Eliminar el pedido #${id}?`)) {
    orders = orders.filter(o => o.id !== id);
    saveOrders();
    updateKpis();
    renderOrders();
    showToast("Pedido eliminado");
  }
}

function clearCompletedOrders() {
  if (confirm("¿Deseas eliminar de la lista todos los pedidos marcados como 'Completado'?")) {
    orders = orders.filter(o => o.status !== "Completado");
    saveOrders();
    updateKpis();
    renderOrders();
    showToast("Pedidos completados limpiados");
  }
}

// ==========================================================================
// CONFIGURACIÓN DE LA TIENDA
// ==========================================================================
function loadSettingsForm() {
  document.getElementById("setStoreName").value = settings.storeName || "KELYSCENT";
  document.getElementById("setPhone").value = settings.sellerPhone || "34612345678";
  document.getElementById("setEmail").value = settings.sellerEmail || "pedidos@kelyscent.es";
  document.getElementById("setFreeShipping").value = settings.freeShippingThreshold || 50;
  document.getElementById("setShippingCost").value = settings.shippingCost || 4.95;
}

function handleSaveStoreSettings(e) {
  e.preventDefault();

  settings.storeName = document.getElementById("setStoreName").value.trim() || "KELYSCENT";
  settings.sellerPhone = document.getElementById("setPhone").value.trim() || "34612345678";
  settings.sellerEmail = document.getElementById("setEmail").value.trim() || "pedidos@kelyscent.es";
  settings.freeShippingThreshold = parseFloat(document.getElementById("setFreeShipping").value) || 50;
  settings.shippingCost = parseFloat(document.getElementById("setShippingCost").value) || 4.95;

  saveSettings();
  showToast("✅ Configuración guardada. La web de clientes ya usa estos datos.");
}

function handleChangePin(e) {
  e.preventDefault();
  const newPin = document.getElementById("setNewPin").value.trim();
  if (newPin.length < 4) {
    showToast("⚠️ El PIN debe tener al menos 4 números");
    return;
  }

  settings.adminPin = newPin;
  saveSettings();
  document.getElementById("setNewPin").value = "";
  showToast("🔒 PIN de acceso actualizado con éxito");
}

function exportCatalogJson() {
  const data = {
    settings,
    perfumes,
    exportDate: new Date().toISOString()
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `catalogo-perfumes-arabes-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("📥 Copia de seguridad descargada");
}

function importCatalogJson(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (Array.isArray(data.perfumes)) {
        perfumes = data.perfumes;
        savePerfumes();
        if (data.settings) {
          settings = { ...settings, ...data.settings };
          saveSettings();
        }
        refreshDashboard();
        showToast("✅ Catálogo restaurado con éxito desde archivo");
      } else {
        showToast("⚠️ Formato de archivo JSON incorrecto");
      }
    } catch (err) {
      showToast("⚠️ Error al leer el archivo JSON");
    }
  };
  reader.readAsText(file);
}

// ==========================================================================
// PUBLICACIÓN GLOBAL EN LA NUBE (GITHUB) Y EXPORTACIÓN
// ==========================================================================
function openPublishModal() {
  const modal = document.getElementById("publishModal");
  const input = document.getElementById("githubTokenInput");
  const savedToken = localStorage.getItem("kelyscent_github_token") || "";
  
  if (input) input.value = savedToken;
  const statusMsg = document.getElementById("publishStatusMsg");
  if (statusMsg) statusMsg.classList.add("hidden");

  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closePublishModal() {
  const modal = document.getElementById("publishModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function toggleTokenVisibility() {
  const input = document.getElementById("githubTokenInput");
  const eye = document.getElementById("toggleTokenEye");
  if (!input) return;
  if (input.type === "password") {
    input.type = "text";
    if (eye) eye.className = "fa-solid fa-eye-slash";
  } else {
    input.type = "password";
    if (eye) eye.className = "fa-solid fa-eye";
  }
}

function copyCatalogJsonToClipboard() {
  const jsonStr = JSON.stringify(perfumes, null, 2);
  const finishCopy = () => {
    showToast("📋 Catálogo copiado al portapapeles. ¡Pégalo en el chat!");
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(jsonStr).then(finishCopy).catch(() => {
      fallbackCopy(jsonStr);
      finishCopy();
    });
  } else {
    fallbackCopy(jsonStr);
    finishCopy();
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

function downloadPerfumesJson() {
  const jsonStr = JSON.stringify(perfumes, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "perfumes.json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("📥 Descargando perfumes.json");
}

async function publishToGitHub() {
  const tokenInput = document.getElementById("githubTokenInput");
  const token = (tokenInput ? tokenInput.value.trim() : "") || localStorage.getItem("kelyscent_github_token");

  if (!token) {
    showToast("⚠️ Introduce tu Token de GitHub para publicar");
    return;
  }

  localStorage.setItem("kelyscent_github_token", token);

  const statusEl = document.getElementById("publishStatusMsg");
  const btn = document.getElementById("btnPublishGitHub");

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Publicando en la nube...';
  }
  if (statusEl) {
    statusEl.className = "text-xs text-amber-300 font-semibold bg-amber-950/40 p-3 rounded-xl border border-amber-500/40";
    statusEl.classList.remove("hidden");
    statusEl.textContent = "Conectando con GitHub y actualizando perfumes.json...";
  }

  try {
    // 1. Obtener SHA actual del archivo en GitHub
    const getRes = await fetch("https://api.github.com/repos/keliel627-star/perfumes-arabes/contents/perfumes.json", {
      headers: {
        "Authorization": `token ${token}`,
        "Accept": "application/vnd.github.v3+json"
      }
    });

    if (!getRes.ok) {
      throw new Error(`Error ${getRes.status}: Token inválido o sin permisos en el repositorio.`);
    }

    const getData = await getRes.json();
    const sha = getData.sha;

    // 2. Codificar JSON en Base64 seguro para UTF-8 (soporta tildes y caracteres especiales)
    const jsonString = JSON.stringify(perfumes, null, 2);
    const contentBase64 = btoa(unescape(encodeURIComponent(jsonString)));

    // 3. Enviar actualización a GitHub
    const putRes = await fetch("https://api.github.com/repos/keliel627-star/perfumes-arabes/contents/perfumes.json", {
      method: "PUT",
      headers: {
        "Authorization": `token ${token}`,
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Actualización de catálogo desde Panel de Administración (Kelyscent)",
        content: contentBase64,
        sha: sha
      })
    });

    if (!putRes.ok) {
      const errData = await putRes.json();
      throw new Error(errData.message || "Error al subir cambios a GitHub");
    }

    // 2. Enviar actualización de settings.json (fotos de portada, historia y tienda) a GitHub
    try {
      let settingsSha = null;
      const getSet = await fetch("https://api.github.com/repos/keliel627-star/perfumes-arabes/contents/settings.json", {
        headers: { "Authorization": `token ${token}`, "Accept": "application/vnd.github.v3+json" }
      });
      if (getSet.ok) {
        const setData = await getSet.json();
        settingsSha = setData.sha;
      }

      const settingsString = JSON.stringify(settings, null, 2);
      const settingsBase64 = btoa(unescape(encodeURIComponent(settingsString)));
      const putSetBody = {
        message: "Actualización de fotos de portada y configuración desde Panel de Administración (Kelyscent)",
        content: settingsBase64
      };
      if (settingsSha) putSetBody.sha = settingsSha;

      await fetch("https://api.github.com/repos/keliel627-star/perfumes-arabes/contents/settings.json", {
        method: "PUT",
        headers: {
          "Authorization": `token ${token}`,
          "Accept": "application/vnd.github.v3+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(putSetBody)
      });
    } catch (eSet) {
      console.warn("Aviso al actualizar settings.json:", eSet);
    }

    if (statusEl) {
      statusEl.className = "text-xs text-emerald-300 font-bold bg-emerald-950/50 p-3 rounded-xl border border-emerald-500/40";
      statusEl.innerHTML = '🎉 <b>¡Publicado con éxito en GitHub!</b> Catálogo y fotos de portada actualizados. En unos 30 segundos estará visible en todos los teléfonos y ordenadores del mundo.';
    }
    showToast("🎉 ¡Catálogo y fotos publicados globalmente!");
  } catch (err) {
    console.error("Error al publicar:", err);
    if (statusEl) {
      statusEl.className = "text-xs text-red-300 font-semibold bg-red-950/50 p-3 rounded-xl border border-red-500/40";
      statusEl.classList.remove("hidden");
      statusEl.textContent = "❌ " + err.message;
    }
    showToast("⚠️ " + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up mr-1"></i> Publicar en GitHub Ahora';
    }
  }
}

// ==========================================================================
// GESTIÓN DE BANNERS Y FOTOS DE LA WEB (PORTADA & HISTORIA)
// ==========================================================================
function loadBannersForm() {
  // Hero
  const heroImg = document.getElementById("heroImagePreview");
  const heroUrl = document.getElementById("heroImageUrl");
  const heroBadge = document.getElementById("heroBadgeInput");
  const heroTitle = document.getElementById("heroTitleInput");
  const heroVolume = document.getElementById("heroVolumeInput");
  const heroDesc = document.getElementById("heroDescInput");

  if (heroImg && settings.heroImage) heroImg.src = settings.heroImage;
  if (heroUrl && settings.heroImage && !settings.heroImage.startsWith("data:")) heroUrl.value = settings.heroImage;
  if (heroBadge) heroBadge.value = settings.heroBadge || "Edición de Colección";
  if (heroTitle) heroTitle.value = settings.heroTitle || "Hawas Fire";
  if (heroVolume) heroVolume.value = settings.heroVolume || "100ml Eau de Parfum";
  if (heroDesc) heroDesc.value = settings.heroDesc || "";
  updateHeroPreviewTexts();

  // Story
  const storyImg = document.getElementById("storyImagePreview");
  const storyUrl = document.getElementById("storyImageUrl");
  const storyTitle = document.getElementById("storyTitleInput");
  const storyDesc = document.getElementById("storyDescInput");

  if (storyImg && settings.storyImage) storyImg.src = settings.storyImage;
  if (storyUrl && settings.storyImage && !settings.storyImage.startsWith("data:")) storyUrl.value = settings.storyImage;
  if (storyTitle) storyTitle.value = settings.storyTitle || "Maceración Tradicional";
  if (storyDesc) storyDesc.value = settings.storyDesc || "Aceites concentrados destilados gota a gota para lograr la máxima longevidad en piel.";
  updateStoryPreviewTexts();
}

function updateHeroPreviewTexts() {
  const badge = document.getElementById("heroBadgeInput")?.value || "";
  const title = document.getElementById("heroTitleInput")?.value || "";
  const volume = document.getElementById("heroVolumeInput")?.value || "";
  const desc = document.getElementById("heroDescInput")?.value || "";

  const pBadge = document.getElementById("heroPreviewBadge");
  const pTitle = document.getElementById("heroPreviewTitle");
  const pVolume = document.getElementById("heroPreviewVolume");
  const pDesc = document.getElementById("heroPreviewDesc");

  if (pBadge) pBadge.textContent = badge;
  if (pTitle) pTitle.textContent = title;
  if (pVolume) pVolume.textContent = volume;
  if (pDesc) pDesc.textContent = desc;
}

function updateStoryPreviewTexts() {
  const title = document.getElementById("storyTitleInput")?.value || "";
  const desc = document.getElementById("storyDescInput")?.value || "";

  const pTitle = document.getElementById("storyPreviewTitle");
  const pDesc = document.getElementById("storyPreviewDesc");

  if (pTitle) pTitle.textContent = title;
  if (pDesc) pDesc.textContent = desc;
}

function saveHeroBanner() {
  const preview = document.getElementById("heroImagePreview");
  const urlInput = document.getElementById("heroImageUrl");
  const badgeInput = document.getElementById("heroBadgeInput");
  const titleInput = document.getElementById("heroTitleInput");
  const volumeInput = document.getElementById("heroVolumeInput");
  const descInput = document.getElementById("heroDescInput");

  const newImg = preview ? preview.src : (urlInput ? urlInput.value.trim() : "");
  if (newImg) settings.heroImage = newImg;
  if (badgeInput) settings.heroBadge = badgeInput.value.trim();
  if (titleInput) settings.heroTitle = titleInput.value.trim();
  if (volumeInput) settings.heroVolume = volumeInput.value.trim();
  if (descInput) settings.heroDesc = descInput.value.trim();

  saveSettings();
  showToast("✅ Foto y textos de Portada guardados con éxito");
}

function saveStoryBanner() {
  const preview = document.getElementById("storyImagePreview");
  const urlInput = document.getElementById("storyImageUrl");
  const titleInput = document.getElementById("storyTitleInput");
  const descInput = document.getElementById("storyDescInput");

  const newImg = preview ? preview.src : (urlInput ? urlInput.value.trim() : "");
  if (newImg) settings.storyImage = newImg;
  if (titleInput) settings.storyTitle = titleInput.value.trim();
  if (descInput) settings.storyDesc = descInput.value.trim();

  saveSettings();
  showToast("✅ Foto y textos de Historia guardados con éxito");
}

// ==========================================================================
// TABS Y NAVEGACIÓN
// ==========================================================================
function switchTab(tabId) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.add("hidden"));
  document.querySelectorAll(".tab-button").forEach(b => {
    b.classList.remove("bg-[#D4AF37]", "text-dark-950", "active");
    b.classList.add("text-gray-400");
  });

  const activePanel = document.getElementById(`tabContent-${tabId}`);
  const activeBtn = document.getElementById(`tabBtn-${tabId}`);

  if (activePanel) activePanel.classList.remove("hidden");
  if (activeBtn) {
    activeBtn.classList.add("bg-[#D4AF37]", "text-dark-950", "active");
    activeBtn.classList.remove("text-gray-400");
  }

  if (tabId === "banners") {
    loadBannersForm();
  }
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

function setupListeners() {
  // Escuchar si entran pedidos desde index.html en otra pestaña
  window.addEventListener("storage", (e) => {
    if (e.key === "alSultan_orders") {
      loadData();
      renderOrders();
      updateKpis();
      showToast("🔔 ¡Ha entrado un nuevo pedido de un cliente!");
    }
  });

  // Previsualización de imagen propia
  const addImg = document.getElementById("addImageUrl");
  const addPrev = document.getElementById("addImagePreview");
  if (addImg && addPrev) {
    addImg.addEventListener("input", (e) => {
      const url = e.target.value.trim();
      if (url.startsWith("http")) {
        addPrev.src = url;
        addPrev.classList.remove("hidden");
      } else {
        addPrev.classList.add("hidden");
      }
    });
  }
}

// Iniciar al cargar
document.addEventListener("DOMContentLoaded", initAdmin);
