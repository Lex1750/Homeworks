for (let i = 20; i <= 30; i += 0.5) {
    document.write('  ' + i + ' ');
}
document.write('<br>');
const rate = 27;
for (let i = 10; i <= 100; i += 10) {
    document.write(' ' + `${i} dollars is ${i * rate} hrn.` + ' ');
}
document.write('<br>');
const N = 1000;
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        document.write(' ' + i + ' ');
    }
}
document.write('<br>');
const num = 29;
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
document.write(isPrime(num));
document.write('<br>');
const nume = 243;
const isPowerOfThree = (nume) => {
    while (nume && nume % 3 === 0) {
        nume /= 3;
    }
    return nume === 1;
};
document.write(isPowerOfThree(nume));
