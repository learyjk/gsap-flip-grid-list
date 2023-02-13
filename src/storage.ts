const layoutPref = localStorage.getItem('layoutPref');

if (!layoutPref) {
  localStorage.setItem('layoutPref', 'list');
} else {
    if (layoutPref === 'grid')
}
