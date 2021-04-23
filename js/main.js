let ElInputNum1 = document.querySelector('.num1');
let ElInputNum2 = document.querySelector('.num2');
let getResult = document.querySelector('.result');
let btnMultiply = document.querySelector('.btn-multiply');
let btnDivide = document.querySelector('.btn-divide');
let btnPow = document.querySelector('.btn-pow');
let btnRoot = document.querySelector('.btn-root');

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


btnPow.addEventListener('click', (ev) => {

    let num1 = Number(ElInputNum1.value);
    let num2 = Number(ElInputNum2.value);
    
    // let power = () => {
    //     let pow = Math.pow(num1, num2);
    //     return (pow);
    // };

    let power = () => {
        return (num1 ** num2);
    };
    getResult.innerHTML = power();
});


btnRoot.addEventListener('click', (ev) => {

    let num1 = Number(ElInputNum1.value);
    let num2 = Number(ElInputNum2.value);
    
    let root = () => {
        return (Math.pow(num1, (1/num2)));
    };

    // let root = () => {
    //     return (num1 ** (1/num2));
    // };
    getResult.innerHTML = root();
});



// Solution 2:

// let getValue = () => {
//     const form = document.forms.numbers;

//     const data = new FormData(form);

//     const num1 = Number(data.get('num1').trim());
//     const num2 = Number(data.get('num2').trim());

//     return [num1, num2];
// }

// let putResult = (value) => {
//     let getResult = document.querySelector('.result');
//     getResult.innerHTML = value;
// }

// btnMultiply.addEventListener('click', (ev) => {
//     const val = getValue();
//     const result = val[0] * val[1];
//     putResult(result);
//     });
    
    
// btnDivide.addEventListener('click', (ev) => {
//     const val = getValue();
//     const result = val[0] / val[1];
//     putResult(result);
//     });
    
    
// btnPow.addEventListener('click', (ev) => {
//     const val = getValue();
//     const result = val[0] ** val[1];
//     putResult(result);
//     });
    
    
// btnRoot.addEventListener('click', (ev) => {
//     const val = getValue();
//     const result = Math.pow(val[0], (1/val[1]));
//     putResult(result);
//     });

