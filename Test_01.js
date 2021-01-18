//функция возвращает строку с суммой числа 1 деленого на число увеличивающиеся на 3 с каждой итерацией
//округление до сотых

function SeriesSum(n) 
{    
    let g = n * 3 + 1;
    let sum = 0;

    for (let j = 1; j < g; j += 3)
    {
        sum += (1 / j);
    }
    return sum.toFixed(2);
}    
console.log (SeriesSum(4));