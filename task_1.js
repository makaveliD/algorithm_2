(function () {

    let first_array = [];
    let second_array = [];
    let third_array = [];
    let counter = 0;
    let sum = 0;
    let arithmetic_average = 0;
    let code_of_char = 0;

    for (let i = 0; i < 10; i++) {
        first_array.push(String.fromCharCode(95 - 3 * i));
        second_array.push(String.fromCharCode(74 + 3 * i));
    }

    for (let i = 0; i <= first_array.length; i++) {
        if (second_array.includes(first_array[i])) {
            third_array.push(first_array[i]);
        }
    }

    for (let i = 0; i < third_array.length; i++) {
        code_of_char = third_array[i].charCodeAt();
        if (code_of_char > 82) {
            sum+=code_of_char;
            counter++;
        }
    }

    arithmetic_average = sum/counter;

    console.log(first_array,second_array,third_array,arithmetic_average);

})()