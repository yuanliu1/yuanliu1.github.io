---
layout: page
title: Hybrid Oscillator-Qubit Quantum Processors -- Instruction Set Architecture, Abstract Machine Models, and Applications 
permalink: /isca25/
description: ISCA 2025 Tutorial -  Saturday June 21 afternoon - Room 113, B1, Building 121
img: 
importance: 1
category: 
related_publications: 
---


<b> Instructors</b> 
* [Yuan Liu](https://ece.ncsu.edu/people/yliu335/), Electrical and Computer Engineering, Computer Science, North Carolina State University,
q\_yuanliu@ncsu.edu.\
Biography: Yuan Liu is an Assistant Professor of Electrical & Computer Engineering and Computer Science at North Carolina State University. He is also an affiliated faculty in Physics. Prior to joining the NC State faculty, he was a postdoctoral researcher at the Massachusetts Institute of Technology. His research interests lie at the intersection of quantum computing, quantum engineering, quantum algorithms/architectures and applications.

* [Huiyang Zhou](https://ece.ncsu.edu/people/hzhou/), Electrical and Computer Engineering, North Carolina State University, hzhou@ncsu.edu. \
Biography: Huiyang Zhou is a professor of Electrical and Computer Engineering at North Carolina State University. His research focuses on high performance microarchitecture, GPU computing, architecture support for security & dependability, compiler optimization, and quantum computing.




<b> Abstract</b>
 
Quantum computing with discrete variable (DV , qubit) hardware is approaching the large scales necessary for computations beyond the reach of classical computers. However, important use cases such as quantum simulations of physical models containing bosonic modes, and quantum error correction are challenging for DV-only systems. Separately, hardware containing native continuous-variable (CV , oscillator) systems has received attention as an alternative approach, yet the universal control of such systems is non-trivial. Hybrid CV-DV hardware offers a great advantage in meeting these challenges, offering a powerful computational paradigm that inherits the strengths of both DV and CV processors. [This tutorial](https://www.iscaconf.org/isca2025/program/workshops.php) provides a pedagogical introduction to hybrid CV-DV computing, including their experimental realization, theoretical foundations and compilation techniques, instruction set architectures (ISAs), abstract machine models (AMMs), algorithms and practical applications, and open questions and challenges. This is a highly interdisciplinary topic, attendees from any background including computer science, engineering, and physics are welcome to attend.
The tutorial will also provide a demonstration session for programming such hybrid CV-DV quantum processors.


<b> Tentative Schedule</b>
* 14:00 - 15:00   Physics and foundations of hybrid CV-DV quantum computation: CV states, operators, representations; universal CV-DV quantum computation; Gaussian, non-Gaussian, and hybrid CV-DV gates; Experimental realizations.

* 15:00 - 16:00   Instruction Set Architectures and Abstract Machine Models: ISAs and AMMs of hybrid CV-DV quantum processors, compilation methods and bosonic QEC.

* 16:00 - 16:30   Coffee Break

* 16:30 - 17:00   Algorithms and Applications: quantum signal processing and quantum Fourier transform

* 17:00 - 17:30   Coding and programming demontration for hybrid CV-DV quantum processors


<b> Reading List </b> 
* Yuan Liu, Shraddha Singh, Kevin C. Smith, Eleanor Crane et al., _Hybrid Oscillator-Qubit Quantum Processors: Instruction Set Architectures, Abstract Machine Models, and Applications_. arXiv:2407.10381.
* Yuan Liu et al., _Toward Mixed Analog-Digital Quantum Signal Processing: Quantum AD/DA Conversion and the Fourier Transform_, arXiv:2408.14729.
* Zihan Chen, Jiakang Li, Minghao Guo, Henry Chen, Zirui Li, Joel Bierman, Yipeng Huang, Huiyang Zhou, Yuan Liu, Eddy Z. Zhang, _Genesis: A Compiler Framework for Hamiltonian Simulation on Hybrid CV-DV Quantum Computers_. arXiv:2505.13683. To appear on ISCA (2025).

<b> Relevant Codebase and Slides </b>
* C2QA bosonic-qiskit. https://github.com/C2QA/bosonic-qiskit
* [Slides](/assets/pdf/Hybrid_CV-DV_Tutorial-ISCA2025_combined.pdf).
