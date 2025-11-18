---
title: "dar – Differential Abundance Analysis by Consensus"
description: "An R/Bioconductor package designed to tackle robust differential abundance testing in microbiome research. Microbiome data are sparse, highly variable and compositional, making single-method approaches unstable. dar provides a consensus-based framework that integrates multiple state-of-the-art DA methods into pipeable, recipe-like workflows. Results can be aggregated using different consensus strategies like majority voting or weighted combinations, improving robustness, interpretability and reproducibility. Supports phyloseq and TreeSummarizedExperiment data structures with visualization tools and workflow export/import functionality."
image: "/dar.svg"
technologies:
  - "R"
  - "Bioconductor"
  - "DA"
github: "https://github.com/MicrobialGenomics-IrsicaixaOrg/dar"
demo: "https://microbialgenomics-irsicaixaorg.github.io/dar/"
order: 1
---

**dar** is an R/Bioconductor package designed to tackle one of the most persistent challenges in microbiome research: **robust differential abundance (DA) testing**. Microbiome data are sparse, highly variable and compositional, which means that single-method approaches often yield unstable or difficult-to-interpret results. dar addresses this by providing a **consensus-based framework** that integrates multiple state-of-the-art DA methods into a single, coherent workflow. :contentReference[oaicite:0]{index=0}

At its core, dar allows users to define **pipeable, recipe-like analysis workflows** that combine preprocessing steps (such as taxonomic filtering, rarefaction or subsetting) with several DA methods in parallel. Results from these methods can then be aggregated using different consensus strategies, for example majority voting or weighted combinations, to highlight features that are consistently detected across methods. This approach improves **robustness, interpretability and reproducibility** compared with relying on a single statistical framework. :contentReference[oaicite:1]{index=1}

dar is built with usability and transparency in mind. It supports common microbiome data structures such as **phyloseq** and **TreeSummarizedExperiment**, offers visualization tools to inspect agreement between methods, and provides functionality to **export and import complete workflows** so that analyses can be shared, versioned and reproduced. As the author and maintainer of dar, I use this package to standardize differential abundance analysis in our microbial genomics projects, and to make complex DA workflows more accessible to microbiome researchers and collaborators. 
