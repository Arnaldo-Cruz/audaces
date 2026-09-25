// Carrossel simples de projetos (setas apenas dão scroll horizontal)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelector('.cards');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (prevBtn && nextBtn && cards) {
    nextBtn.addEventListener('click', () => {
      cards.scrollBy({ left: 300, behavior: 'smooth' });
    });
    prevBtn.addEventListener('click', () => {
      cards.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }
});
