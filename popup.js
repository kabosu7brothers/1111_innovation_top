const modal = document.getElementById('js-modal');
const modalImg = document.getElementById('js-modal-img');

document.querySelectorAll('.trait-card').forEach(card => {
  card.addEventListener('click', () => {
    const visual = card.querySelector('.trait-visual');
    const img = card.querySelector('.trait-visual img');
    
    if (img) {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      // クリックしたカードの背景色をポップアップ画像にも適用する
      if (visual) {
        modalImg.style.backgroundColor = getComputedStyle(visual).backgroundColor;
      }
      modal.classList.add('is-open');
    }
  });
});

// .manga（同じ形で追加）
const Comic = document.querySelector('.comic');
if (comic) {
  Comic.addEventListener('click', () => {
    const img = Manga.querySelector('img');
    
    if (img) {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalImg.style.backgroundColor = getComputedStyle(Comic).backgroundColor;
      modal.classList.add('is-open');
    }
  });
}

modal.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    modal.classList.remove('is-open');
  }
});
