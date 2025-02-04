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

  // Detección de página activa => cambiar color y añadir flecha "→"
  const currentPath = window.location.pathname;  
  // Por ejemplo "/index.html", "/rubros.html"
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.endsWith(linkPath)) {
      // color cian + flecha. Ej: "Inicio →"
      link.classList.add('text-[#22D3EE]', 'font-semibold');
      // Añadir una flecha al final
      link.textContent = link.textContent + ' →';
    }
  });