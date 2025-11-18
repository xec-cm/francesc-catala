---
title: "CovidTag – Tracking SARS-CoV-2 variants in Spain"
description: "A public web application designed at IrsiCaixa to monitor the spread and replacement of SARS-CoV-2 variants across Spain. The platform aggregates genomic data from GISAID and provides an up-to-date view of how viral lineages circulate in each autonomous community over time. Users can visualize variant frequencies in each region, compare communities with Spain's overall status, track how new variants displace dominant lineages, and quantify sequenced samples per territory. Weekly updates ensure the dashboard reflects the most recent genomic evidence available."
image: "/covidtag.png"
technologies:
  - "R"
  - "Shiny"
  - "GISAID"
  - "PostgreSQL"
  - "Docker"
  - "AWS"
  - "GitHub Actions"
github: "https://github.com/MicrobialGenomics/covidapp"
demo: "http://covidtag.paseq.org/"
order: 3
---

**CovidTag** is a public web application designed at IrsiCaixa to monitor the spread and replacement of **SARS-CoV-2 variants across Spain**. The platform aggregates SARS-CoV-2 genomic data from the **GISAID** repository and provides an up-to-date view of how viral lineages circulate in each autonomous community over time. :contentReference[oaicite:0]{index=0}

The tool allows users to:
- Visualise the **frequency of major SARS-CoV-2 variants** in each Spanish region.
- Compare the situation of one community with the overall status of Spain.
- Track how new variants progressively **displace previously dominant lineages**.
- Quantify the **number of sequenced samples per territory**, an essential context for interpreting variant frequencies. :contentReference[oaicite:1]{index=1}  

CovidTag was conceived as a **bridge between genomic surveillance and decision-making**, supporting healthcare professionals, researchers and public health authorities with an accessible view of variant dynamics. At the same time, it offers the general public a transparent, regularly updated overview of the pandemic situation. Weekly updates powered by GISAID ensure that the dashboard reflects the most recent genomic evidence available. :contentReference[oaicite:2]{index=2}

As co-creator and data engineer, I contributed to the data-processing pipeline, the design of the visual outputs and the interpretation logic needed to contextualise sequencing density and variant prevalence across regions, turning raw genomic data into an actionable surveillance tool.
