export default function menuMobile() {
  const btnMobile = document.getElementById('btn-mobile');
  const btnMobileClose = document.getElementById('btn-mobile-close');
  const menuList = document.getElementById('header-menu-mobile-ctn');
  const overlay = document.getElementById('overlay');
  const eventos = ['click', 'touchstart'];

  function ativarHamburguer(event) {
    event.preventDefault();
    const ativar = menuList.classList.contains('open');
    menuList.classList.toggle('open', !ativar);
    btnMobile.classList.toggle('open', !ativar);
    overlay.style.display = ativar ? 'none' : 'block';

    if (!ativar) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    btnMobile.setAttribute('aria-expanded', !ativar);
  }

  function handleClickOutside(event) {
    if (!menuList.contains(event.target) && !btnMobile.contains(event.target) && !btnMobileClose.contains(event.target)) {
      fecharMenu();
    }
  }

  function fecharMenu() {
    menuList.classList.remove('open');
    btnMobile.classList.remove('open');
    overlay.style.display = 'none';
    document.removeEventListener('click', handleClickOutside);
  }

  eventos.forEach((evento) => {
    btnMobile.addEventListener(evento, ativarHamburguer);
  });

  eventos.forEach((evento) => {
    btnMobileClose.addEventListener(evento, fecharMenu);
  });
}
