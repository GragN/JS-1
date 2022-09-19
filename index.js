let n = Math.floor(Math.random() * 1000);
console.log(n)

let num = prompt("Введите число")
console.log(num)

if (isNaN(num)) {
    alert("Введено не число, повторите попытку")
} else if (num == n) {
    alert("Вы угадали")
} else if (num > n) {
    alert("Введено число больше заданного")
} else if (num < n) {
    alert("Введено число меньше заданного")
} 