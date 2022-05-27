export function semaforo(cor) {
    if (cor == 'verde') {
        return 'Pode passar';
    }
    else if (cor == 'vermelho') {
        return 'Aguarde';
    }
    else {
        return 'Inválido';
    }

}

export function diasemana(dia) {
    if (dia == 0) {
        return 'Domingo'
    }

    else if (dia == 1) {
        return 'Segunda'
    }

    else if (dia == 2) {
        return 'Terça'
    }

    else if (dia == 3) {
        return 'Quarta'
    }

    else if (dia == 4) {
        return 'Quinta'
    }

    else if (dia == 5) {
        return 'Sexta'
    }

    else if (dia == 6) {
        return 'Sábado'
    }

    else {
        return 'Número inválido'
    }
}

export function fatorial(numero) {


    let result = 1

    for (let i = numero; i > 1; i--) {
        result *= i

    }
    return result;
}

export function sequenciapar(numero) {

    let array = []
    for (let i = 0; i < numero; i++) {
        array[i] = i * 2
    }
    return array
}