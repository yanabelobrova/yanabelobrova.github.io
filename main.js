document.addEventListener("DOMContentLoaded", () => {
  console.log('JS загружен и DOM готов!');
  const words = [
    'баги (охота продолжается)',
    'приключения в проде',
    'пути улучшения',
    'смысл в куче логов'
  ];

  const el = document.querySelector('.dynamic-text');
  let index = 0;

  function typeWord(word, callback) {
    let i = 0;
    el.textContent = '';
    const interval = setInterval(() => {
      el.textContent += word[i];
      i++;
      if (i === word.length) {
        clearInterval(interval);
        setTimeout(callback, 1500);
      }
    }, 100);
  }

  function eraseWord(callback) {
    const interval = setInterval(() => {
      el.textContent = el.textContent.slice(0, -1);
      if (el.textContent.length === 0) {
        clearInterval(interval);
        setTimeout(callback, 500);
      }
    }, 50);
  }

  function loop() {
    typeWord(words[index], () => {
      eraseWord(() => {
        index = (index + 1) % words.length;
        loop();
      });
    });
  }

  loop();
});

