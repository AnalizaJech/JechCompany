/* 
    SCRIPT: menú móvil + link activo 
*/

  // Botones de apertura/cierre
  const menuOpenBtn = document.getElementById('menuOpenBtn');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuOpenBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
  });

  menuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
  });

  // Activar color y flecha en la opcion del nav
  document.addEventListener("DOMContentLoaded", function () {
    // Obtener la ruta actual (nombre del archivo)
    const currentPath = window.location.pathname.split('/').pop();
    console.log("🔎 Ruta actual detectada:", currentPath);
  
    // Seleccionar todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      // Normalizar la ruta del enlace
      const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname.split('/').pop();
      console.log(`🔍 Comparando: ${currentPath} con ${linkPath}`);
  
      if (currentPath === linkPath) {
        console.log(`✅ Página activa detectada: ${linkPath}`);
  
        // Aplicar estilos dinámicos con Tailwind
        link.classList.add('text-cyan-400', 'font-semibold');
  
        // Agregar flecha si no está presente
        if (!link.textContent.trim().includes("→")) {
          link.innerHTML += " →";
        }
      }
    });
  });
  