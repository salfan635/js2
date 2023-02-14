'use strict'
// 1

// let age = +prompt('you age?')
// if(age > 0 && age < 12){
//     alert('ребенок')
// }if(age >= 12 && age < 18){
//     alert('подросток')
// }if(age >= 18 && age < 60){
//     alert('взрослый')
// }if(age >= 60 && age < 100){
//     alert('пенсионер')
// }if(age > 100){
//     alert('я не знаю таких')
// }

// 2

// let a = +prompt('enter number');
// switch (a) {
//     case 1:
//     alert('!')
//     break;
//     case 2:
//     alert('@')
//     break;
//     case 3:
//     alert('#')
//     break;
//     case 4:
//     alert('$')
//     break;
//     case 5:
//     alert('%')
//     break;
//     case 6:
//     alert('^')
//     break;
//     case 7:
//     alert('&')
//     break;
//     case 8:
//     alert('*')
//     break;
//     case 9:
//     alert(')')
//     break;
//     case 0:
//     alert(')')
//     break;
// }

// 3

// let n = +prompt('');
// let n1 = n / 100;
// let nm1 = Math.round(n1) 
// let no1 = n % 100;
// let n2 = no1 / 10;
// let nm2 = Math.round(n2)
// let nm3 = no1 % 10;
// let nStr = String(n)
// let nLen = nStr.length;
// if(nLen >= 3 && nLen <= 3){
// if(nm1 == nm2 || nm1 == nm3 || nm2 == nm3){
//     alert('есть одинаковые цифры')
// }else{alert('нет одинаковых цифр')}
// } else{
//         alert('Вы ввели ' + nLen + '-значное число, а нужно было 3-значное')
//     }

// 4

// let yea = +prompt();
// let yeaTru1 = Math.round(yea / 400);
// let yeaTF1 = yea / 400;
// let yeaTru2_1 = Math.round(yea / 4)
// let yeaTru2_2 = Math.round(yea / 100)
// let yeaTF2_1 =  yea / 4;
// let yeaTF2_2 = yea / 100;
// if(yeaTru1 == yeaTF1 || yeaTru2_1 == yeaTF2_1 && yeaTru2_2 != yeaTF2_2){
//     alert('visokosnuy')
// }else{alert('no')}

// 5

// let n = +prompt('');
// let nStr = String(n)
// let nLen = nStr.length;
// if(nLen >= 5 && nLen <= 5){
//     let n1 = n / 10000
//     let nm1 = Math.trunc(n1)
//     let no1 = n % 10000;
//     let n2 = no1 / 1000;
//     let nm2 = Math.trunc(n2)
//     let no2 = no1 % 1000;
//     let n3 = no2 / 100;
//     let nm3 = Math.trunc(n3);
//     let no3 = no2 % 100
//     let n4 = no3 / 10;
//     let nm4 = Math.trunc(n4);
//     let no4 = no3 % 10;
//     let nm5 = no4;
//     let rez = (nm5 + '' + nm4 + '' + nm3 + '' + nm2 + '' + nm1)
//     if(n == rez){
//         alert(rez + ' - polindrom')
//     }else{
//     alert(rez + ' - number(def)')
// }
// }else{
//     alert('none')
// }

// 6

// let usd = +prompt('how much usd you have?');
// let val = prompt('pick(eur, uah, azn)');
// if(val == 'eur'){
//     let rez = usd / 0.92;
//     let finalRez = Math.round(rez)
//     alert(finalRez)
// }
// if(val == 'uah'){
//     let rez = usd / 0.025;
//     let finalRez = Math.round(rez)
//     alert(finalRez)
// }
// if(val == 'azn'){
//     let rez = usd / 67.5;
//     let finalRez = Math.round(rez)
//     alert(finalRez)
// }

// 7

// let sum = +prompt('money')
// if(sum < 200){
//     alert(sum)
// }
// if(sum >= 200 && sum < 300){
//     alert((sum / 100)*97)
// }
// if(sum >= 300 && sum < 500){
//     alert((sum / 100)*95)
// }
// if(sum >= 500){
//     alert((sum / 100)*93)
// }

// 8

// let i = prompt('I');
// let k = prompt('kv')
// let d = i / Math.PI;
// if(d <= k){
//     alert('влазит')
// }else{
//    alert('не влазит') 
// }

// 9

// let q = 0;
// let a = +prompt('1 + 1 = ? var 1, 2, 3')
// let b = +prompt('1 + 2 = ? var 1, 2, 3')
// let c = +prompt('1 + 0 = ? var 1, 2, 3')
// let q1;
// let q2;
// let q3;
// if(a == 2){
//   q1 = 2  
// }else{
//     q1 = 0
// }

// if(b == 3){
//     q2 = 2  
//   }else{
//       q2 = 0
//   }

//   if(c == 1){
//     q3 = 2  
//   }else{
//       q3 = 0
//   }
// let rez = q1 + q2 + q3;
// alert(rez)

// 10

// let day = +prompt();
// let mou = +prompt();
// let yea = +prompt();
// let dayRez = day + 1;
// if(dayRez > 30){
//     dayRez = dayRez - 30;
//     mou = mou + 1;
// }if(mou > 12){
//     yea = yea + 1
// }if(mou > 12){
//     mou = mou - 12
// }
// alert(dayRez + ' ' + mou + ' ' + yea)
// let yeaTru1 = Math.round(yea / 400);
// let yeaTF1 = yea / 400;
// let yeaTru2_1 = Math.round(yea / 4)
// let yeaTru2_2 = Math.round(yea / 100)
// let yeaTF2_1 =  yea / 4;
// let yeaTF2_2 = yea / 100;
// if(yeaTru1 == yeaTF1 || yeaTru2_1 == yeaTF2_1 && yeaTru2_2 != yeaTF2_2){
//     alert('visokosnuy')
// }else{alert('no')}


















// let n = +prompt('');
// let nStr = String(n)
// let nLen = nStr.length;
// if(nLen >= 3 && nLen <= 3){
//     let n1 = n / 100;
//     let nm1 = Math.round(n1) 
//     let no1 = n % 100;
//     let n2 = no1 / 10;
//     let nm2 = Math.round(n2)
//     let nm3 = no1 % 10;
//     let ns2 =  String(nm2)
//     alert(nm3 + ns2 + nm1)
// }else{
//     alert('Вы ввели ' + nLen + '-значное число, а нужно было 3-значное')
// }