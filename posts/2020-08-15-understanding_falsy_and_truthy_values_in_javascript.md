---
title: Understanding Falsy and Truthy values in JavaScript
description: >-
  Both concepts are very common and essential for JavaScript Developers. They
  are very used in Back-end and Front-end Apps.
date: '2020-08-15 11:00:56'
image: /assets/img/fasly-and-truthy.jpg
category: js
background: '#D6BA32'
---
Let´s see in the practice with some codes the importance to know and apply these concepts. 

## Falsy

A value Falsy is something that was evaluated as false in the coercion process (type coercion).

There are seven Falsy values:

```
console.log("List the 7 falsy values")
0 ? console.log("truthy") : console.log("falsy")
0n ? console.log("truthy") : console.log("falsy") 
null ? console.log("truthy") : console.log("falsy") 
undefined ? console.log("truthy") : console.log("falsy") 
false ? console.log("truthy") : console.log("falsy") 
NaN ? console.log("truthy") : console.log("falsy") 
"" ? console.log("truthy") : console.log("falsy") 
´´´
* 0n is BigInt notation.

Running the code above we'll get falsy for all of them.

