for (let i = 10; i <= 20; i++) {
    document.write(i + ', ');
}
document.write('<br>');

for (let i = 10; i <= 20; i++) {
    document.write(i * i + ', ');
}
document.write('<br>');
for (let i = 1; i <= 10; i++) {
    document.write(7 * i + ', ');
}
document.write('<br>');
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
document.write(sum);
document.write('<br>');
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
document.write(product);
document.write('<br>');
let giv = 0;
let count = 0;
for (let i = 1; i <= 500; i++) {
    giv += i;
    count++;
}
document.write(giv / count);
document.write('<br>');
let sum2 = 0;
for (let i = 30; i <= 80; i += 2) {
    sum2 += i;
}
document.write(sum2);
document.write('<br>');
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        document.write(i + ', ');
    }
}
document.write('<br>');
let n = 24;
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        document.write(i + ', ');
    }
}
document.write('<br>');
let nn = 24;
let countt = 0;
let summ = 0;
for (let i = 1; i <= nn; i++) {
    if (nn % i === 0 && i % 2 === 0) {
        countt++;
        summ += i;
    }
}
document.write(+ countt + + summ);
document.write('<br>');
for (i = 1; i <= 10; i = i + 1) {
    for (j = 1; j <= 10; j = j + 1) {
        number = i * j
        document.write(' ' + number + ' ')
    }
    document.write('<br>');
}
