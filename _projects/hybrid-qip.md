---
layout: page
title: Hybrid Continuous-Discrete Variable Quantum Computing 
description: <h6> </h6>Conventionally, quantum information science studies the control of discrete-variable (DV) systems such as qubits. Continuous-variable (CV) systems such as bosonic modes are ubiquitous in Nature (such as molecular vibrations, phonons in solid materials, photons in optics) and yet much less is known on how to control and utilize them. We develop full-stack theories, algorithms, protocols, and architectures to simultaneously manipulate multiple bosonic modes and qubits to fully unleash the potential of hybrid CV-DV quantum computing for various applications.
img: assets/img/qubit-osc.png
importance: 2
category: Hybrid Continuous-Discrete Variable Quantum Computing
giscus_comments: true
related_publications: lu2024quantum, qftwithoscillator, liu2024hybrid, liu2021constructing
---

<p>&nbsp;</p>
<h3><b>Qubit-Oscillator Qudit</b></h3>
Bosonic modes (quantum harmonic oscillators) provide vast hardware-efficient quantum resources because even a single bosonic mode can be used as a multi-level quantum system. We are interested to design quantum control protocols to harnessing these continuous-variable bosonic systems for quantum computation, by constructing finite dimensional qudits from an oscillator using simple Jaynes-Cummings interactions, which is readily implementable on trapped ion quantum computers.

<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/QOQ/fig1_QOQ.png" caption="Energy level diagram in a \(d\)-QO-qudit. The first index in the state label represents the qubit state and the second represents the oscillator Fock level. Arrows indicate control pulses that couples different states." class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.html path="assets/video/QOQ_sub3IIX_fr8.mp4" caption="A 24-pulse realization of the \(-I \oplus -I \oplus -X\) operation in the lowest 3 subspaces (from left to right, \(\{\ket{0,1} \leftrightarrow \ket{1, 0} \}, \{\ket{0,2} \leftrightarrow \ket{1,1}\}, \{\ket{0,3} \leftrightarrow \ket{1,2}\} \))" class="img-fluid z-depth-1" %}
    </div>
</div>


<p>&nbsp;</p>
<h3><b>Hybrid CV-DV Quantum Algorithms</b></h3>
Designing better quantum algorithms has been one of the central pursuits of quantum computation. Hybrid CV-DV quantum systems provide novel playground for quantum algorithm design. We are interested in generalizing major quantum algorithmic primitives such as quantum signal processing (QSP), linear combination of unitaries (LCU), and product formulas from DV to hybrid CV-DV quantum computers. These new hybrid CV-DV quantum algorithms bring significant insights and quantum advantages to quantum computation, quantum simulation (boson-fermi mixed matter), quantum control, quantum error-correction, among many other applications.

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/QSPI/QSP.png" caption="A single-variable hybrid CV-DV QSP circuit composed of single-qubit rotations and controlled displacement operations. The gates inside the bracket are repeated \(d\) times for different \(\theta_j~ (j = 1, 2, \cdots, d)\) in order to obtain a degree-\(d\) Laurent polynomial." class="img-fluid z-depth-1" %}
    </div>
</div>


<p>&nbsp;</p>
<h3><b>Hybrid CV-DV Quantum Processors and Architectures</b></h3>
Just like quantum algorithms, hybrid CV-DV quantum processors opens a variety of possibilities for architecture and compiler design across the full quantum computing stack. We are interested in exploring new abstract machine models (AMMs) and instruction set architectures (ISAs) for these novel quantum computers. 

<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/ISA/hardware_layout.pdf" caption="Schematic illustration of hybrid CV-DV hardware and its abstraction. See our bosonic ISA paper for more details." class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/ISA/bosonic_stack.png" caption="Hybrid Oscillator-Qubit Quantum Computer Architecture. Each horizontal layer represents an abstraction of the one below it, while the right-hand text provides further details and examples for each layer. In the proposed hybrid framework, distinct operating modes are included as internal boxes, each representing a choice at that particular layer of abstraction." class="img-fluid z-depth-1" %}
    </div>
</div>
