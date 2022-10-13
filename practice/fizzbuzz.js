for (var x=0; i<=100; i++) {
    if (i % 3 === 0) {
        console.log("fizz");
    }
    if (i % 5 === 0) {
        console.log("buzz")
    }
    else if (i % 3 === 0 || i % 5 === 0) {
        console.log("fizzbuzz");
    }
}