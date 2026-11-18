function openModal(img, bgElement) {
  if (!img) return;
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  // 元の要素の背景色（#e9eedb など）をポップアップ画像にも適用する
  if (bgElement) {
    modalImg.style.backgroundColor = getComputedStyle(bgElement).backgroundColor;
  }
  modal.classList.add('is-open');
}

// 1. 4つのカード（.trait-card）のクリック設定
document.querySelectorAll('.trait-card').forEach(card => {
  card.addEventListener('click', () => {
    const visual = card.querySelector('.trait-visual');
    const img = card.querySelector('.trait-visual img');
    openModal(img, visual);
  });
});

// 2. .intro-art のクリック設定
const introArt = document.querySelector('.intro-art');
if (introArt) {
  introArt.addEventListener('click', () => {
    const img = introArt.querySelector('img');
    openModal(img, introArt);
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
