---
layout: page
title: Hybrid Oscillator-Qubit Quantum Processors -- Instruction Set Architecture, Abstract Machine Models, and Applications 
permalink: /asplos26/
description: ASPLOS 2026 Tutorial 
img: 
importance: 1
category: 
related_publications: 
---


<b> Instructors</b> 
* [Yuan Liu](https://ece.ncsu.edu/people/yliu335/), Assistant Professor, Electrical and Computer Engineering, Computer Science, North Carolina State University,
q\_yuanliu@ncsu.edu.\
_Biography_: Yuan Liu is an Assistant Professor of Electrical & Computer Engineering and Computer Science at North Carolina State University. He is also an affiliated faculty in Physics. Prior to joining the NC State faculty, he was a postdoctoral researcher at the Massachusetts Institute of Technology. His research interests lie at the intersection of quantum computing, quantum engineering, quantum algorithms/architectures and applications.

* [Eddy Z. Zhang](https://www.cs.rutgers.edu/people/professors/details/zheng-zhang), Professor, Computer Science, Rutgers University
eddy.zhengzhang@cs.rutgers.edu \
_Biography_: Eddy Zhang is a Professor at the Department of Computer Science at Rutgers University. Before joining Rutgers at 2012, She got her Ph.D. in computer science, M.S. in computational operations research from the Collge of Wiliam and Mary, and B.S. degree in Electronic Engineering from Shanghai Jiaotong University. She develops compilation and programming techniques for emerging architectures. She has worked on enhancing program performance and reliability for different types of architectures including multi-core shared memory processors, GPUs, and quantum computers. Her current research interest is on how to enhance the programmability of quantum computing sytems.

* [Huiyang Zhou](https://ece.ncsu.edu/people/hzhou/), Professor, Electrical and Computer Engineering, North Carolina State University, hzhou@ncsu.edu. \
_Biography_: Huiyang Zhou is a professor of Electrical and Computer Engineering at North Carolina State University. His research focuses on high performance microarchitecture, GPU computing, architecture support for security & dependability, compiler optimization, and quantum computing.

* [Carlos M. Ortiz Marrero](https://compsci.colostate.edu/person/?id=BA23D593765FA62FCC83C258B7FC8A5A&sq=t), Assistant Professor, Computer Science, Colorado State University; Research Scientist, Pacific Northwest National Laboratory, carlos.ortiz.marrero@colostate.edu \
_Biography_: Carlos Marrero is an Assistant Professor at Colorado State University, a joint appointee at Pacific Northwest National Laboratory, and PI at the Co-design Center for Quantum Advantage (C2QA). He si currently working on problems related to Quantum Algorithms, Quantum Benchmarking, and Machine Learning. 

<b> Abstract</b>
 
Quantum computing with discrete variable (DV , qubit) hardware is approaching the large scales necessary for computations beyond the reach of classical computers. However, important use cases such as quantum simulations of physical models containing bosonic modes, and quantum error correction are challenging for DV-only systems. Separately, hardware containing native continuous-variable (CV , oscillator) systems has received attention as an alternative approach, yet universal quantum control of such systems is non-trivial. Hybrid CV-DV hardware offers a great advantage in meeting these challenges, offering a powerful computational paradigm that inherits the strengths of both DV and CV processors. This tutorial provides a pedagogical introduction to hybrid CV-DV computing, including foundations, compilation techniques, instruction set architectures (ISAs), abstract machine models (AMMs), algorithms and practical applications, benchmarking strategy, programming tools, and open questions and challenges. This is a highly interdisciplinary topic, attendees from any background including computer science, engineering, physics or related fields are welcome to attend.
The tutorial will also feature a demonstration session for end-to-end programming of important applications on hybrid CV-DV quantum processors.


<b> Tentative Schedule</b>
* Session I: **Foundations**: CV-DV states, operators, gates; instruction set architecture, abstract machine models for CV-DV quantum computation; algorithm primitives; illustrative applications; experimental realization.

* Session II: **Compilation**: strategy and tools to compile CV-DV quantum circuits

* Coffee Break

* Session III: **Benchmarking**: methods to benchmark CV-DV quantum processors

* Session IV: **Programming and Demo**: live programming session and demonstrations of important applications for CV-DV quantum computing


<b> Reading Materials: </b> 
* Y. Liu, S.Singh, K. C. Smith, et al., [Hybrid Oscillator-Qubit Quantum Processors: Instruction Set Architectures, Abstract Machine Models, and Applications](https://journals.aps.org/prxquantum/abstract/10.1103/4rf7-9tfx). PRX Quantum **7**, 010201 (2026). arXiv:2407.10381.
* Y. Liu, J. Martyn, J. Sinanan-Singh, K. C. Smith, S. M. Girvin and I. L. Chuang, [Toward Mixed Analog-Digital Quantum Signal Processing: Quantum AD/DA Conversion and the Fourier Transform](https://ieeexplore.ieee.org/abstract/document/11129874), IEEE Transactions on Signal Processing, vol. 73, pp. 3641-3655 (2025). aXiv:2408.14729.
* Zihan Chen, Jiakang Li, Minghao Guo, Henry Chen, Zirui Li, Joel Bierman, Yipeng Huang, Huiyang Zhou, Yuan Liu, Eddy Z. Zhang, [Genesis: A Compiler Framework for Hamiltonian Simulation on Hybrid CV-DV Quantum Computers](https://dl.acm.org/doi/full/10.1145/3695053.3731065). ISCA '25: Proceedings of the 52nd Annual International Symposium on Computer Architecture. Pages 1583 - 1597. arXiv:2505.13683.
* A. F. Kemper, et al. [Hybrid continuous-discrete-variable quantum computing: a guide to utility](https://arxiv.org/abs/2511.13882). arXiv:2511.13882 (2025).


<b> Relevant Codebase and Slides </b>
* [hybridlane: A frontend library for hybrid CV-DV computation based on Pennylane.](https://github.com/pnnl/hybridlane)
* [C2QA bosonic-qiskit.](https://github.com/C2QA/bosonic-qiskit)
* Slides to be uploaded here a few days before the Tutorial.
