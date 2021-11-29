const a = 22;
const b = 23;
const c = 0.1;

// cinco operações
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// maior valor entre a e b

if (a > b) {
    console.log('a é maior que b');
}

else if (b > a) {
    console.log('b é maior que a');
}

else {
    console.log(('a é igual a b'));
}


// maior valor entre a,b e c

if (a > b && a > C) {
    console.log('a é maior que b e c');
}

else if (b > a && b > c) {
    console.log('b é maior que a e c');
}

else if (c > a && c > b) {
    console.log('c é maior que a e b');
}

else {
    console.log(('erro'));
}


// positivo, negatico ou zero

if (c > 0) {
    console.log('positive');
}

else if (c < 0) {
    console.log('negative');
}

else {
    console.log('zero');
}
