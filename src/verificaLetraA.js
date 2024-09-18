function verificaLetraA(string) {
    let formattedString = string.toLowerCase();

    let count = 0;

    for (let i = 0; i < formattedString.length; i++){
        if (formattedString[i] == 'a') {
            count++
        }
    }

    if (count > 0) {
        console.log('A letra a aparece ' + count + ' vezes na string.') 
    } else {
        console.log('A letra a não aparece na string.') 
    }

}

verificaLetraA('Gostaria de aprimorar meu aprendizado em Javascript.')