let numbers = [2, 4, 9, 10, 45, 67, 8, 90];
let juft = [];
let toq = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        juft.push(numbers[i]);
    }else {
        toq.push(numbers[i]);
    }
}
console.log(numbers, toq, juft);