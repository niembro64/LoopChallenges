// print odds 1-20
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Decreasing Mutiples of 3
for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// Print Sequence
var seq = [4, 2.5, 1, -0.5, -2, -3.5];
for (var i = 0; i < seq.length; i++) {
    console.log(seq[i]);
}

// Sigma
sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Factorial
var product = 1;
for (var i = 1; i <= 12; i++) {
    product = product * i;
}
console.log(product);
