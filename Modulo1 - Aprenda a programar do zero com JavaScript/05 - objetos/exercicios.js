/*
1 - Crie uma classe para representar carros.
 Os carros possues uma marca, uma con e um gasto medio de combustivel por Kilömetro rodado.
 Crie um método que dado a quantidade de quilómetros e o preço do combustível nos de O valor
 gasto em reais para realizar este percurso.


RESOLUÇÃO

class Carros {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calculaViagem(distancia, combustivel) {
        return distancia * this.gastoMedioKm * combustivel
    }
}

const celta = new Carros('onix', 'branco', 1 / 12);
console.log(celta.calculaViagem(70, 5));

*/

/*
2) Crie uma classe para representar pessoas.
 Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer D valor do seu TMC (INC - peso / (altura altura));
Instancie uma pessoa chamada José que tenha 78kg de peso e 1,75 de altura e peça ao José para dizer O valo do seu IMC;

RESOLUÇÃO

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return this.peso / (this.altura * this.altura)
    }


    classificar() {
        const imc = this.imc();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        }
        else if (imc >= 18.5 && imc <= 25) {
            return 'Peso normal';
        }
        else if (imc >= 25 && imc <= 30) {
            return 'Acima do peso';
        }
        else if (imc >= 30 && imc <= 40) {
            return 'Obeso';
        }
        else {
            return 'obesidade GRAVE';
        }

    }
}
const jose = new Pessoas('jose', 70, 1.75);
console.log(jose.imc() + 'esta com: ' + jose.classificar());
const ericlecio = new Pessoas('ericlecio', 70, 1.76)
console.log(ericlecio.imc() + 'esta com: ' + ericlecio.classificar());

*/
