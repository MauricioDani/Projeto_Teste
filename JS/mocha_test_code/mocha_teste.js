describe("square", function() {
    function makeTest(x) {
        let expected = x * x;
        it(`${x} ao quadrado é ${expected}`, function() {
            assert.equal(square(x), expected);
        });
    }

    for(let i = 1; i <= 5; i++) {
        makeTest(i);
    }
});