# 👑 AL-SULTAN PARFUMS — Tienda Web & Panel de Gestión

Tienes **2 páginas independientes y totalmente sincronizadas** para tu negocio de perfumes árabes:

---

## 📄 Las 2 Páginas de tu Proyecto

### 1. 🛍️ Página de Clientes (Catálogo & Contacto): [`index.html`](file:///C:/Users/kelie/.gemini/antigravity/scratch/perfumes-arabes/index.html)
> **Es la página que compartes con tus clientes.**
* **Sin pagos en la web:** Los clientes **no pagan en la web**. Pueden ver todo el catálogo, las fotos de alta gama, las notas olfativas y los **precios actualizados**.
* **Comprar por Contacto Directo:**
  * En cada perfume tienen el botón verde **"Pedir"** (WhatsApp), que abre directamente un chat contigo con el nombre del perfume, marca y precio pre-rellenados.
  * También pueden añadir varios perfumes a **"Mi Selección"** y enviarte la lista completa en un solo mensaje de WhatsApp o por Correo para coordinar la compra y el envío.
  * Teléfono directo para llamadas y botón flotante de WhatsApp siempre visible.
* **Sin acceso de administración:** Los clientes no ven ningún botón de gestión ni pueden modificar nada.

---

### 2. ⚙️ Página de Gestión (Tu Panel Privado): [`admin.html`](file:///C:/Users/kelie/.gemini/antigravity/scratch/perfumes-arabes/admin.html)
> **Es tu panel de control exclusivo donde tú gestionas precios y catálogo.**
* **Seguridad por PIN:** Al entrar te solicita tu PIN de administrador (PIN inicial por defecto: **`1234`**).
* **Gestión Rápida de Precios:**
  * Casilla de **Precio de Venta** directa en cada perfume: escribes el nuevo precio y haces clic en **Guardar**.
  * Casilla de **Precio Anterior / Oferta** (para mostrar rebajas tachadas en la tienda).
  * Control de **Stock** (cambia con 1 clic entre *✓ En Stock* y *✕ Agotado*).
* **Añadir Nuevos Perfumes:**
  * Formulario completo para subir nuevos perfumes con nombre, marca, precio, pirámide olfativa (Salida, Corazón, Fondo), descripción y etiqueta (*✨ Novedad*, *Bestseller*, etc.).
  * Selector con fotos de frascos de lujo árabes o casilla para poner tu propia foto.
* **Bandeja de Consultas y Pedidos:**
  * Registra las solicitudes enviadas por los clientes desde la web.
  * Botón directo *"Abrir WhatsApp con Cliente"* para responderles rápidamente.
* **Configuración de Tienda:**
  * Modifica el número de WhatsApp donde te llegan los mensajes de los clientes, tu correo y tu PIN de seguridad.

---

## ⚡ ¿Cómo se comunican las dos páginas?

Ambas páginas comparten la misma base de datos en tu navegador (`localStorage`):
* En cuanto cambias un precio o añades un perfume en **`admin.html`**, se actualiza **en tiempo real** en **`index.html`**.

---

## 🚀 ¿Cómo abrirlas en tu equipo?

1. Ve a la carpeta:
   `C:\Users\kelie\.gemini\antigravity\scratch\perfumes-arabes\`
2. Haz doble clic en **`index.html`** para ver la tienda de los clientes.
3. Haz doble clic en **`admin.html`** para entrar a tu panel de gestión (PIN: `1234`).
