---
layout: page
title: Quantum Algorithms and Simulation
description: <h6></h6>We are interested in efficient, scalable, and robust simulation of complex physical and chemical processes on quantum computers, focusing on long-term fault-tolerant algorithms. This line of research will elucidate the intricate interplay between correlated electronic, vibrational, and dissipative processes that underpins fundamental aspects of chemistry and physics. Targeting applications include microscopic mechanisms of photosynthetic processes, quantum material design, and chemical reaction pathways in complex systems.
img: assets/img/project_1.png
importance: 1
category: Quantum Algorithms and Simulation
related_publications:
---

<p>&nbsp;</p>
<!-- <ul><li><h3><b> Quantum Simulation of Physical Sciences</b> </h3></li></ul> -->
<h3><b> Quantum Simulation of Physical Sciences</b> </h3>

Theoretical physical sciences (chemistry, condensed matter physics, and biology) have made tremendous progress towards modeling physical processes, largely by relying on classical algorithms and computational resources. However, Nature is inherently quantum, and it is critical to harness quantum resources to simulate and understand physical processes. 
Quantum computers provide enormous computational power, while the best ways to use them for simulating physical sciences remain unclear.
We develop novel paradigms to tackle both <emph>static</emph> problems such as electronic structure and <emph>dynamic</emph> problems such as real-time evolution of quantum systems, by combining the recent discovery of a powerful quantum singular value transformation (QSVT) algorithm and other quantum information concepts to fully unleash the power of quantum computers.


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
        {% include figure.html path="assets/img/publication/ALEC/slides.png" caption="Our algorithmic-level error correction (ALEC) combines QSP/QSVT as a general framework for analyzing algorithmic-level errors with product formulas for studying how errors propogate. ALEC uses redundancy in time, as opposed to using redundancy in space to control errors." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<p>&nbsp;</p>






