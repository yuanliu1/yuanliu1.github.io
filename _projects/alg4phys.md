---
layout: page
title: Quantum Simulation of Physical Sciences
description: <h6></h6>Theoretical physical sciences (chemistry, physics, biology, classical mechanics) have made tremendous progress towards modeling physical processes, largely by relying on classical algorithms and computational resources. However, Nature is inherently quantum, and it is critical to harness quantum resources to simulate and understand physical processes. Quantum computers provide enormous computational power, while the best ways to use them for simulating physical sciences remain unclear. 
img: assets/img/project_1.png
importance: 2
category: Quantum Simulation of Physical Sciences
related_publications: bastidas2024unification, martyn2024parallel, liu2023bootstrap, martyn2023efficient, lu2024unqsp, meher2024error, liu2020unveiling, liu2018ab, tan2023error, hardikar2024quanta
---

Quantum information science (QIS) studies the control and manipulation of quantum information. It provides new perspectives to our understanding of the fundamental aspects of Nature, and also serves as a powerful tool to solve practical problems with ever-increasing complexity.

Our research spans quantum algorithms and simulation, hybrid continuous-discrete-variable quantum computing, and quantum engineering, with applications ranging from simulating complex physical and chemical systems to advancing quantum signal processing and error-resilient computation.

<p>&nbsp;</p>
<!-- <ul><li><h3><b> Quantum Simulation of Physical Sciences</b> </h3></li></ul> -->
<h3><b> Quantum Simulation of Physical Sciences</b> </h3>

Theoretical physical sciences (chemistry, condensed matter physics, and biology) have made tremendous progress towards modeling physical processes, largely by relying on classical algorithms and computational resources. However, Nature is inherently quantum, and it is critical to harness quantum resources to simulate and understand physical processes. 
Quantum computers provide enormous computational power, while the best ways to use them for simulating physical sciences remain unclear.
We develop novel paradigms to tackle both <emph>static</emph> problems such as electronic structure and <emph>dynamic</emph> problems such as real-time evolution of quantum systems. This line of research will also elucidate the intricate interplay between correlated electronic, vibrational, and dissipative processes that underpins fundamental aspects of chemistry and physics. Targeting applications include microscopic mechanisms of photosynthetic processes, quantum material design, and chemical reaction pathways in complex systems. 



<ul>
<li><h4><b>Electronic Structure</b></h4></li>
<p>
Electronic structure theory studies the eigenstates and eigenenergies of many-electron interacting systems. Exact solutions of electronic structure on classical computers are intractable for large systems. We are interested in potential quantum advantages of quantum computers for such problems.
</p>


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/QBE/fig1_schematic.png" caption="Our recent <b>quantum bootstrap embedding</b> algorithm leverages small quantum computers to solve large electronic structure problems based on locality of quantum entanglement in molecules. Schematic of the quantum bootstrap embedding algorithm (right, red) as compared to the classical bootstrap embedding algorithm (left, blue)." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<p>&nbsp;</p>
<li><h4><b>Real-Time Dynamics</b></h4></li>

<p>
Real-time dynamics (Hamiltonian simulation) of interacting quantum systems are notoriously difficult on classical computers but they can be efficiently simulated on quantum computers. We are interested in developing efficient Hamiltonian simulation algorithms based on hybrid qubit-bosonic quantum resources to solve <em>practical</em> chemistry problems that are relevant to photosynthesis and catalysis, which often involve both electron and nuclei motion.
</p>


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/One-shot/h2_sim_newest5.png" caption="Femto-second charge oscillation dynamics in a hydrogen molecule, simulated by our <b>fully coherent and efficient</b> quantum signal processing algorithms with optimal query complexity." class="img-fluid rounded z-depth-1" %}
    </div>
</div>



