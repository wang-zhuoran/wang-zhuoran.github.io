---
layout: default
---
#### 1. Distributed Algorithms Labs

- Implemented Dolev's Reliable Communication algorithm and its five modifications described in the paper: Bonomi, G. Farina, and S. Tixeuil, "Multi-hop byzantine reliable broadcast with honest dealer made practical," Journal of the Brazilian Computer Society, vol. 25, pp. 1–23, 2019
- Implemented Bracha's reliable broadcast algorithm on the top of the fully-connected network topology that Dolev algorithm provided.
- Implemented a casual-order Byzantine broadcast algorithm using vector clock technique. causal-order Byzantine broadcast

#### 2. Extension and Modification of XV6 operating system
- Implemented Unix utilities in xv6, including sleep, find, xargs, gaining proficiency in system calls.
- Added trace and Sysinfo system call
- Optimized system calls and detected accessed pages.
- Implemented Copy-on-Write Fork in xv6.
- Developed an xv6 device driver for a network interface card (NIC).
- Redesigned code to increase parallelism, addressing high lock contention in xv6 memory allocator.
- Enhanced xv6 file system by adding support for large files and symbolic links.
- Implemented mmap and munmap system calls in xv6.


#### 3. Advanced Computing Systems Labs
- Conducted profiling with gprof to identify bottlenecks; optimized matrix multiplication using SIMD (AVX) and multi-core parallelism (OpenMP), employing techniques including fine-tuning OMP directives and reordering multiplication to leverage cache locality.
- Analyzed CPU and CUDA implementations, identified bottlenecks through Nsight system profiling, and optimized by improving data transfer efficiency, leveraging shared memory, and fine-tuning grid and block dimensions.
- Accelerated the K Means algorithm using CUDA, implementing optimization strategies identified through profiling, including fine-tuning grid and block dimensions, and leveraging shared memory to reduce the data transfer overhead.


#### 4. Multi-threaded	Regular	Expression	Search	in	Rust (grep)
- Approach 1 - Rayon Implementation: Developed a multi-threaded	regular	expression search tool in Rust.	Used clap for command-line
 argument parsing, regex for pattern matching, and rayon for parallel processing. Ensured data consistency and thread safety in a multi
threaded environment using Mutex and Arc.
- Approach	2	-	Thread	Pool	Implementation:	Developed	another	multi-threaded	regular	expression	search	tool	in	Rust.	Used	clap	for
 command-line	argument	parsing,	regex	for	pattern	matching,	and	implemented	parallel	processing	using	a	custom	thread	pool.	The	custom
 thread	pool	employed	mpsc	for	task	scheduling	and	Mutex	and	Arc	for	thread	safety	and	data	consistency.	Conducted	performance	testing
 on	a	Linux	system	using	the	time	command.	The	custom	thread	pool	approach	achieved	a	39.1%	performance	improvement	over	GNU
 grep	when	executing	```grep [mM]icrodevice	..```

#### 5. Analysis of an efficient classification method based on density optimization
- Investigated and optimized the classifier using a DPC-based data preprocessing method to address the problem of multi-classification unbalanced data.
- Analyzed three mainstream classifiers: random forest, decision tree, k-nearest neighbor, and support vector machine, with a focus on using the weighted KNN algorithm based on kernel function for prediction training.
- Utilized the DPC algorithm to select the cluster center and determine the optimal clipping threshold through experimentation, resulting in an optimized training set for the classifier.
- Employed a cross test to test the accuracy of the model, and experimental results showed a well improvement in classifier accuracy using the optimization algorithm in most of cases.

