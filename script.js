/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.operations = {
        sum: function(a, b) {
            return a + b
        },
        subtraction: function(a, b) {
            return a - b
        },
        multiplication: function(a, b) {
            return a * b
        },
        division: function(a, b) {
            if (b === 0) {
                return 0
            }
            return a / b
        }
    }
}

const calc = new Calculator()
console.log(calc.operations.sum(5, 5))
console.log(calc.operations.subtraction(30, 4))
console.log(calc.operations.multiplication(2, 6))
console.log(calc.operations.division(20, 5))
console.log(calc.operations.division(5, 0))
