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

## Housing affordability — 100 m² revision, September 30, 2026

The Housing section uses `housing-data.js`, `housing.js`, and `housing.css`. Both panels refer to 100 m². Aruba is a standardised-size listing-price estimate, not a sample restricted to exactly 100 m² homes. The OECD panel uses 2022 observations only.

- Properstar, September 2026, houses (not apartments): Afl. 5,692/m². https://www.properstar.com.ph/aruba/house-price . The summary statistic is published even though time-series charts report no data. Sample count and detailed area definition are not disclosed. Multiplying this median unit price by 100 gives Afl. 569,200; it is not the observed median price conditional on 100 m². Do not imply constant unit prices across size, location or quality. Mercala's all-size median is no longer used.
- CBS table 7.4, total economy, December 31, 2024: Afl. 2,912/month, annualised to Afl. 34,944. https://cbs.aw/wp/index.php/2020/07/02/median-monthly-wages-by-economic-activity-in-afl-2015-2020/ . Verified published image: https://cbs.aw/wp/wp-content/uploads/2020/07/Median-monthly-wages-by-economic-activity-in-Afl.-2015-2024.png . Administrative wages, not household disposable income; no wage growth or tax adjustment.
- Calculation: 5692 × 100 / (2912 × 12) = 16.2889 years of one median wage; two-median-wage scenario = 8.1445. These are not mortgage repayment or saving periods.
- OECD Housing Policy Toolkit, first chart: https://housingpolicytoolkit.oecd.org/1.H_market.html . Source: https://housingpolicytoolkit.oecd.org/figures/1.H_market/1.H_market_01_HP2Income.xlsx . Sheet 1: use column C (unrounded ratio) only where column F (year) equals 2022. Do not use column E's integer-rounded figures or interpret the column C heading as all rows being 2022. 29 eligible countries. Australia and Estonia are excluded because their year is 2021. There are no 2020/2021 observations in the website dataset. The workbook has an incorrect sheet dimension and a missing drawing; read-only extraction with reset_dimensions reads the actual data without relying on the drawing.
- OECD's underlying HouseLev concept: price of a 100 m² dwelling / annual per-capita gross disposable income of households. See section 4.1 and Annex 5: https://economy-finance.ec.europa.eu/system/files/2019-09/dp101_en_houselev.pdf . This is household-sector income per person, not whole-household income or median worker wages. Gross refers to fixed-capital consumption, not before personal income taxes. The labels clarify the denominator more precisely than the earlier version.
- Default seven-country view: Canada, France, Germany, Netherlands, New Zealand, United Kingdom and United States. All 29 can be shown. Alphabetical order, no Aruba rank or OECD average. Both charts use a zero-based 0–25 scale. Different income concepts and years remain visible.

Update inputs, notes, source links, and observation labels together. Verify both wage scenarios, country coverage, source-year filtering and mobile layout. The other dashboard data is unchanged.
