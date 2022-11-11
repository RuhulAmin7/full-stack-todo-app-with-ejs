const trs = document.querySelectorAll('tbody tr');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit');
[...trs].forEach((tr) => {
  tr.addEventListener('click', (e) => {
    if (tr.id === e.target.dataset.id) {
      submitBtn.innerText = 'Update';
      form.action = '/updatetask';

      [...tr.children].forEach((td) => {
        if (td.className === 'title') {
          form[0].value = td.textContent.trim();
        }
        if (td.className === 'priority') {
          form[1].selectedIndex =
            td.textContent.trim() === 'High'
              ? 1
              : td.textContent.trim() === 'Medium'
              ? 2
              : td.textContent.trim() === 'Low'
              ? 3
              : 0;
        }

        if (td.className === 'date') {
          form[2].value = new Date(td.textContent).toISOString().slice(0, 10);
        }
        form[3].value = tr.id;
      });
    }
  });
});
