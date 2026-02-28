---
layout: page
title: Algorithms and Applications
permalink: /research/qas/
description: <h6></h6>We are interested in developing quantum and classical algorithms that are efficient, scalable, and robust, focusing on long-term fault-tolerant quantum computation and its applications. Typical applications include quantum simulation of complex physical and chemical processes, optimization, and classical mechanics problems. 
img: assets/img/project_1.png
display_categories: [Quantum Simulation of Physical Sciences, Parallel and Distributed Quantum Computing, Monte Carlo Methods, Error-Resilience] 
horizontal: true
---


<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}

  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-1">
    {%- for project in sorted_projects -%}
      <p>&nbsp;</p> 
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>



<p>&nbsp;</p>
<li><h4><b>Finite-Temperature and Extended Systems</b></h4></li>
<p>
We are also interested in simulating statistical properties of interacting quantum systems at a <em>finite temperature</em>. We aim to integrate state-of-the-art classical algorithms (such as quantum Monte Carlo) and quantum subroutines to enable efficient simulation of extended systems such as quantum materials with unprecedented accuracy and efficiency.
</p>

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/AFQMC/C2.jpg" caption="We have developed a class of quantum Monte Carlo algorithms, i.e., finite-temperature auxiliary-field quantum Monte Carlo (FT-AFQMC), to calculate ab initio finite temperature electronic structure of molecules and phase diagram of realistic solids. The figure shows our calculated internal energies approach the exact results across a wide range of temperatures." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/AFQMC/hubbard-2.jpg" caption="FT-AFQMC simulation for the Hubbard-Kanamori model (an important lattice model for high-temperature superconductivity and materials), demonstrating significant improvement as compared to mean field theory." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/AFQMC/figure_eng-r.jpg" caption="FT-AFQMC simulation of a one-dimensional periodic solid, hydrogen chain, across various bond lengths. Significant improvement as compared to mean field theory especially in the strongly correlated regime (large bond length)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
</ul>

<p>&nbsp;</p>
<p>&nbsp;</p>
<h3><b>Robustness of Quantum Algorithms</b></h3>

The intrinsic probabilistic nature of quantum systems makes error correction or mitigation indispensable for quantum computation. While current error-correcting strategies focus on correcting errors in quantum states or quantum gates, these fine-grained error-correction methods can incur significant overhead for quantum algorithms of increasing complexity. We are interested in exploring novel ways to build robustness into quantum algorithms at a coarse-grained or system level.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/ALEC/slides.png" caption="Our algorithmic-level error correction (ALEC) combines QSP/QSVT as a general framework for analyzing algorithmic-level errors with product formulas for studying how errors propagate. ALEC uses redundancy in time, as opposed to using redundancy in space to control errors." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<p>&nbsp;</p>






