---
layout: page
title: Research
permalink: /research/
description: 
nav: true
nav_order: 1
display_categories: [Quantum Algorithms and Simulation, Hybrid Continuous-Discrete Variable Quantum Computing, Quantum Engineering] 
horizontal: true
---

Quantum information science (QIS) studies the control and manipulation of quantum information. It provides new perspectives to rejuvenate our understanding of the fundamental aspects of Nature, and also serves as a powerful tool to solve important practical problems with ever-increasing complexity. Combining rigorous analytical reasoning and efficient numerical approaches, our research in the QUEST Lab aims at developing novel QIS-inspired algorithms and framework to tackle long-lasting challenges in physical sciences and engineering.



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
