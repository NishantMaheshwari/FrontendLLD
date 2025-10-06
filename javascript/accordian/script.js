const accordian = document.querySelector('.acc-container');

const toggles = document.querySelectorAll('.acc-toggle');

Array.from(toggles).forEach((toggle, index) => {
  toggle.addEventListener('click', (event) => {
    const content = toggle.parentElement.nextElementSibling;
    content.classList.toggle('acc-open-content');
    const isOpen = content.classList.contains('acc-open-content');
    toggle.textContent = isOpen ? 'Hide' : 'Show';
    if (isOpen) {
      content.style.height = content.scrollHeight + 'px';
      Array.from(toggles).forEach((sibToggle, ind) => {
        if (ind !== index) {
          const sibContent = sibToggle.parentElement.nextElementSibling;
          const isOpen = sibContent.classList.contains('acc-open-content');
          if (isOpen) {
            sibToggle.textContent = 'Show';
            sibContent.style.height = 0;
            sibContent.classList.remove('acc-open-content')
          }
        }
      })
    }
    else content.style.height = 0;
  })
});