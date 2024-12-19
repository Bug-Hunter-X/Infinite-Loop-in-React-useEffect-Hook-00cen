# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within a `useEffect` hook. The issue stems from the missing dependency array in the `useEffect` call.  The component continuously updates the `count` state, leading to an infinite re-rendering cycle.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version with a proper dependency array. This showcases how including the necessary dependencies prevents the infinite loop.