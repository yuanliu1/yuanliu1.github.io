---
layout: page
title: Hybrid Discrete-Continuous Variable QIP 
description: <h6> </h6>Conventionally, quantum information science studies the control of discrete-variable (DV) systems such as qubits. Continuous-variable (CV) systems such as bosonic modes are ubiquitous in Nature (such as molecular vibrations, phonons in solid materials, photons in optics) and yet much less is known on how to control and utilize them. We develop rigorious theories and efficient schemes to simultaneously manipulate multiple bosonic modes and qubits in a hybrid fashion to fully unleash the potential of hybrid DV-CV computation and quantum information processing (QIP).
img: assets/img/qubit-osc.png
importance: 2
category: Hybrid Discrete-Continuous Variable QIP
giscus_comments: true
---

<p>&nbsp;</p>
<h3><b>Qubit-Oscillator Qudit</b></h3>
Bosonic modes (quantum harmonic oscillators) provide vast hardware-efficient quantum resources because even a single bosonic mode can be used as a multi-level quantum system. We are interested to design quantum control protocols to harnessing these continuous-variable bosonic systems for quantum computation, by constructing finite dimensional qudits from an oscillator using simple Jaynes-Cummings interactions, which is readily implementable on trapped ion quantum computers.

<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/QOQ/fig1_QOQ.png" caption="Energy level diagram in a \(d\)-QO-qudit. The first index in the state label represents the qubit state and the second represents the oscillator Fock level. Arrows indicate control pulses that couples different states." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.html path="assets/video/QOQ_sub3IIX_fr8.mp4" caption="A 24-pulse realization of the \(-I \oplus -I \oplus -X\) operation in the lowest 3 subspaces (from left to right, \(\{\ket{0,1} \leftrightarrow \ket{1, 0} \}, \{\ket{0,2} \leftrightarrow \ket{1,1}\}, \{\ket{0,3} \leftrightarrow \ket{1,2}\} \))" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<p>&nbsp;</p>
<h3><b>Hybrid CV-DV Quantum Signal Processing</b></h3>
Quantum signal processing (QSP) relies on two components: i) a block-encoding of the operator; and ii) the ability to impart an arbitrary phase shift to the encoded operator. Block-encoding in simply means embedding the target operator inside a unitary matrix. Methods for block-encoding on qubit devices are mostly limited and block-encoding of a general Hamiltonian is difficult. 
It might thus seem that such block-encoding will be especially challenging for infinite dimensional bosonic oscillators. Surprisingly, some physical interactions between qubits and oscillators can provide natural block-encodings. This allows qubitization of bosonic modes and generalization of QSP to hybrid CV-DV systems. We are interested to develop such hybrid CV-DV QSP into powerful framework to control and compile useful operations on hybrid qubit-oscillator quantum processors.

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication/QSPI/QSP.png" caption="A bosonic QSP circuit composed of single-qubit rotations and controlled displacement operations. The gates inside the bracket are repeated \(d\) times for different \(\theta_j~ (j = 1, 2, \cdots, d)\) in order to obtain a degree-\(d\) Laurent polynomial." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
