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

## Housing affordability — scaled ArubaListings sample, September 30, 2026

We divide each available ArubaListings House asking price by its reported built-up area, take the equally weighted median, then multiply by 100 m² and Afl. 1.79 per US dollar. On September 30, 2026, 192 available House cards were found; 45 lacked built-up area, leaving 147 price/area records. We exclude Sero Blanco 215 (AW1002414), whose area units conflict between the facts and description, and the older Kibrahachastraat 5 duplicate (AW1001893; retain AW1000925). The resulting 145 listings have a median of US$2,647.66/m², giving about US$264,766 or Afl. 473,931 per 100 m². Calculations use unrounded values. This is the median of individual price/area ratios, not total prices divided by total area. Each included detail page reported an available House for sale. Separately classified villas, condominiums, apartments, land, rentals and unavailable listings are outside this sample.

Reported built-up area is not necessarily interior living area and may include covered spaces, guest units or other structures. Renovation and multi-unit properties classified as House remain included. Land is bundled into asking prices; differences in land, location, condition and size are not controlled. One known duplicate was removed; other cross-broker duplicates and reporting errors may remain. A scaled 100 m² estimate is not an observed price of exactly 100 m² homes or a representative national PIR. Asking prices are not completed sale prices.

Audit: housing-sample.json includes prices, areas, individual unit prices, URLs, source update dates and both exclusions. Formula: median(askingUSD / builtAreaM2) × 100 × 1.79 / (2912 × 12 × earners). Result: 13.5625787993 for one median wage and 6.7812893997 for two. Sample date is the retrieval date; individual listings can be older. This is a static snapshot.

CBS: https://cbs.aw/wp/index.php/2020/07/02/median-monthly-wages-by-economic-activity-in-afl-2015-2020/
2024 monthly administrative median wage = Afl. 2,912, annualised to Afl. 34,944. No wage growth assumed. Two earners is an illustrative scenario, not measured household income.
CBA parity: https://www.cbaruba.org/about-us-a-brief-history-of-the-bank/
ArubaListings: https://arubalistings.com/sale/all

OECD: https://housingpolicytoolkit.oecd.org/1.H_market.html
Workbook: https://housingpolicytoolkit.oecd.org/figures/1.H_market/1.H_market_01_HP2Income.xlsx
Use unrounded column C only where column F equals 2022: 29 countries. Australia and Estonia (2021) are excluded. No 2020 or 2021 data are displayed. Absolute 100 m² price/income ratios, not the indexed series. OECD household disposable income is per capita; gross means before fixed-capital consumption, not before personal income tax. Methodology: https://economy-finance.ec.europa.eu/system/files/2019-09/dp101_en_houselev.pdf section 4.1 and Annex 5.

Different dates and income concepts make these contextual comparisons, not a harmonised country ranking. Ratios are not mortgage repayment or saving periods.
