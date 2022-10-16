//task 1 
/*
for (let i = 10; i <= 20; i++) {

	if (i == 20) {
		document.write(i);
		break;
	}
	document.write(i + ',');
}
*/
//task 2
/*
for (let i = 10; i <= 20; i++) {
	let mult = i * i;
	if (i == 20) {
		document.write(mult);
		break;
	}
	document.write(mult + ',');
}
*/
//task 3
/*
let seven = 7;
for (let i = 1; i <= 10; i++) {
	let multiplicat = seven * i;
	document.write(seven + "*" + i + "=" + multiplicat + "<br>");
}
*/

//task 4
/*
let summ = 0;
for (let i = 1; i < 15; i++) {
	summ += i;
}
document.write(summ);
*/

//task 5
/*
let miltip = 1;
for (let i = 15; i < 35; i++) {
	miltip *= i;
}
document.write(miltip);
*/

//task 6
/*
let sum = 0;
for (let i = 1; i <= 500; i++) {
	sum += i;
}
let middle = sum / 500;
document.write(middle);
*/

//task 7
/*
let sum = 0;
for (let i = 30; i <= 80; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}
document.write(sum);
*/

//task 8
/*
for (let i = 100; i <= 200; i++) {
	if (i % 3 === 0) {
		if (i === 198) {
			document.write(i);
			break;
		}
		document.write(i + ',');
	}
}
*/
//task 9.10.11
/*
let number = parseInt(prompt('Введите натуральное число'));
let count = 0;
let sum = 0;
for (let i = 1; i <= number; i++) {

	if (number % i === 0) {

		if (i % 2 === 0) {
			count += 1;
			sum += i;
		}
		if (i === number) {
			document.write(i);
			break;
		}
		document.write(i + ',');
	}
}

document.write('<br> В данном числе четных делителей - ' + count);
document.write('<br> Сумма четных делителей - ' + sum);
*/
//task 12

for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		let multiplicat = i * j;
		document.write(i + "*" + j + "=" + multiplicat + "<br>");
	}
	document.write("<br>");
}