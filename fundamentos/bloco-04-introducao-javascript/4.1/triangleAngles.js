// 3 angulos de um triangulo

const angleA = 60;
const angleB = 60;
const angleC = 60;

// ordem importa

if (angleA <= 0) {
    console.log('error');
}

else if (angleB <= 0) {
    console.log('error');
}

else if (angleC <= 0) {
    console.log('error');
}

else if (angleA + angleB + angleC === 180) {
    console.log('true');
}

else if (angleA + angleB + angleC != 180) {
    console.log('false');
}

