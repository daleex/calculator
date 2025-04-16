const readline = require('readline');
const calculator = require('./math');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Benvenuto nella Calcolatrice CLI!");
console.log("Scegli un'operazione:");
console.log("1) Addizione");
console.log("2) Sottrazione");
console.log("3) Moltiplicazione");
console.log("4) Divisione");
console.log("5) Potenza");

rl.question("Inserisci il numero dell'operazione desiderata: ", (operation) => {
    const operations = ["1", "2", "3", "4", "5"];
    if (!operations.includes(operation)) {
        console.error("Operazione non valida.");
        rl.close();
        return;
    }

    rl.question("Inserisci il primo numero: ", (num1) => {
        rl.question("Inserisci il secondo numero: ", (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            if (isNaN(a) || isNaN(b)) {
                console.error("Parametri non validi. Inserire solo numeri.");
                rl.close();
                return;
            }

            try {
                let result;
                switch (operation) {
                    case "1":
                        result = calculator.sum(a, b);
                        break;
                    case "2":
                        result = calculator.diff(a, b);
                        break;
                    case "3":
                        result = calculator.multiply(a, b);
                        break;
                    case "4":
                        result = calculator.divide(a, b);
                        break;
                    case "5":
                        result = calculator.pow(a, b);
                    break;
                }

                console.log(`Risultato: ${result}`);
            } catch (error) {
                console.error(`Errore: ${error.message}`);
            } finally {
                console.log("Grazie per aver utilizzato la calcolatrice. A presto!");
                rl.close();
            }
        });
    });
});
