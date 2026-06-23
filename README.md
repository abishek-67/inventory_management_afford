# Dell E-commerce Inventory and DSA Assessment

This repository contains a structured assessment workspace featuring a functional Dell E-commerce
inventory management system and a technical DSA solution for the Zigzag Conversion problem.

## Project Structure

```
.
├── dell-inventory-system/
│   ├── index.html                          Main application interface
│   ├── style.css                           Dashboard layout and styling
│   └── app.js                              Inventory management logic
├── dsa-zigzag-conversion/
│   ├── Solution.java                       Zigzag Conversion solution
│   └── leetcode_acceptance_proof.png       LeetCode submission proof
├── testing-proof/
│   ├── tc_1.1.png                          Test Case 1.1 - Inventory display
│   ├── tc_1.2.png                          Test Case 1.2 - Add product
│   ├── tc_1.3.png                          Test Case 1.3 - Remove product
│   ├── tc_4.1.png                          Test Case 4.1 - Search (in stock)
│   └── tc_4.2.png                          Test Case 4.2 - Search (out of stock)
└── README.md                               This documentation file
```

## Dell Inventory Management System

### Features

- Displays a live inventory list of Dell products on page load
- Add new products to the inventory via an input form
- Remove existing products from the inventory by name
- Search for products with clear stock availability messaging
- Responsive dashboard layout optimized for desktop and mobile browsers

### Installation and Execution

1. Navigate to the `dell-inventory-system` directory.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. The application loads with a pre-populated inventory of Dell products.
4. Use the interface panels on the right to search, add, or remove products.

No build tools, package managers, or server setup is required.

## DSA Zigzag Conversion

### Problem

LeetCode Problem 6 - Zigzag Conversion

Given a string and a number of rows, arrange the characters in a zigzag pattern across
the specified rows, then read the result line by line.

### Running the Solution

```bash
cd dsa-zigzag-conversion
javac Solution.java
```

To test with a custom driver, create a main method that calls `new Solution().convert(s, numRows)`.

The `leetcode_acceptance_proof.png` image in this directory provides verification of successful
submission on LeetCode with all test cases passed.

## Test Requirements Mapping

| Test Case | Description                              | Verification Proof                                         |
|-----------|------------------------------------------|------------------------------------------------------------|
| TC 1.1    | Inventory list renders on page load      | `testing-proof/tc_1.1.png`                                 |
| TC 1.2    | Add product to inventory                 | `testing-proof/tc_1.2.png`                                 |
| TC 1.3    | Remove product from inventory            | `testing-proof/tc_1.3.png`                                 |
| TC 4.1    | Search returns "Product is in stock"     | `testing-proof/tc_4.1.png`                                 |
| TC 4.2    | Search returns "Product is out of stock" | `testing-proof/tc_4.2.png`                                 |
| LeetCode  | Zigzag Conversion accepted               | `dsa-zigzag-conversion/leetcode_acceptance_proof.png`      |

All test case verification proofs are included as PNG screenshots in the `testing-proof/` directory.

## Technology Stack

- HTML5, CSS3, JavaScript (ES5 standard function syntax)
- Java (JDK 8+)
