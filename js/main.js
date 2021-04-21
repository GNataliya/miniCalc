let ElInputNum1 = document.querySelector('.num1');
let ElInputNum2 = document.querySelector('.num2');
let getResult = document.querySelector('.result');
let btnMultiply = document.querySelector('.btn-multiply');
let btnDivide = document.querySelector('.btn-divide');

btnMultiply.addEventListener('click', (ev) => {

    let num1 = Number(ElInputNum1.value);
    let num2 = Number(ElInputNum2.value);

    let multiply = () => {
        return (num1 * num2);
    };
    getResult.innerHTML = multiply();
});


btnDivide.addEventListener('click', (ev) => {

    let num1 = Number(ElInputNum1.value);
    let num2 = Number(ElInputNum2.value);

    let divide = () => {
        return (num1 / num2);
    };
    getResult.innerHTML = divide();
});

