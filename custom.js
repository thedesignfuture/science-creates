    // Resource Date Sorting
    document.querySelectorAll('.resource_filter').forEach(section => {
    const listWrapper = section.querySelector('.resurce_all_box [fs-cmsnest-element="list"]');
    if (!listWrapper) {
      console.warn('Date-sorting script: listWrapper not found in .resource_filter');
      return;
    }

    function parseDateText(s) {
      if (!s) return null;
      const parts = s.trim().split(/\s+/);
      if (parts.length === 3) {
        const [dayStr, monStr, yearStr] = parts;
        const d = parseInt(dayStr, 10);
        const y = parseInt(yearStr, 10);
        const monthNames = {
          Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
          Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
        };
        const monKey = monStr.slice(0, 3).charAt(0).toUpperCase() + monStr.slice(1, 3).toLowerCase();
        const m = monthNames[monKey];
        if (!isNaN(d) && !isNaN(y) && typeof m === 'number') {
          return new Date(y, m, d);
        }
      }
      const parsed = new Date(s);
      if (!isNaN(parsed)) {
        return parsed;
      }
      return null;
    }

    function getCurrentOrder() {
      const sel = section.querySelector('input[name="date-sort"]:checked');
      if (!sel) {
        return 'desc';
      }
      return (sel.id === 'Oldest') ? 'asc' : 'desc';
    }

    function sortByDate(order = 'desc') {
      const cards = Array.from(listWrapper.querySelectorAll('.w-dyn-item'));
      cards.sort((a, b) => {
        const ta = a.querySelector('.rsurce_dte')?.textContent.trim() || '';
        const tb = b.querySelector('.rsurce_dte')?.textContent.trim() || '';
        const da = parseDateText(ta);
        const db = parseDateText(tb);
        if (da === null && db === null) return 0;
        if (da === null) return (order === 'desc' ? 1 : -1);
        if (db === null) return (order === 'desc' ? -1 : 1);
        const na = da.getTime();
        const nb = db.getTime();
        return (order === 'desc') ? (nb - na) : (na - nb);
      });
      cards.forEach(c => listWrapper.appendChild(c));
    }
    const radioInputs = section.querySelectorAll('input[name="date-sort"]');
    radioInputs.forEach(radio => {
      radio.addEventListener('change', () => {
        section.querySelectorAll('label.w-radio').forEach(lbl => {
          lbl.classList.remove('w--redirected-checked');
        });
        const lab = radio.closest('label');
        if (lab) {
          lab.classList.add('w--redirected-checked');
        }
        const order = (radio.id === 'Oldest') ? 'asc' : 'desc';
        sortByDate(order);
      });
    });

    const defaultLatestRadio = section.querySelector('#Latest');
    if (defaultLatestRadio) {
      if (!section.querySelector('input[name="date-sort"]:checked')) {
        defaultLatestRadio.checked = true;
        const lab = defaultLatestRadio.closest('label');
        if (lab) lab.classList.add('w--redirected-checked');
      }
    }
    const loadMoreBtn = section.querySelector('.load_mre_bttn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        setTimeout(() => {
          sortByDate(getCurrentOrder());
        }, 500);
      });
    }
    sortByDate(getCurrentOrder());
  });
