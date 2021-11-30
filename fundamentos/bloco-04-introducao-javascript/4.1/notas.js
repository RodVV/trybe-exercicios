// programa que retorna nota de acordo com %
let nota = -1;

if (nota > 100) {
    console.log('ERROR');
}

else if (nota < 0) {
    console.log('ERROR');

}

else if (nota > 90 || nota === 90) {
    console.log('A');
}

else if (nota > 80 || nota === 80) {
    console.log('B');
}

else if (nota > 70 || nota === 70) {
    console.log('C');
}

else if (nota > 60 || nota === 60) {
    console.log('D');
}

else if (nota > 50 || nota === 50) {
    console.log('E');
}
else if (nota < 50) {
    console.log('F');
}

else {
    console.log("ERROR");
}
        
