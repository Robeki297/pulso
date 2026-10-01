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

## Housing affordability — September 30, 2026

The Housing section uses `housing-data.js`, `housing.js`, and `housing.css`. It shows a calculated Aruba price-to-wage proxy and separate historical OECD absolute-ratio benchmarks. It does not rank Aruba against countries with different definitions or treat an index as years of income.

- CBS table 7.4, total economy, December 31, 2024: median monthly wage Afl. 2,912. Annualised denominator: Afl. 34,944. Source: https://cbs.aw/wp/index.php/2020/07/02/median-monthly-wages-by-economic-activity-in-afl-2015-2020/ . Verified against the published table image: https://cbs.aw/wp/wp-content/uploads/2020/07/Median-monthly-wages-by-economic-activity-in-Afl.-2015-2024.png . The download endpoint returned an HTML challenge; no values were taken from that response.
- Mercala, The Rising Floor: January–July 2026 median asking price US$599,500, 216 listings; July US$799,000, 41 listings. https://mercala.org/articles/the-rising-floor . North Star: January–June 2026 US$564,000, 182 listings. https://mercala.org/articles/north-star . Asking prices of newly observed houses for sale, at least US$50,000, covered brokerages. Period samples overlap and differ in coverage. Not transaction prices or the value of the complete housing stock.
- Base calculation: 599500 × 1.79 / (2912 × 12) = 30.7093 years of one median wage. Two-median-wage scenario: 15.3546. Wages remain at 2024 levels; no implicit 2026 wage estimate or household-income estimate. Annualisation is not observed annual earnings. Ratios do not measure saving time or mortgage affordability.
- OECD: Brick by Brick (2021), figure 4.1. Source workbook https://stat.link/wt4ulp, Sheet 1, rows where `year=2020`, column `P2I`. Store the `Date` column as the observation quarter, not as a publication date. 31 non-missing OECD-country values, 2020 Q2–Q4. The source measures average price of a 100 m² dwelling relative to average household disposable income. https://www.oecd.org/en/publications/brick-by-brick_b453b043-en/full-report/component-6.html . These historical research estimates are not current ratios and not the standard OECD 2015=100 series.
- Default benchmarks: Australia, Canada, France, Germany, Netherlands, New Zealand, United Kingdom and United States; users can show all 31. Alphabetical order prevents an implied Aruba country ranking. Both panels have a zero-based 0–45 scale, but their definitions and dates differ prominently.

Update the inputs, dates, visible method notes and source links together. Keep calculation precision until display. Verify all three price periods, both wage scenarios, all-country coverage, the underlying table and mobile layout. Existing GDP, tourism and other series are unchanged.
