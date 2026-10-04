/* ==========================================================================
   AL-SULTAN PARFUMS - LOGICA DEL PANEL DE ADMINISTRACIÓN (ADMIN.JS)
   Gestión Rápida de Precios, Catálogo, Pedidos de Clientes y Configuración
   ========================================================================== */

// Catálogo por defecto si no existe en localStorage
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
    inStock: true,
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
    inStock: true,
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
    inStock: true,
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
    inStock: true,
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
    inStock: true,
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
    inStock: true,
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
    inStock: true,
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
    inStock: true,
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80",
    topNotes: "Heliotropo, Orquídea salvaje, Mandarina fresca",
    heartNotes: "Acorde gourmand de frutas tropicales, Malvavisco",
    baseNotes: "Vainilla suave, Sándalo, Almizcle esponjoso",
    description: "Una caricia dulce y femenina. Famoso por su aroma a batido de fresas cremoso con orquídeas y vainilla suave. Extremadamente adictivo, delicado y duradero para uso diario o citas especiales."
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
  storeName: "AL-SULTAN PARFUMS",
  sellerPhone: "34612345678",
  sellerEmail: "pedidos@alsultanparfums.com",
  freeShippingThreshold: 50.00,
  shippingCost: 4.95,
  currency: "€",
  adminPin: "1234"
};

// ==========================================================================
// INICIALIZACIÓN Y SEGURIDAD (PIN)
// ==========================================================================
function initAdmin() {
  loadData();
  checkAuth();
  populatePresets();
  setupListeners();
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

// ==========================================================================
// CARGA Y GUARDADO DE DATOS (LOCALSTORAGE)
// ==========================================================================
function loadData() {
  // Configuración
  const savedSettings = localStorage.getItem("alSultan_settings");
  if (savedSettings) {
    try {
      settings = { ...settings, ...JSON.parse(savedSettings) };
    } catch (e) {
      console.error(e);
    }
  }

  // Perfumes
  const savedPerfumes = localStorage.getItem("alSultan_perfumes");
  if (savedPerfumes) {
    try {
      perfumes = JSON.parse(savedPerfumes);
    } catch (e) {
      perfumes = [...DEFAULT_PERFUMES];
    }
  } else {
    perfumes = [...DEFAULT_PERFUMES];
    savePerfumes();
  }

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

function savePerfumes() {
  localStorage.setItem("alSultan_perfumes", JSON.stringify(perfumes));
}

function saveSettings() {
  localStorage.setItem("alSultan_settings", JSON.stringify(settings));
}

function saveOrders() {
  localStorage.setItem("alSultan_orders", JSON.stringify(orders));
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
      <!-- Perfume & Marca -->
      <td class="p-3.5 flex items-center gap-3">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover rounded-lg bg-black/60 border border-white/10 flex-shrink-0" onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'" />
        <div>
          <span class="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">${item.brand}</span>
          <span class="font-bold text-white text-sm block">${item.name}</span>
          <span class="text-[11px] text-gray-500">${item.volume || '100ml EDP'}</span>
        </div>
      </td>

      <!-- Categoría -->
      <td class="p-3.5">
        <span class="bg-white/5 px-2.5 py-1 rounded-full text-[11px] text-gray-300 font-medium border border-white/5">
          ${item.category}
        </span>
      </td>

      <!-- PRECIO DE VENTA (EDITABLE RÁPIDO) -->
      <td class="p-3.5 text-center">
        <div class="inline-flex items-center gap-1.5">
          <input type="number" step="0.01" id="price_${item.id}" value="${item.price}" 
            class="w-20 bg-black/80 border border-emerald-500/40 rounded-lg px-2 py-1.5 text-center font-bold text-emerald-400 text-xs focus:outline-none focus:border-emerald-400" 
          />
          <span class="text-gray-400 text-xs font-bold">${settings.currency}</span>
        </div>
      </td>

      <!-- PRECIO TACHADO / OFERTA (EDITABLE RÁPIDO) -->
      <td class="p-3.5 text-center">
        <div class="inline-flex items-center gap-1.5">
          <input type="number" step="0.01" id="oldPrice_${item.id}" value="${item.oldPrice || ''}" placeholder="Sin oferta" 
            class="w-20 bg-black/80 border border-white/10 rounded-lg px-2 py-1.5 text-center text-gray-400 text-xs focus:outline-none focus:border-[#D4AF37]" 
          />
          <span class="text-gray-500 text-xs">${settings.currency}</span>
        </div>
      </td>

      <!-- ETIQUETA / BADGE -->
      <td class="p-3.5 text-center">
        <input type="text" id="badge_${item.id}" value="${item.badge || ''}" placeholder="Ej: Bestseller" 
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
          <!-- Botón Guardar Precio Rápido -->
          <button onclick="saveQuickPrice('${item.id}')" class="btn-gold px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1" title="Guardar cambios de precio y etiqueta">
            <i class="fa-solid fa-floppy-disk"></i>
            <span class="hidden xl:inline">Guardar</span>
          </button>

          <!-- Botón Editar Todo -->
          <button onclick="openEditModal('${item.id}')" class="bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-lg text-xs transition-colors" title="Editar descripción, notas y fotos">
            <i class="fa-solid fa-pen-to-square"></i>
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

function saveQuickPrice(id) {
  const item = perfumes.find(p => p.id === id);
  if (!item) return;

  const priceInput = document.getElementById(`price_${id}`);
  const oldPriceInput = document.getElementById(`oldPrice_${id}`);
  const badgeInput = document.getElementById(`badge_${id}`);

  const newPrice = parseFloat(priceInput?.value);
  if (isNaN(newPrice) || newPrice <= 0) {
    showToast("⚠️ Introduce un precio de venta válido");
    return;
  }

  const newOldPrice = oldPriceInput?.value ? parseFloat(oldPriceInput.value) : null;
  const newBadge = badgeInput?.value.trim() || "";

  item.price = newPrice;
  item.oldPrice = newOldPrice;
  item.badge = newBadge;

  savePerfumes();
  updateKpis();
  showToast(`✅ Precio de "${item.name}" actualizado a ${newPrice.toFixed(2)}${settings.currency}`);
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

function selectPresetImage(url) {
  const input = document.getElementById("addImageUrl");
  const preview = document.getElementById("addImagePreview");
  if (input) input.value = url;
  if (preview) {
    preview.src = url;
    preview.classList.remove("hidden");
  }
  showToast("Imagen de frasco seleccionada");
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
  const preview = document.getElementById("addImagePreview");
  if (preview) preview.classList.add("hidden");

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
  e.preventDefault();
  const id = document.getElementById("editId").value;
  const item = perfumes.find(p => p.id === id);
  if (!item) return;

  item.name = document.getElementById("editName").value.trim();
  item.brand = document.getElementById("editBrand").value.trim();
  item.volume = document.getElementById("editVolume").value.trim();
  item.price = parseFloat(document.getElementById("editPrice").value);
  item.oldPrice = document.getElementById("editOldPrice").value ? parseFloat(document.getElementById("editOldPrice").value) : null;
  item.category = document.getElementById("editCategory").value;
  item.family = document.getElementById("editFamily").value;
  item.badge = document.getElementById("editBadge").value.trim();
  item.image = document.getElementById("editImage").value.trim();
  item.topNotes = document.getElementById("editTopNotes").value.trim();
  item.heartNotes = document.getElementById("editHeartNotes").value.trim();
  item.baseNotes = document.getElementById("editBaseNotes").value.trim();
  item.description = document.getElementById("editDescription").value.trim();

  savePerfumes();
  updateKpis();
  renderPricingTable();
  closeEditModal();
  showToast(`✅ Cambios guardados para "${item.name}"`);
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
  document.getElementById("setStoreName").value = settings.storeName || "AL-SULTAN PARFUMS";
  document.getElementById("setPhone").value = settings.sellerPhone || "34612345678";
  document.getElementById("setEmail").value = settings.sellerEmail || "pedidos@alsultanparfums.com";
  document.getElementById("setFreeShipping").value = settings.freeShippingThreshold || 50;
  document.getElementById("setShippingCost").value = settings.shippingCost || 4.95;
}

function handleSaveStoreSettings(e) {
  e.preventDefault();

  settings.storeName = document.getElementById("setStoreName").value.trim() || "AL-SULTAN PARFUMS";
  settings.sellerPhone = document.getElementById("setPhone").value.trim() || "34612345678";
  settings.sellerEmail = document.getElementById("setEmail").value.trim() || "pedidos@alsultanparfums.com";
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
