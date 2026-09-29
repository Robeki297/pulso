# Pulso

Di e Economia Arubano.

An interactive dashboard for Aruba’s economy and tourism, with GDP, inflation, reserves, current-account payment coverage, credit growth and tourism charts.

## Hosting

Website address: https://robeki297.github.io/pulso/

Repository: https://github.com/Robeki297/pulso

Static HTML, CSS and JavaScript; no build or dependencies required. In GitHub Settings → Pages, select Deploy from a branch, main, and /(root).

## Data

Static snapshot checked 27 September 2026; it does not refresh automatically. Official sources, definitions, observation dates and estimate/forecast labels appear in the dashboard. Sources include CBS Aruba, the Central Bank of Aruba and ATA monthly reports.

## Updates

Edit index.html, style.css, app.js and data.js. Preserve source attribution and distinguish published observations, estimates, forecasts and calculated values. Verify chart controls and calculations before publishing.

## Baseline website / restore

The original website is preserved on branch `baseline-website`, commit `7b56c8e828dc3bbea044f940f31531f12139327b`. To restore, copy its index.html, app.js, data.js and style.css onto main and commit, preserving history. GitHub Pages publishes main from /(root). Do not edit the baseline branch.

## September 28 update

GDP per capita: 2025 CBA nominal GDP estimate Afl. 7,912.1m / 1.79 AWG per USD / CBS end-Q2 population 109,435 = US$40,390.80. Midyear population is a proxy for annual average; this is a derived estimate at current market exchange rates, not PPP. User chose market-rate conversion instead of Penn World Table PPP.

Reserves now run January 2024–July 2026 (31 observations). Added 2024 from CBA December 2024 Monthly Tables, table 4 column 8, https://www.cbaruba.org/readBlob.do?id=17505.
Credit growth now covers February–July 2026, the six latest available months. February–April current/prior balances are from April 2026 table 1, https://www.cbaruba.org/readBlob.do?id=18777; May–July remain from July 2026. Growth is (current/same-month-prior-year - 1)*100; no interpolation.
Population: https://cbs.aw/wp/index.php/2025/12/15/test-births/
Exchange rate: https://www.cbaruba.org/about-us-a-brief-history-of-the-bank/
