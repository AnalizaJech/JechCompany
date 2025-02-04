/* 
    SCRIPT: menú móvil + link activo 
*/

  // 1. Botón hamburguesa: mostrar/ocultar menú móvil
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('translate-x-full')) {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    } else {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
    }
  });

  // 2. Detección de página activa
  const currentPath = window.location.pathname; 
  // p.ej: "/index.html", "/rubros.html", etc.

  // Seleccionar todos los enlaces "nav-link"
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    // Si la ruta actual termina con "linkPath", marcamos como activo
    if (currentPath.endsWith(linkPath)) {
      // Le ponemos color hover (ej. #22D3EE) de forma permanente
      link.classList.add('text-[#22D3EE]');
    }
  });
