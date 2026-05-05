(() => {
  const faqSection = document.getElementById('faq');
  if (!faqSection) return;
  faqSection.querySelectorAll(':scope > div').forEach((item) => {
    item.classList.add('faq-item');
    const heading = item.querySelector('h3');
    const answer = item.querySelector('p');
    if (!heading || !answer) return;

    const button = document.createElement('button');
    button.className = 'faq-question';
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span>' + heading.textContent + '</span><span>+</span>';

    const panel = document.createElement('div');
    panel.className = 'faq-answer';
    panel.hidden = true;
    panel.appendChild(answer);

    heading.replaceWith(button);
    item.appendChild(panel);

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.querySelector('span:last-child').textContent = open ? '+' : '-';
      panel.hidden = open;
    });
  });
})();
