---
title: "biocroxytest – Handle Long Tests in Bioconductor Packages"
description: "An R/Bioconductor package designed to work with long-running tests in Bioconductor software. Bioconductor's build system enforces strict time limits on standard test suites, making it difficult to include expensive integration tests or large-data checks. biocroxytest introduces a roxygen2-based workflow with a dedicated @longtests roclet, allowing developers to annotate long tests directly inside roxygen2 documentation comments. These annotated blocks are automatically extracted into separate test files under a longtests/ directory, enabling independent execution in specialised CI jobs without compromising daily build speed."
short_description: "R/Bioconductor package for managing long-running tests through roxygen2 annotations, extracted into separate test files for independent CI execution."
image: "/images/projects/biocroxytest.svg"
technologies:
  - "R"
  - "Bioconductor"
  - "roxygen2"
github: "https://github.com/xec-cm/biocroxytest"
demo: "https://xec-cm.github.io/biocroxytest/"
order: 3
---

**biocroxytest** is an R/Bioconductor package designed to make it easier to work with **long-running tests** in Bioconductor software. Bioconductor’s build system enforces strict time limits on the standard test suite, which can make it difficult to include expensive integration tests, large-data checks, or performance-heavy workflows. biocroxytest addresses this by introducing a roxygen2-based workflow to define and maintain long tests alongside your code, without slowing down the daily builds.

The package provides a dedicated roclet, `@longtests`, inspired by the roxytest approach. Developers can annotate long tests directly inside their **roxygen2 documentation comments**, keeping tests close to the functions they validate and improving readability and code organisation. When `roxygen2::roxygenise()` is run with the `longtests_roclet`, these annotated blocks are automatically extracted and written into separate test files under a `longtests/` directory. This allows long-running tests to be scheduled and executed independently from the regular `testthat` suite, for example in specialised CI jobs or Bioconductor’s Long Tests infrastructure.

By keeping long tests embedded in the documentation yet materialised into dedicated test files, biocroxytest helps maintain **well-documented, reproducible and maintainable** testing setups. As the author and maintainer of this package, I use biocroxytest to ensure that complex or time-consuming checks are run regularly without compromising the speed and reliability of standard Bioconductor build and check workflows.
