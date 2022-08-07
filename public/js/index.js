const trs = document.querySelectorAll('tbody tr');
const form = document.getElementById('form');
[...trs].forEach((tr) => {
  tr.addEventListener('click', (e) => {
    if (tr.id === e.target.dataset.id) {
      [...tr.children].forEach((td) => {
        if (td.className === 'title') {
          form[0].value = td.textContent;
        }
        if (td.className === 'priority') {
          form[1].selectedIndex =
            td.textContent ===
            '\n                                    High\n                                '
              ? 1
              : td.textContent ===
                '\n                                    Medium\n                                '
              ? 2
              : td.textContent ===
                '\n                                    Low\n                                '
              ? 3
              : 0;
        }

        if (td.className === 'date') {
          form[2].value = new Date(td.textContent).toISOString().slice(0, 10);
        }
      });
    }
  });
});
