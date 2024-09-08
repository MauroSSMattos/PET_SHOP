document.querySelectorAll('.duvida h3').forEach(h3 => {
    h3.addEventListener('click', () => {
      const duvida = h3.parentElement;
      duvida.classList.toggle('open');
    });
  });