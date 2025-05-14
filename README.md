# Search and Sorting Algorithms

This repository contains a collection of algorithms I explored and tested today. It includes both search techniques and sorting algorithms, implemented in JavaScript. Each algorithm was designed to solve specific problems, optimize pair searches, perform efficient sorting, and more.

## Explored Algorithms

### **Topic 1: Pair Search with a Specific Sum (findK)**

**Goal:**  
Determine if two elements in an array sum up to a given value `k`.

**Problem:**  
Given a list of integers and a number `k`, write a function that returns a boolean indicating whether any two numbers in the list add up to `k`.

**Examples:**

- For the list `[10, 15, 3, 7]` and `k = 17`, the function should return `true` because `10 + 7 = 17`.
- For the list `[1, 8, 10, 21]` and `k = 19`, the function should return `false` because no two numbers add up to 19.

**Algorithm:**  
Use a `Set` to keep track of the numbers already seen, and for each element, check whether its complement (i.e., `k - current number`) exists in the set. If it does, return `true`, otherwise continue.

**Complexity:**  
O(n), a single pass through the array with constant-time operations for each element.

---

### **Topic 2: Buildings with Sunset Views (sortByHigh)**

**Goal:**  
Count how many buildings on a street have at least one apartment with a sunset view (west-facing). Each building is represented by its height in a list.

**Problem:**  
Given a list of building heights (from east to west), a real estate agent wants to determine how many buildings have at least one west-facing apartment with a view of the sunset.

**Examples:**

- For the list `[3, 7, 8, 3, 6, 1]`, the function should return `3`, because buildings with heights `8`, `6`, and `1` all have a sunset view.
- For the list `[1, 4, 5, 8]`, the function should return `1`, as only the building with height `8` has a view.

**Algorithm:**  
Traverse the list from right to left and use a `maxHeight` variable to keep track of the tallest building seen so far. A building has a sunset view if it is taller than all buildings to its right.

**Complexity:**  
O(n), a single pass through the array.

---

## Goals and Testing

Today I tested several algorithms with the following goals:

- **Optimize pair searching** in an array efficiently using linear time complexity.
- **Understand how to implement a sorting-based algorithm** to detect buildings with sunset views using a clean and fast method.

### **Tests Performed:**

- **Topic 1:**  
  I tested the `findK` algorithm with different arrays and `k` values to check how accurately it detects pairs that sum up to a given value.
  
- **Topic 2:**  
  I tested the building view detection logic to verify if it correctly identifies all buildings with a sunset view.

---

## Installation

To test the algorithms, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repository.git
