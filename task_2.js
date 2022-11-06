(function () {

    let x = -3;
    let x_limit = 8;
    let h = 0.5;
    let y = 0;
    let algebraic_sum = 0;

    while (x <= x_limit) {
        if (x < 2) {
            algebraic_sum=0;
            for (let i = 2; i <= 6; i++) {
                algebraic_sum += (Math.pow(i, 2) - x);
            }
            y = Math.pow(x, 2) * algebraic_sum;
        } else {
            y = x + 2 * (Math.pow(x, 2) - x)
        }
        x += h;
        console.log(y)
    }

})()