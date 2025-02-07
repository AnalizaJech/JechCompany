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

  document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.replace(/^\/+/, ''); // Normaliza la ruta
    console.log("🔎 Ruta actual detectada:", currentPath); 
  
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').replace(/^\/+/, ''); 
      console.log(`🔍 Comparando: ${currentPath} con ${linkPath}`);
  
      if (currentPath === linkPath) { 
        console.log(`✅ Página activa detectada: ${linkPath}`); 
        
        // Asegurar que Tailwind aplica el estilo dinámico correctamente
        link.classList.add('text-cyan-400', 'font-semibold');
  
        // Evitar duplicar la flecha en recargas
        if (!link.textContent.includes("→")) {
          link.innerHTML += " →"; 
        }
      }
    });
  });
  