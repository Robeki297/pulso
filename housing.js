/* Standalone housing module: leaves the existing economic explorer unchanged. */
(() => {
  'use strict';
  const byId = id => document.getElementById(id);
  const number = (v, digits = 0) => v.toLocaleString('en-US', {minimumFractionDigits: digits, maximumFractionDigits: digits});
  const annualWage = HOUSING.monthlyWageAWG * 12;
  const selectedCountries = new Set(['CAN','DEU','FRA','GBR','NLD','NZL','USA']);
  const peers = [...HOUSING.peers].sort((a,b) => a.name.localeCompare(b.name));
  function bar(name, value, detail, aruba = false, selected = false) {
    const row = document.createElement('div');
    row.className = 'housing-bar' + (aruba ? ' housing-bar-aruba' : '') + (selected ? ' housing-bar-selected' : '');
    const label = document.createElement('div');
    label.className = 'housing-bar-label';
    const title = document.createElement('span'); title.textContent = name;
    const amount = document.createElement('strong'); amount.textContent = number(value,1) + '×';
    label.append(title,amount);
    const track = document.createElement('div'); track.className = 'housing-track'; track.setAttribute('aria-hidden','true');
    const fill = document.createElement('div'); fill.style.width = (value / 25 * 100) + '%'; track.append(fill);
    const note = document.createElement('small'); note.textContent = detail;
    row.append(label,track,note);
    return row;
  }
  function render() {
    const earners = Number(byId('housing-earners').value);
    const priceAWG = HOUSING.pricePerM2AWG * HOUSING.areaM2;
    const income = annualWage * earners;
    byId('housing-ratio').textContent = number(priceAWG/income,1) + '×';
    byId('housing-ratio-label').textContent = earners === 1 ? 'Years of one annualised median wage' : 'Years of two median wages · scenario';
    byId('housing-price').textContent = 'Afl. ' + number(priceAWG);
    byId('housing-price-awg').textContent = 'Afl. ' + number(HOUSING.pricePerM2AWG) + '/m² × 100 m² · Sep 2026';
    byId('housing-income').textContent = 'Afl. ' + number(income);
    byId('housing-income-label').textContent = 'Afl. 2,912 × 12 × ' + earners + ' · 2024 wage';
    byId('housing-formula').textContent = 'Afl. ' + number(HOUSING.pricePerM2AWG) + '/m² × 100 m² ÷ (Afl. 2,912 × 12 × ' + earners + ') = ' + number(priceAWG/income,2) + ' years.';
    byId('housing-aruba-bars').replaceChildren(
      bar('Aruba · one median wage', priceAWG/annualWage, '100 m² estimate · Sep 2026 price / 2024 wage', true, earners===1),
      bar('Aruba · two median wages', priceAWG/(annualWage*2), 'Illustrative household scenario', true, earners===2)
    );
    const shown = byId('housing-countries').value === 'all' ? peers : peers.filter(p => selectedCountries.has(p.code));
    byId('housing-oecd-bars').replaceChildren(...shown.map(p => bar(p.name,p.ratio,p.period + ' · 100 m² / income per person')));
  }
  byId('housing-table').replaceChildren(...peers.map(p => {
    const row = document.createElement('tr');
    [p.name,p.period,number(p.ratio,2)].forEach(value => {const td=document.createElement('td'); td.textContent=value; row.append(td);});
    return row;
  }));
  ['housing-earners','housing-countries'].forEach(id => byId(id).addEventListener('change',render));
  render();
})();
