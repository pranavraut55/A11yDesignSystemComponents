const flipCards = document.querySelectorAll('.flip-card');
  const announcement = document.getElementById('announcement');

  flipCards.forEach(flipCard => {
    flipCard.addEventListener('click', () => {
      flipCard.classList.toggle('flipped');
      const frontContent = flipCard.getAttribute('data-front');
      const backContent = flipCard.getAttribute('data-back');
      const isFlipped = flipCard.classList.contains('flipped');
      
      if (isFlipped) {
        announcement.textContent = `${backContent} is now visible.`;
      } else {
        announcement.textContent = `${frontContent} is now visible.`;
      }
    });

    flipCard.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        flipCard.classList.toggle('flipped');
        const frontContent = flipCard.getAttribute('data-front');
        const backContent = flipCard.getAttribute('data-back');
        const isFlipped = flipCard.classList.contains('flipped');
        
        if (isFlipped) {
          announcement.textContent = `${backContent} is now visible.`;
        } else {
          announcement.textContent = `${frontContent} is now visible.`;
        }
      }
    });

    flipCard.addEventListener('focus', () => {
      const frontContent = flipCard.getAttribute('data-front');
      announcement.textContent = `Card: ${frontContent}  Press Space or Enter to flip`;
    });

    flipCard.addEventListener('blur', () => {
      announcement.textContent = '';
    });
  });




