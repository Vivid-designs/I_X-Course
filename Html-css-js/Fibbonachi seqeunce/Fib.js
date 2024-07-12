// Iterative Fibonacci Function
function Fib(n) {
    // Initialize the first 2 terms
    let current = 0;  // The first term in the Fibonacci sequence
    let next = 1;     // The second term in the Fibonacci sequence

    for (let i = 0; i < n; i++) {
        console.log(current); // Print the current term
        let ph = next;        // Temporarily store the next term
        next = current + next; // Update the next term to be the sum of current and next
        current = ph;          // Update current to the previous next term
    }
}

// Call the iterative function with desired number of terms
Fib(10);

// Recursive Fibonacci Function
function recursiveFib(curr, next, index, n) {
    if (index >= n) {
        return; // Stop the recursion when the desired number of terms is reached
    }
    console.log(curr); // Print the current term
    recursiveFib(next, curr + next, index + 1, n); // Recurse with updated terms and index
}

// Helper function to start the recursion
function startRecursiveFib(n) {
    // Initialize the first 2 terms and the index
    recursiveFib(0, 1, 0, n);
}

// Call the recursive function with desired number of terms
startRecursiveFib(10);
