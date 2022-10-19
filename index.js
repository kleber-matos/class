class Carro {
    marca;
    cor;
    combustivelPorKm;

    constructor(marca, cor, combustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }

    cacularGasto(distancia, precoCombustivel,) {
        return distancia * this.combustivelPorKm * precoCombustivel
    }

}

const uno = new Carro('fiat', 'preto', 1 / 12);
console.log(uno)
console.log(uno.cacularGasto(70, 5).toFixed(2));