describe ("вoзведение в степень", function() {
    describe("возведение в 4 степень", function() {
        function makeTest(x) {
            let example = x ** 4;
            it(`возведение числа ${x} в степень '4' равно ${example}`, function() {
                assert.equal(pow(x, 4), example);
            });
        }

        for (let x = 2; x <= 5; x++) {
            makeTest(x);
        }
    });

    describe("проверка на подходящее значение", function() {
        it("для отрицательного 'n' возвращает NaN", function() {
            assert.isNaN(main(2, -3));
        });

        it("для дробных 'n' возвращает NaN", function() {
            assert.isNaN(main(3, 4.067));
        });
    });
});