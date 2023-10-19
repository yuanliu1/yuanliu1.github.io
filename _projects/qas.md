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
<center><h3><b> Quantum Simulation of Physical Sciences</b> </h3></center>

Theoretical physical sciences (chemistry, condensed matter physics, and biology) have made tremendous progress towards modeling physical processes, largely by relying on classical algorithms and computational resources. However, Nature is inherently quantum, and it is critical to harness quantum resources to simulate and understand physical processes. 
Quantum computers provide enormous computational power, while the best ways to use them for simulating physical sciences remain unclear.
We develop novel paradigms to tackle both <emph>static</emph> problems such as electronic structure and <emph>dynamic</emph> problems such as real-time evolution of quantum systems, by combining the recent discovery of a powerful quantum singular value transformation (QSVT) algorithm and other quantum information concepts to fully unleash the power of quantum computers.


<ul>
<li><h4><b>Electronic Structure</b></h4></li>
<p>
Electronic structure theory studies the eigenstates and eigenenergies of many-electron interacting systems. Exact solutions of electronic structure on classical computers are intractable for large systems. We are interested in potential quantum advantages of quantum computers for such problems.
</p>

<p> 
As an example, our recent <b>quantum bootstrap embedding</b> algorithm leverages small quantum computers to solve large electronic structure problems based on locality of quantum entanglement in molecules. State-of-the-art quantum subroutines such as swap test and amplitude amplification are exploited to achieve a quadratic speedup in quantum fragment quantum matching of the full reduced density matrices between subsystems.
</p>

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/QBE/fig1_schematic.png" caption="Schematic of the quantum bootstrap embedding algorithm (right, red) as compared to the classical bootstrap embedding algorithm (left, blue)." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/QBE/fig6_swap_size.png" caption="SWAP test allows fragment quantum matchingexponentially faster than naive tomography." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<p>&nbsp;</p>
<li><h4><b>Real-Time Dynamics</b></h4></li>

<p>
Real-time dynamics of interacting quantum systems are notoriously difficult on classical computers but they can be efficiently simulated on quantum computers. Real-time dynamics simulation is also called the Hamiltonian simulation problem in the quantum information community. There have been tremendous progress in the past few years on Hamiltonian simulation algorithms, but how to best use them for practical chemical problems is still challenging.
</p>

<p>
We developed <b>fully coherent and efficient</b> quantum signal processing algorithms for real-time dynamics simulation with optimal query complexity. The resulting quantum algorithm is applied to Heisenberg model and molecules to demonstrate its utility for simulating femto-second electronic dynamics for the first time. The fully coherent nature of our algorithm allows it to serve as a subroutine that can be easily conctenated with other quantum algorithms.
</p>

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/One-shot/h2_sim_newest5.png" caption="Femto-second-scale charge oscillation dynamics in a hydrogen molecule." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/One-shot/QueryComplexityPlots.pdf" caption="Query complexity advantage of our fully-coherent QSP Hamiltonian simulation algorithm." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<p>&nbsp;</p>
<li><h4><b>Finite-Temperature and Extended Systems</b></h4></li>
<p>
We are also interested in simulating statistical properties of interacting quantum systems at a finite temperature. We look forward to use some techniques in these classical algorithms to develop better quantum algorithms for extended systems such as quantum materials.
</p>

<p>
We have developed a class of quantum Monte Carlo algorithms, i.e., finite-temperature auxiliary-field quantum Monte Carlo (FT-AFQMC), to simulate ab initio finite temperature electronic structure of molecules and phase diagram of realistic solids in the grand canonical ensemble. This method is also generalized to the canonical ensemble, which enables calculation of properties of fixed-particle number systems.
</p>  
<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/AFQMC/C2.jpg" caption="FT-AFQMC simulation of molecular systems, approaching exact diagonalization (ED) across all temperature regimes." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/AFQMC/hubbard-2.jpg" caption="FT-AFQMC simulation for the Hubbard-Kanamori model, demonstrating significant improvement as compared to mean field theory." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/AFQMC/figure_eng-r.jpg" caption="FT-AFQMC simulation of a one-dimensional periodic solid, hydrogen chain, across various bond lengths. Significant improvement as compared to mean field theory especially in the strongly correlated regime (large bond length)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
</ul>

<p>&nbsp;</p>
<p>&nbsp;</p>
<center><h3><b>Robustness of Quantum Algorithms</b></h3></center>

The intrinsic probabilistic nature of quantum systems makes error correction or mitigation indispensable for quantum computation. While current error-correcting strategies focus on correcting errors in quantum states or quantum gates, these fine-grained error-correction methods can incur significant overhead for quantum algorithms of increasing complexity. We are interested in exploring novel ways to build robustness into quantum algorithms at a coarse-grained or system level.

<ul>
<li><h4><b>Algorithmic-level Error Correction (ALEC)</b></h4></li>
We proposed a general theory for error-correction of quantum algorithms. Despite the simplicity of the error model, this is the first demonstration that error correction beyond quantum states and quantum gates is possible. Our theory uses redundancy in time, as opposed to using redundancy in space to control errors, which differs from existing protocols such as error correcting codes and error mitigation techniques.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/ALEC/slides.png" caption="Our algorithmic-level error correction (ALEC) combines QSP/QSVT as a general framework for analyzing algorithmic-level errors with product formulas for studying how errors propogate." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/ALEC/PLOT_grover.pdf" caption="As an example, ALEC achieves effective error suppression for Grover's algorithm." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<div class="row justify-content-sm-center">
</div>
</ul>



<p>&nbsp;</p>
<p>&nbsp;</p>






