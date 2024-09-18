function fibSequence(numero) {
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;

    while (n3 < numero){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }

    if (n3 === numero) {
        console.log(`${numero} pertence a sequência de fibonacci.`)
    } else {
        console.log(`${numero} não pertence a sequência de fibonacci.`)
    }

}

fibSequence(21);

