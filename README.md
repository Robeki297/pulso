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

## Housing affordability — ArubaListings, September 30, 2026

Aruba uses an observed listing of exactly 100 m² built-up area, not a price-per-m² size adjustment. ArubaListings was checked on September 30, 2026 for available House listings with exactly 100 m² of reported built-up area. One match was found: Villa Baranca 19, Paradera (MLS AW1003671), asking US$450,000, with a 333 m² lot. Both its facts and description confirm 100 m²; this is built-up area, not independently measured interior living area. Condominiums, land and unavailable listings are excluded. This is a single listing example, not an estimate of Aruba’s market median or completed sale prices. The asking price includes the property and land. At the CBA parity of Afl. 1.79 per US dollar, the price is Afl. 805,500.

Source: https://arubalistings.com/sale/paradera/house-3671-villa-baranca-19

Calculation: US$450,000 × 1.79 = Afl. 805,500. CBS median monthly wage (2024): Afl. 2,912; annualised = Afl. 34,944. Ratio = 23.0512 years of one median wage, or 11.5256 for a two-wage scenario. Individual administrative wages differ from OECD gross household disposable income per person. No wage growth is assumed.

CBS: https://cbs.aw/wp/index.php/2020/07/02/median-monthly-wages-by-economic-activity-in-afl-2015-2020/
CBA parity: https://www.cbaruba.org/about-us-a-brief-history-of-the-bank/

OECD: https://housingpolicytoolkit.oecd.org/1.H_market.html
Workbook: https://housingpolicytoolkit.oecd.org/figures/1.H_market/1.H_market_01_HP2Income.xlsx
Use unrounded column C only where column F equals 2022: 29 countries. Australia and Estonia (2021) are excluded. No 2020 or 2021 data are displayed. These are absolute 100 m² price/income ratios, not the OECD indexed series. Household-sector income is per capita; gross means before fixed-capital consumption, not before personal income tax. Underlying methodology: https://economy-finance.ec.europa.eu/system/files/2019-09/dp101_en_houselev.pdf section 4.1 and Annex 5.

Source dates and income concepts differ; the chart is contextual and not a harmonised ranking. Static snapshot, calculations by Pulso.
